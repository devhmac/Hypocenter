import React, { Component, useState } from 'react';
import axios from 'axios';
import './App.css';

import EqMap from "./components/EqMap.js";
import QuakeInfo from './components/QuakeInfo'


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
          longitude: response.data[0].longitude
        });
      })
  }

  return (
    <div className="App">
      <h1>{state.title}</h1>
      <button onClick={fetchData} >
        Fetch Data
        </button>
      <EqMap
        latitude={state.latitude}
        longitude={state.longitude}
      />
      <QuakeInfo />
    </div>
  );
}


export default App;
