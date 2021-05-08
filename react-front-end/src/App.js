import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import EqMap from "./components/EqMap.js";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      latitude: 0,
      longitude: 0
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      console.log('here')
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        title: response.data[0].title,
        latitude: response.data[0].latitude,
        longitude: response.data[0].longitude
      });
    })
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.state.title }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>
        <EqMap
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
      </div>
    );
  }
}

export default App;
