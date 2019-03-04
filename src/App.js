import React, { Component } from "react";
import "./App.css";
import Info from "./info";

class App extends Component {
  render() {
    return (
      <div id="container">
        <p className="welcome">Welcome to Home.</p>
        <p className="register">Please register below.</p>
        <Info />
      </div>
    );
  }
}

export default App;
