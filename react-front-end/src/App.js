import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Pusher from "pusher-js";
import "./App.css";

import Globe from "./components/Globe";
import MainMap from "./components/MainMap";
import NavBar from "./components/NavBar";
import LiveList from './components/LiveList'

import { stateContext } from "./contextProviders/stateContext";
import QuakePage from "./components/individualQuakePage/QuakePage";

import CommentButton from "./components/Buttons/CommentButton.jsx";
import DeleteButton from "./components/Buttons/DeleteButton.jsx";
import ChatBox from "./components/Chatbox/ChatBox";

function App() {
  const { state, setState } = useContext(stateContext);
  const [mapToggle, setMapToggle] = useState(false);

  useEffect(() => {
    //initial get request for eq's
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

    //pusher connection for new earthquakes
    const pusher = new Pusher("7a7e150b8cf104d8b9b9", {
      cluster: "us3",
      encrypted: true,
    });
    const channel = pusher.subscribe('quakes');
    channel.bind('new-earthquakes', (data) => {
      //immutable state update - adds new eq's to earthquakes array
      setState(prev => {
        const earthquakeList = [...prev.earthquakes];

        for (let quake of data.earthquakes) {
          earthquakeList.push(quake)
        }
        return {
          ...prev,
          earthquakes: earthquakeList
        };
      })
    })
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
          setMapToggle((prev) => {
            setMapToggle(!prev);
          });
        }}
      >
        Fetch Data
      </button>
      <LiveList />
    </div>
  );
}

export default App;
