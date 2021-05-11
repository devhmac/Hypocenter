import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Pusher from "pusher-js";
import "./App.css";

import Globe from "./components/Globe";
import MainMap from "./components/MainMap";
import NavBar from "./components/NavBar";

import { stateContext } from "./contextProviders/stateContext";
import QuakePage from "./components/individualQuakePage/QuakePage";

import CommentButton from "./components/Buttons/CommentButton.jsx";
import DeleteButton from "./components/Buttons/DeleteButton.jsx";
import ChatBox from "./components/Chatbox/ChatBox";
import DarkMode from "./components/Darkmode/DarkMode.js";

function App() {
  const { state, setState } = useContext(stateContext);
  const [mapToggle, setMapToggle] = useState(false);


  useEffect(() => {
    //pusher connection for new earthquakes
    const pusher = new Pusher("7a7e150b8cf104d8b9b9", {
      cluster: "us3",
      encrypted: true,
    });
    const channel = pusher.subscribe('quakes');
    channel.bind('new-earthquakes', (data) => {
      console.log('from pusher', data.earthquakes)

      //immutable state update - adds new eq's to earthquakes array

      //console.log('quakeList', earthquakeList)

      setState(prev => {

        const earthquakeList = [...prev.earthquakes];

        console.log('before pusher', earthquakeList)

        for (let quake of data.earthquakes) {
          earthquakeList.push(quake)
        }

        console.log('after pusher', earthquakeList)

        return {
          ...prev,
          earthquakes: earthquakeList
        }
      })
    })
  }, [])



  useEffect(() => {
    axios
      .get("/api/earthquakes")
      .then((response) => {
        console.log(response.data);
        setState({
          ...state,
          earthquakes: response.data,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <NavBar />

      {state.mode === "main" && !mapToggle && <Globe />}
      {state.mode === "main" && mapToggle && <MainMap />}

      {state.mode === "earthquake" && (
        <>
          <QuakePage />
          <CommentButton />
          <DeleteButton />
          <ChatBox />
        </>
      )}
      <button
        onClick={() => {
          setMapToggle((prev) => { setMapToggle(!prev) })
        }}
      >Fetch Data</button>


      <DarkMode />
    </div>
  );
}

export default App;
