import React,{useState,useEffect} from "react";
import axios from "axios";

import './App.css';

import MainBar from "./components/Functions/MainBar";
import MusicPlayer from "./components/Functions/MusicPlayer";
import Schedule from "./components/Functions/Schedule";
import Graph from "./components/Functions/Graph";
import TimeDisplay from "./components/Functions/TimeDisplay";
import Article from "./components/Functions/Article";

const App =() =>{
  const [stopWatchTimeData,setStopWatchTimeData]=useState(0);
  const [startTimeData,setStartTimeData]=useState(0);
  const [accumulateTime,setAccumulateTime]=useState(0);
  const [buttonState,setButtonState]=useState(true);
  const [articleData,setArticleData]=useState([]);
  const [specificArticleData,setSpecificArticleData]=useState([]);

  const startApp =()=>{
    axios.get("/api/list/?page=1")
    .then((response) => {console.log(response.data);
        setArticleData(response.data);
    }) 
    .catch((Error) => {console.log(Error)
        setArticleData([])
        })
  
  };
  useEffect(startApp,[])

  const getStopWatchHandler =(stopWatchData) => { 
    if (stopWatchData!==undefined)
    {
        setStopWatchTimeData(stopWatchData);
    }
  } ;

  const getMomentBooleanHandler =(momentData)=>{
    if (momentData==='00:00:00'){
        if(buttonState===false){
            let tmp= 24*3600-startTimeData;
            setAccumulateTime(prev => {
                prev=-tmp;
                return prev
                });
            console.log(accumulateTime,startTimeData);
        }
        else{
            setAccumulateTime(0);
            }
        console.log('worked')
        
    }
  };

  const getStopWatchButtonStateHandler =(stopWatchButtonState)=>{
    
    if (stopWatchButtonState[0] && stopWatchButtonState!==undefined){
        setAccumulateTime(prev => prev+stopWatchButtonState[1]);
        setButtonState(true);
        console.log(true)
    }
    else{
        setButtonState(false);
        console.log(false)
    }
  };
  
  const getStartTimeDataHandler =(startTimeDatas) =>{
    setStartTimeData(startTimeDatas);
  };

  const getArticleClickHandler =(index)=>{
    console.log(index,articleData.results[index].id,'clicked');
    axios.get("/api/article/"+articleData.results[index].id)
    .then((response) => {console.log(response.data);
        setSpecificArticleData(response.data);
    }) 
    .catch((Error) => {console.log(Error)
        setSpecificArticleData([])
        })
  };

  return (
    <div className="App">
      <MainBar onMomentData={getMomentBooleanHandler} />
      <Graph />
      <TimeDisplay item={[stopWatchTimeData,accumulateTime]}/>
      <Schedule onStopWatchData ={getStopWatchHandler} onGetButtonStateData={getStopWatchButtonStateHandler} onGetStartTimeData={getStartTimeDataHandler} stopWatchTime={stopWatchTimeData} buttonStateData={buttonState}/>
      <Article item={articleData} onArticleClick={getArticleClickHandler} specificData={specificArticleData}/>
      <MusicPlayer tracks={[
        {
            src: `${process.env.PUBLIC_URL}/0001.mp3`,
            name: 'Track 1'
        },
        {
            src: `${process.env.PUBLIC_URL}/0002.mp3`,
            name: 'Track 2'
        },
        {
            src: `${process.env.PUBLIC_URL}/0003.mp3`,
            name: 'Track 3'
        },
        {
            src: `${process.env.PUBLIC_URL}/0004.mp3`,
            name: 'Track 4'
        },
      ]}/>
    </div>
  );
}

export default App;
