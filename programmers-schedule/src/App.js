import React,{useState} from "react";

import './App.css';

import MainBar from "./components/Functions/MainBar";
import Schedule from "./components/Functions/Schedule";
import Graph from "./components/Functions/Graph";
import TimeDisplay from "./components/Functions/TimeDisplay";
import Article from "./components/Functions/Article";

function App() {
  return (
    <div className="App">
      <MainBar />
      <Graph />
      <TimeDisplay />
      <Schedule />
      <Article />

    </div>
  );
}

export default App;
