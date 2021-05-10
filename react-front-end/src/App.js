import React, { Component, useState } from "react";
import axios from "axios";
import "./App.css";

import Globe from "./components/Globe";
import MainMap from "./components/MainMap";
import EqMap from "./components/EqMap.js";
import QuakeInfo from "./components/QuakeInfo";
import NavBar from "./components/NavBar";
import CommentButton from "./components/Buttons/CommentButton.jsx";
import DeleteButton from "./components/Buttons/DeleteButton.jsx";


function App() {
  const [state, setState] = useState({
    earthquake: {
      latitude: 0,
      longitude: 0,
    },
    mode: "main",
    sampleEarthquakes: [
      {
        id: 1,
        title: "40km SSW of Valsingrad, Russia",
        latitude: "50.27763",
        longitude: "87.74748",
        magnitude: "5.5",
        pager: "yellow",
        time_stamp: "1620400873733"
      },
      {
        id: 2,
        title: "30km E of Brazil",
        latitude: "7.73975",
        longitude: "-46.12468",
        magnitude: "4.5",
        pager: "green",
        time_stamp: "1620400873733"
      },
      {
        id: 3,
        title: "20km NNW of Antarctica",
        latitude: "-68.63457",
        longitude: "-158.60193",
        magnitude: "6",
        pager: "red",
        time_stamp: "1620400873733"
      },
    ],
  });

  const fetchData = () => {
    axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the express server route

        console.log(response.data.message); // Just the message
        setState({
          title: response.data[0].title,

          earthquake: {
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

  return (
    <div className="App">

      {state.mode === "main" && (
        // <MainMap earthquakes={state.sampleEarthquakes} />
        <Globe
          earthquakes={state.sampleEarthquakes}
        />
      )}
      {state.mode === "earthquake" && (
        <>
          <NavBar />
          <h1>{state.title}</h1>
          <EqMap
            latitude={state.earthquake.latitude}
            longitude={state.earthquake.longitude}
          />
          <QuakeInfo
            magnitude={state.earthquake.magnitude}
            pager={state.earthquake.pager}
            time_stamp={state.earthquake.time_stamp}
            tsunami={state.earthquake.tsunami}
          />
          <CommentButton />

          <DeleteButton />
        </>
      )}
    </div>
  );
}

export default App;

// <button onClick={fetchData}>Fetch Data</button>
