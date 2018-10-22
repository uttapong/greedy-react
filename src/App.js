import React, { Component } from "react";
import logo from "./logo.svg";
import Denom from "./Denom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App" jsx="true">
        <header className="App-header">
          <h3>Change Calculator</h3>
          <p>
            <input
              name="amount"
              className="amount"
              placeholder="amount"
              type="number"
              min="0"
            />
          </p>
          <Denom label="50" amount={2} />
          <Denom label="0.5" amount={6} />
          <Denom label="0.5" amount={6} />
          <Denom label="0.5" amount={6} />
          <Denom label="0.5" amount={6} />
          <Denom label="0.5" amount={6} />
        </header>
      </div>
    );
  }
}

export default App;
