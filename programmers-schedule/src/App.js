import React,{useState} from "react";

import './App.css';

import MainBar from "./components/Functions/MainBar";
import Schedule from "./components/Functions/Schedule";
import Graph from "./components/Functions/Graph";
import TimeDisplay from "./components/Functions/TimeDisplay";
import Article from "./components/Functions/Article";


const App =() =>{
  const [stopWatchTimeData,setStopWatchTimeData]=useState('00:00:00');
  const [stopWatchTimeData2,setStopWatchTimeData2]=useState(0);
  
  const getStopWatchHandler =(stopWatchData) => { 
    setStopWatchTimeData(stopWatchData[0]);
    setStopWatchTimeData2(stopWatchData[1]);
  } ;

  return (
    <div className="App">
      <MainBar />
      <Graph />
      <TimeDisplay item={[stopWatchTimeData,stopWatchTimeData2]}/>
      <Schedule onStopWatchData ={getStopWatchHandler}/>
      <Article />

    </div>
  );
}

export default App;
