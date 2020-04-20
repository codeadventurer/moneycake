import React, { useState } from "react";
import QuestionsList from "./pages/QuestionsList";
import Result from "./pages/Result";
import "./App.css";
import { Switch, Route } from "react-router-dom";

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
      <Switch>
        <Route path="/result">
          <Result data={inputData} />
        </Route>
        <Route path="/">
          <QuestionsList handleChange={handleChange} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
