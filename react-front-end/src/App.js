import React, { useContext, useEffect } from "react";
import axios from "axios";
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

  const fetchData = () => {
    axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the express server route

        console.log(response.data.message); // Just the message
        setState({
          title: response.data[0].title,
          earthquakes: [],
          earthquake: {
            title: response.data[0].title,
            latitude: response.data[0].latitude,
            longitude: response.data[0].longitude,
            magnitude: response.data[0].magnitude,
            pager: response.data[0].pager,
            time_stamp: response.data[0].time_stamp,
            tsunami: response.data[0].tsunami,
          },
          mode: "earthquake",
        });
      });
  };

  // on load set state to earthquake list
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

      {state.mode === "main" && <Globe />}
      {state.mode === "earthquake" && (
        <>
          <QuakePage />

          <CommentButton />

          <DeleteButton />
          <ChatBox />
        </>
      )}
      <button onClick={fetchData}>Fetch Data</button>
      <MainMap earthquakes={state.earthquakes} />

      <DarkMode />
    </div>
  );
}

export default App;
