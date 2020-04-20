import React from "react";
import "./questions-list.css";
import DonutChart from "react-donut-chart";
import Question from "../components/Question";

export default function QuestionsList(props) {
  const { handleChange } = props;

  const handleClick = (event) => {
    // event.preventDefault();
    // this.setState({
    //   showCharts: true,
    // });
  };

  const renderCharts = () => {
    const {
      salary,
      rent,
      bills,
      food,
      transport,
      goingOut,
      holidays,
      savings,
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
              innerRadius={0.5}
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
              innerRadius={0.5}
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
        </div>
      );
    }
  };

  return (
    <div>
      <form>
        <ul>
          <Question
            questionText={"How much is your netto salary?"}
            name={"salary"}
            handleChange={handleChange}
          />
          <Question
            questionText={"How much is your warm rent?"}
            name={"rent"}
            handleChange={handleChange}
          ></Question>
          <Question
            questionText={
              "How much do you pay for bills (e.g. mobile phone, internet)?"
            }
            name={"bills"}
            handleChange={handleChange}
          ></Question>
          <Question
            questionText={"How much do you pay for food?"}
            name={"food"}
            handleChange={handleChange}
          ></Question>
          <Question
            questionText={"How much do you pay for transport?"}
            name={"transport"}
            handleChange={handleChange}
          ></Question>
          <Question
            questionText={"How much do you spend to go out?"}
            name={"goingOut"}
            handleChange={handleChange}
          ></Question>
          <Question
            questionText={"How much do you spend on holidays?"}
            name={"holidays"}
            handleChange={handleChange}
          ></Question>
          <Question
            questionText={"How much do you save?"}
            name={"savings"}
            handleChange={handleChange}
          ></Question>
        </ul>
        <button onClick={handleClick}>Submit</button>
      </form>
      {/* {renderCharts()} */}
    </div>
  );
}
