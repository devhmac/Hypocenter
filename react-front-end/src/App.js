import React, { Component, useState } from 'react';
import axios from 'axios';
import './App.css';

import EqMap from "./components/EqMap.js";
import QuakeInfo from './components/QuakeInfo'
import NavBar from './components/NavBar'


function App() {

  const [state, setState] = useState({
    message: 'Click the button to load data!',
    latitude: 0,
    longitude: 0
  });

  const fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data) // The entire response from the express server route

        console.log(response.data.message) // Just the message
        setState({
          title: response.data[0].title,
          latitude: response.data[0].latitude,
          longitude: response.data[0].longitude,
          magnitude: response.data[0].magnitude,
          pager: response.data[0].pager,
          time_stamp: response.data[0].time_stamp,
          tsuname: response.data[0].tsunami
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
      <EqMap
        latitude={state.latitude}
        longitude={state.longitude}
      />
      <QuakeInfo
        magnitude={state.magnitude}
        pager={state.pager}
        time_stamp={state.time_stamp}
        tsunami={state.tsunami}
      />
    </div>
  );
}


export default App;
