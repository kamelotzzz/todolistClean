import React, { Component } from "react";
import "./App.css";
import Age from "./components/Age";
import Title from "./components/Title";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <hr />
        <Age />
        <hr />
      </div>
    );
  }
}

export default App;
