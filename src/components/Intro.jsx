import React, { Component } from "react";
import "./intro.css";

export default class Intro extends Component {
  state = {
    salary: ""
  };

  handleChange = event => {
    this.setState({
      salary: event.target.value
    });
  };

  render() {
    const { salary } = this.state;
    return (
      <div>
        <form>
          <label>
            How much is your netto salary?
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
        </form>
        <p>
          Your salary is <strong>{salary}€ </strong>
        </p>
        <hr />
        <p>
          Your daily expences are <strong> {salary * 0.6}€ </strong>. Spend:
        </p>
        <ul>
          <li>
            <strong>{salary * 0.3}€ </strong> on rent
          </li>
          <li>
            <strong>{salary * 0.1}€ </strong> on food
          </li>
          <li>
            <strong>{salary * 0.1}€ </strong> on transport
          </li>
          <li>
            <strong>{salary * 0.1}€ </strong> on bills
          </li>
        </ul>
        <hr />
        <p>
          Your Splurge money (restaurants, going out, etc) is{" "}
          <strong>{salary * 0.1}€ </strong>
        </p>
        <p>
          Your Smile money (holidays, big purchases, etc) are{" "}
          <strong>{salary * 0.1}€</strong>
        </p>
        <p>
          Save <strong>{salary * 0.2}€</strong>
        </p>
      </div>
    );
  }
}
