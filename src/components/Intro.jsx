import React, { Component } from "react";
import "./intro.css";
import DonutChart from "react-donut-chart";

export default class Intro extends Component {
  state = {
    salary: 0,
    rent: 0,
    bills: 0,
    food: 0,
    transport: 0,
    goingOut: 0,
    holidays: 0,
    savings: 0,
    showCharts: false
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({
      showCharts: true
    });
  };

  renderCharts = () => {
    const {
      salary,
      rent,
      bills,
      food,
      transport,
      goingOut,
      holidays,
      savings
    } = this.state;
    if (this.state.showCharts) {
      return (
        <div>
          <p>
            Your salary is <strong>{salary}€ </strong>
          </p>
          <hr />

          <div className="chart-container">
            <DonutChart
              innerRadius="0.50"
              width="500"
              data={[
                {
                  label: "Rent",
                  value: salary * 0.3
                },
                {
                  label: "Food",
                  value: salary * 0.1
                },
                {
                  label: "Transport",
                  value: salary * 0.1
                },
                {
                  label: "Bills",
                  value: salary * 0.1
                },
                {
                  label: "Going out",
                  value: salary * 0.1
                },
                {
                  label: "Holidays",
                  value: salary * 0.1
                },
                {
                  label: "Savings",
                  value: salary * 0.2
                }
              ]}
            />
            <DonutChart
              innerRadius="0.50"
              width="500"
              data={[
                {
                  label: "Rent",
                  value: (salary * ((rent / salary) * 100)) / 100
                },
                {
                  label: "Food",
                  value: (salary * ((food / salary) * 100)) / 100
                },
                {
                  label: "Transport",
                  value: (salary * ((transport / salary) * 100)) / 100
                },
                {
                  label: "Bills",
                  value: Math.round((salary * ((bills / salary) * 100)) / 100)
                },
                {
                  label: "Going out",
                  value: (salary * ((goingOut / salary) * 100)) / 100
                },
                {
                  label: "Holidays",
                  value: (salary * ((holidays / salary) * 100)) / 100
                },
                {
                  label: "Savings",
                  value: (salary * ((savings / salary) * 100)) / 100
                },
                {
                  label: "Money left",
                  value:
                    (salary *
                      (((salary -
                        rent -
                        food -
                        transport -
                        bills -
                        goingOut -
                        holidays -
                        savings) /
                        salary) *
                        100)) /
                    100
                }
              ]}
            />
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <form>
          <ul>
            <li className="question">
              <label>
                How much is your netto salary?
                <input type="text" name="salary" onChange={this.handleChange} />
              </label>
            </li>
            <li className="question">
              <label>
                How much is your warm rent?
                <input type="text" name="rent" onChange={this.handleChange} />
              </label>
            </li>
            <li className="question">
              <label>
                How much do you pay for bills (e.g. mobile phone, internet)?
                <input type="text" name="bills" onChange={this.handleChange} />
              </label>
            </li>
            <li className="question">
              <label>
                How much do you pay for food?
                <input type="text" name="food" onChange={this.handleChange} />
              </label>
            </li>
            <li className="question">
              <label>
                How much do you pay for transport?
                <input
                  type="text"
                  name="transport"
                  onChange={this.handleChange}
                />
              </label>
            </li>
            <li className="question">
              <label>
                How much do you spend to go out?
                <input
                  type="text"
                  name="goingOut"
                  onChange={this.handleChange}
                />
              </label>
            </li>
            <li className="question">
              <label>
                How much do you spend on holidays?
                <input
                  type="text"
                  name="holidays"
                  onChange={this.handleChange}
                />
              </label>
            </li>
            <li className="question">
              <label>
                How much do you save?
                <input
                  type="text"
                  name="savings"
                  onChange={this.handleChange}
                />
              </label>
            </li>
          </ul>
          <button onClick={this.handleClick}>Submit</button>
        </form>
        {this.renderCharts()}
      </div>
    );
  }
}
