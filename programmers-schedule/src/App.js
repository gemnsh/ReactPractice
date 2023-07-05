import React,{useState} from "react";

import './App.css';

import MainBar from "./components/Functions/MainBar";
import Schedule from "./components/Functions/Schedule";
import Graph from "./components/Functions/Graph";
import TimeDisplay from "./components/Functions/TimeDisplay";
import Article from "./components/Functions/Article";


const App =() =>{
  const [stopWatchTimeData,setStopWatchTimeData]=useState('00:00:00');
  const [accumulateTime,setAccumulateTime]=useState(0);

  const getStopWatchHandler =(stopWatchData) => { 
    setStopWatchTimeData(stopWatchData);
  } ;

  const getStopWatchButtonStateHandler =(stopWatchButtonState)=>{
    if (stopWatchButtonState[0]){
        setAccumulateTime(prev => prev+stopWatchButtonState[1]);
    }

  };

  return (
    <div className="App">
      <MainBar />
      <Graph />
      <TimeDisplay item={[stopWatchTimeData,accumulateTime]}/>
      <Schedule onStopWatchData ={getStopWatchHandler} onGetButtonStateData={getStopWatchButtonStateHandler}/>
      <Article />

    </div>
  );
}

export default App;
