// import reactPolymer from 'react-polymer' // Must be imported before React
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr></hr>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <button><h3>Karpool Logo</h3></button>
          <paper-drawer-panel>
  <div drawer> Drawer panel... </div>
  <div main> Main panel... </div>
</paper-drawer-panel>
<paper-swatch-picker onColorPickerSelected={this.colorChange} />
        </div>
        <div>
          <p>Ride Seekers</p>
        </div>
        <div>
          <p>Drivers</p>
        </div>
        <div>
          <p>Karpool Name</p>
        </div>
        <div>
          <p>@Passenger(n)</p>
          <p>@Passenger(n+1)</p>
        </div>
        <div>
          <p>@Driver(n)</p>
          <p>@Driver(n+1)</p>
        </div>
      </div>
    );
  }
}

export default App;
