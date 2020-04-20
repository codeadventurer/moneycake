import React from "react";
import "./questions-list.css";
import Question from "../components/Question";

export default function QuestionsList(props) {
  const { handleChange } = props;

  const handleClick = (event) => {
    // event.preventDefault();
    // this.setState({
    //   showCharts: true,
    // });
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
