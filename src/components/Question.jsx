import React from "react";

export default function Question(props) {
  const handleKeyPress = event => {
    if (event.which === 13) console.log("Click!");
  };

  return (
    <li className="question">
      <label>
        {props.questionText}
        <input
          type="text"
          name={props.name}
          onChange={props.handleChange}
          onKeyPress={handleKeyPress}
        />
      </label>
    </li>
  );
}
