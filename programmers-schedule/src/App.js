import React,{useState} from "react";

import './App.css';

import MainBar from "./components/Functions/MainBar";
import Schedule from "./components/Functions/Schedule";
import Graph from "./components/Functions/Graph";
import TimeDisplay from "./components/Functions/TimeDisplay";
import Article from "./components/Functions/Article";


const App =() =>{
  const [stopWatchTimeData,setStopWatchTimeData]=useState('00:00:00');
  const [startTimeData,setStartTimeData]=useState(0);
  const [accumulateTime,setAccumulateTime]=useState(0);
  const [buttonState,setButtonState]=useState(true);

  const getStopWatchHandler =(stopWatchData) => { 
        setStopWatchTimeData(stopWatchData);
  } ;

  const getMomentBooleanHandler =(momentData)=>{
    if (momentData=='00:00:00'){
        const tmp=24*3600+parseInt(momentData.substr(3,5))*60+parseInt(momentData.substr(6))
        const getSeconds = `0${(parseInt(startTimeData) % 60)}`.slice(-2);
        const minutes = `${Math.floor((parseInt(startTimeData) % 60) / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(parseInt(parseInt(startTimeData)/100) / 3600)}`;
        console.log('A',tmp,momentData,startTimeData);
        setAccumulateTime(prev => (prev=-(tmp-parseInt(startTimeData))));
    }
  };

  const getStopWatchButtonStateHandler =(stopWatchButtonState)=>{
    
    if (stopWatchButtonState[0]){
        setAccumulateTime(prev => prev+stopWatchButtonState[1]);
        setButtonState(true);
    }
    else{
        setButtonState(false);
    }
  };
  
  const getStartTimeDataHandler =(startTimeDatas) =>{
    setStartTimeData(startTimeDatas);
  };

  return (
    <div className="App">
      <MainBar onMomentData={getMomentBooleanHandler} />
      <Graph />
      <TimeDisplay item={[stopWatchTimeData,accumulateTime]}/>
      <Schedule onStopWatchData ={getStopWatchHandler} onGetButtonStateData={getStopWatchButtonStateHandler} onGetStartTimeData={getStartTimeDataHandler} stopWatchTime={stopWatchTimeData} buttonStateData={buttonState}/>
      <Article />

    </div>
  );
}

export default App;
