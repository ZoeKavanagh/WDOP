import React, { Component } from 'react';
import newlogo from './newlogo.png';
import slovenia from './slovenia.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img class="newlogo" src={newlogo} />
        </header>
          <h1 className="App-title">World Day of Prayer 2019</h1>
          <h2>Sutton and Cheam Branch</h2>
          <h3> 1st March 2019 </h3>
          <p> Prepared by the Christian women of</p>
            <div style={{ height: 10 }}>
              Slovenia
            </div>
      </div>
    );
  }
}

export default App;
