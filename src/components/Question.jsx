import React from "react";

export default function Question(props) {
  return (
    <li className="question">
      <label>
        {props.questionText}
        <input type="text" name={props.name} onChange={props.handleChange} />
      </label>
    </li>
  );
}
