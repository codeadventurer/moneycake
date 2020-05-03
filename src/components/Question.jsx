import React, { useRef } from "react";

export default function Question(props) {
  const inputRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.which === 13) {
      window.scrollTo({
        top: window.pageYOffset + window.innerHeight,
        left: 0,
        behavior: "smooth",
      });
      // inputRef.current.focus();
    }
  };

  return (
    <div className="question__container">
      <div className="question">
        <h2 className="question-text">{props.questionText}</h2>
        <input
          id={props.id}
          ref={inputRef}
          className="question-input"
          type="text"
          name={props.name}
          onChange={props.handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
}
