import React, { Component } from "react";
import "./App.css";
import Info from "./info";

class App extends Component {
  render() {
    return (
      <div id="container">
        <h1>Welcome to Home.</h1>
        <p>Please register below.</p>
        <Info />
      </div>
    );
  }
}

export default App;
