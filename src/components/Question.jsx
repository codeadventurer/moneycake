import React from "react";

export default function Question(props) {
  const handleKeyPress = (event) => {
    if (event.which === 13)
      window.scrollTo({
        top: window.pageYOffset + window.innerHeight,
        left: 0,
        behavior: "smooth",
      });
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
