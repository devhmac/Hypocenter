import React, { useContext } from "react";
import axios from "axios";
import "./App.css";

import Globe from "./components/Globe";
import MainMap from "./components/MainMap";
import NavBar from "./components/NavBar";


import { stateContext } from "./contextProviders/stateContext";
import QuakePage from "./components/individualQuakePage/QuakePage"



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
          <QuakePage />
        </>
      )}
    </div>
  );
}

export default App;

// <button onClick={fetchData}>Fetch Data</button>
