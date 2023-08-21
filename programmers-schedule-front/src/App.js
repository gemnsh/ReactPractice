import React,{useState,useEffect} from "react";
import axios from "axios";

import './App.css';

import MainBar from "./components/Functions/MainBar";
import Schedule from "./components/Functions/Schedule";
import Graph from "./components/Functions/Graph";
import TimeDisplay from "./components/Functions/TimeDisplay";
import Article from "./components/Functions/Article";


const App =() =>{
  const [stopWatchTimeData,setStopWatchTimeData]=useState('00:00:00');
  const [startTimeData,setStartTimeData]=useState(0);
  const [accumulateTime,setAccumulateTime]=useState(1000);
  const [buttonState,setButtonState]=useState(true);
  const [articleData,setArticleData]=useState([]);
  const startApp =()=>{
    axios.get("/api/list")
    .then((response) => {setArticleData(response.data)}) 
    .catch((Error) => {console.log(Error)})
  
  };
  useEffect(startApp,[])

  const getStopWatchHandler =(stopWatchData) => { 
        setStopWatchTimeData(stopWatchData);
  } ;

  const getMomentBooleanHandler =(momentData)=>{
    if (momentData=='00:00:00'){
        let tmp= 24*3600-startTimeData;
        setAccumulateTime(prev => {
            prev=-tmp;
            return prev;
            });
        console.log('worked')
        
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
      <Article item={articleData}/>

    </div>
  );
}

export default App;
