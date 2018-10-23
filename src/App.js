import React, {
  Component
} from "react";
import Denom from "./Denom";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      error: false,
      amount: "",
      denoms: [],
      denomeWithLabel: ''
    };
    this.changeArray = [100, 50, 20, 10, 5.0, 1, 0.25, 0.1, 0.05, 0.01];
    this.changeLabelArray = ['100 dollar bill', '50 dollar bill', '20 dollar bill', '10 dollar bill', '5 dollar bill', '1 dollar bill', 'quarter', 'dime', 'nickel', 'penny'];
    this.changeLabelPArray = ['100 dollar bills', '50 dollar bills', '20 dollar bills', '10 dollar bills', '5 dollar bills', '1 dollar bills', 'quarters', 'dimes', 'nickels', 'pennies'];
  }

  computeChange(amount) {
    const result = [];

    for (let i = 0; i < this.changeArray.length; i++) {
      let changeAmount = Math.floor(amount / this.changeArray[i]);
      amount = (amount - (this.changeArray[i] * changeAmount)).toFixed(2);
      result.push(changeAmount);

    }
    let resultWithLabel = this.generateLabels(result)
    this.setState({
      denoms: result,
      denomeWithLabel: resultWithLabel
    })
  }

  generateLabels(result) {
    let labels = [];
    let denomCount = 0;
    result.forEach((denomAmount, index) => {
      if (denomAmount > 1) {
        labels.push(denomAmount + " " + this.changeLabelPArray[index]);
        denomCount++
      } else if (denomAmount == 1) {
        labels.push(denomAmount + " " + this.changeLabelArray[index]);
        denomCount++
      }
    });
    if (denomCount > 1) labels[labels.length - 1] = " and " + labels[labels.length - 1];
    else if (denomCount <= 0) return "No change.";
    let label = "Your change is " + labels.join(", ") + ".";
    return label;
  }

  updateInputValue(evt) {
    let value = evt.target.value
    if (value < 0) {
      value = 0
    }
    this.setState({
      amount: value
    });
    this.computeChange(value)
  }
  render() {
    return (
      <div className="App" jsx="true">
        
          <h3>Change Calculator</h3>
          <p>
            <input
              name="amount"
              className="amount"
              placeholder="amount"
              type="number"
              min="0"
              value={this.state.amount}
              onChange={event => this.updateInputValue(event)}
            />
          </p>
          <div>
          { this.state.denoms.map((denom, index)=>{
            return(
              <Denom key={index} label={this.changeArray[index]} amount={this.state.denoms[index]} />
            )
          })
          }
          </div>
          <div className="clear labels">
            <p>{this.state.denomeWithLabel}</p>
          </div>
      </div>
    );
  }
}

export default App;
