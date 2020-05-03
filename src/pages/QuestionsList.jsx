import React from "react";
import "./questions-list.css";
import Question from "../components/Question";
import { Link } from "react-router-dom";

export default function QuestionsList(props) {
  const { handleChange } = props;

  const questionsArray = [
    {
      questionText: "How much is your netto salary?",
      name: "salary",
    },
    {
      questionText: "How much is your warm rent?",
      name: "rent",
    },
    {
      questionText:
        "How much do you pay for bills (e.g. mobile phone, internet)?",
      name: "bills",
    },
    {
      questionText: "How much do you pay for food?",
      name: "food",
    },
    {
      questionText: "How much do you pay for transport?",
      name: "transport",
    },
    {
      questionText: "How much do you spend to go out?",
      name: "goingOut",
    },
    {
      questionText: "How much do you spend on holidays?",
      name: "holidays",
    },
    {
      questionText: "How much do you save?",
      name: "savings",
    },
  ].map((question, index) => {
    return { ...question, id: index, handleChange: handleChange };
  });

  return (
    <div>
      <div className="questions_list__container">
        {questionsArray.map((question) => (
          <Question key={question.id} {...question} />
        ))}
        <div className="questions-list__button-container">
          <Link to="/result">
            <button>Submit</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
