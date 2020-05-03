import React from "react";
import DonutChart from "react-donut-chart";
import { Link } from "react-router-dom";

export default function Result(props) {
  const {
    salary,
    rent,
    bills,
    food,
    transport,
    goingOut,
    holidays,
    savings,
  } = props.data;

  return (
    <div className="result-page">
      <h2>
        Your salary is <strong>{salary}€ </strong>
      </h2>

      <div className="chart-container">
        <DonutChart
          innerRadius={0.7}
          outerRadius={0.9}
          width={500}
          data={[
            {
              label: "Rent",
              value: salary * 0.3,
            },
            {
              label: "Food",
              value: salary * 0.1,
            },
            {
              label: "Transport",
              value: salary * 0.1,
            },
            {
              label: "Bills",
              value: salary * 0.1,
            },
            {
              label: "Going out",
              value: salary * 0.1,
            },
            {
              label: "Holidays",
              value: salary * 0.1,
            },
            {
              label: "Savings",
              value: salary * 0.2,
            },
          ]}
        />
        <DonutChart
          innerRadius={0.7}
          outerRadius={0.9}
          width={500}
          data={[
            {
              label: "Rent",
              value: (salary * ((rent / salary) * 100)) / 100,
            },
            {
              label: "Food",
              value: (salary * ((food / salary) * 100)) / 100,
            },
            {
              label: "Transport",
              value: (salary * ((transport / salary) * 100)) / 100,
            },
            {
              label: "Bills",
              value: Math.round((salary * ((bills / salary) * 100)) / 100),
            },
            {
              label: "Going out",
              value: (salary * ((goingOut / salary) * 100)) / 100,
            },
            {
              label: "Holidays",
              value: (salary * ((holidays / salary) * 100)) / 100,
            },
            {
              label: "Savings",
              value: (salary * ((savings / salary) * 100)) / 100,
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
                100,
            },
          ]}
        />
      </div>
      <div className="questions-list__button-container">
        <Link to="/">
          <button>Back to questions</button>
        </Link>
      </div>
    </div>
  );
}
