import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Denom extends Component {
  render() {
    const { label, amount } = this.props;
    return (
      <div>
        {amount > 0 && (
          <div className="denom">
            <div className="label">$ {label}</div>
            <div className="denom_amount">x {amount}</div>
          </div>
        )}
      </div>
    );
  }
}

export default Denom;
