import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Playground from './Playground';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="App">
          <h2>React Rocks!!!</h2>
          <p>A simple demo I built for fun. I got this idea from  
            <a href="https://liquify.io"> Liquify. </a>
            and wanted to try it out. Big ups to Todd Motto and Niels Den Dekker.
          </p>
        </div>
        <Playground />  
      </div>
    );
  }
}

export default App;
