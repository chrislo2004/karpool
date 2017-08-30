import reactPolymer from 'react-polymer' // Must be imported before React
import React, { Component } from 'react';
import {
  PaperCheckbox,
  PaperToggleButton,
  PaperInput,
  PaperTextarea,
  IronAutogrowTextarea,
  PaperSlider,
  PaperMenu,
  PaperListbox,
  PaperRadioGroup,
  PaperTabs,
  IronSelector
} from 'react-polymer/input'

import logo from './logo.svg';
import './App.css';

// reactPolymer.registerAttribute('drawer') // Note: this is only needed for custom attributes on standard elements like div
// reactPolymer.registerAttribute('main')
// reactPolymer.registerEvent('color-picker-selected', 'onColorPickerSelected')

export default class App extends Component {
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
        <div className="Align-right">
          <img src={logo} className="ProfileBtn_Align-right" alt="logo" />
        </div>
        <div className="Align-right">
          <button><h3>Karpool Logo</h3></button>
        </div>
        <paper-drawer-panel>
          <div drawer> Drawer panel... </div>
          <div main> Main panel... </div>
        </paper-drawer-panel>
        <paper-swatch-picker onColorPickerSelected={this.colorChange} />
        <PaperInput value={this.state.value} onChange={this.valueChanged} />
        <PaperToggleButton checked={this.state.checked} onChange={this.checkedChange} />
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
