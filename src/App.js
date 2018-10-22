import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App" jsx="true">
        <header className="App-header">
          <p>
            <input name="amount" className="amount" />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
