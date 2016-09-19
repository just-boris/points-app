import './styles.css';
import React, { Component } from 'react';
import Slider from '../Slider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Adjust your scores</h1>
        <Slider title="A" />
        <Slider title="B" />
        <Slider title="C" />
      </div>
    );
  }
}

export default App;
