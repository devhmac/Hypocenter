import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
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
        title: response.data[0].title
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
      </div>
    );
  }
}

export default App;
