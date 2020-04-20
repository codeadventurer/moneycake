import React, { useState } from "react";
import QuestionsList from "./pages/QuestionsList";
import Result from "./pages/Result";
import "./App.css";

function App() {
  const [inputData, setInputData] = useState({
    rent: 0,
    bills: 0,
    food: 0,
    transport: 0,
    goingOut: 0,
    holidays: 0,
    savings: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  return (
    <div className="App">
      <QuestionsList handleChange={handleChange} />
      <Result data={inputData} />
    </div>
  );
}

export default App;
