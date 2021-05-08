import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

import EqMap from "./components/EqMap.js";
import MainMap from "./components/MainMap.js";
import QuakeInfo from './components/QuakeInfo'
import NavBar from './components/NavBar'



function App() {

  const [state, setState] = useState({
    message: 'Click the button to load data!',
    earthquake: {
      latitude: 0,
      longitude: 0
    },
    mode: "main",
    sampleEarthquakes: [
      {
        id: 1,
        latitude: 50.27763,
        longitude: 87.74748
      },
      {
        id: 2,
        latitude: 7.73975,
        longitude: -46.12468
      },
      {
        id: 3,
        latitude: -68.63457,
        longitude: -158.60193
      }
    ]
  });

  const fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data) // The entire response from the express server route

        console.log(response.data.message) // Just the message
        setState({
          title: response.data[0].title,
          earthquake: {
            latitude: response.data[0].latitude,
            longitude: response.data[0].longitude
          },
          mode: "earthquake"
        });
      })
  }

  return (
    <div className="App">
      <NavBar />
      <h1>{state.title}</h1>
      <button onClick={fetchData} >
        Fetch Data
        </button>
      {state.mode === "main" && (
        <MainMap
          earthquakes={state.sampleEarthquakes}
        />
      )}
      {state.mode === "earthquake" && (
        <EqMap
          latitude={state.earthquake.latitude}
          longitude={state.earthquake.longitude}
        />
      )}
      <QuakeInfo />
    </div>
  );
}


export default App;
