import React from "react";
import "./App.css";
import Timeline from "./Timeline";
import LunchCalender from "./LunchCalender";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="primary">Brilliant Lunch</p>
      </header>

      <div className="Main-Container">
        <Timeline></Timeline>
        <LunchCalender></LunchCalender>
      </div>
    </div>
  );
}

export default App;
