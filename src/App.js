import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleScroll = () => {
    console.log("scroll!");
    // window.scrollTo({
    //   top: window.pageYOffset + window.innerHeight,
    //   left: 0,
    //   behavior: "smooth",
    // });
    // window.removeEventListener("scroll", handleScroll);
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
