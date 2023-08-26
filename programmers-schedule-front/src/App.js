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
  const [page,setPage]=useState(1);
  const [articleListClicked,setArticleListClicked]=useState(false);
  const hArray=Array(10).fill(false);
  const[isHexButtonSelected,setIsHexButtonSelected]=useState([...hArray]);
  
  const startApp =()=>{
    axios.get("/api/list/?page=1")
    .then((response) => {
        setArticleData(response.data);
    }) 
    .catch((Error) => {console.log(Error)
        setArticleData([])
        })
  
  };

  useEffect(startApp,[])
  
  useEffect(()=>{
    axios.get("/api/list/?page="+page)
    .then((response) => {
        setArticleData(response.data);
    }) 
    .catch((Error) => {console.log(Error)
        setArticleData([])
        })
  },[page,isHexButtonSelected])



  const hexaButtonStateHandler= (index) =>{
      let tmpHexArray=[...isHexButtonSelected];
      tmpHexArray[index] = !tmpHexArray[index];
      if (index===9){
        for(var i=0;i<9;i++){
            tmpHexArray[i]=tmpHexArray[9];
        }
      }
    setIsHexButtonSelected([...tmpHexArray]);
  };

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

        }
        else{
            setAccumulateTime(0);
            }

        
    }
  };

  const getStopWatchButtonStateHandler =(stopWatchButtonState)=>{
    
    if (stopWatchButtonState[0] && stopWatchButtonState!==undefined){
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

  const prevPageHandler= ()=>{
    if(page>1){
        setPage(page-1);
    }
  };

  const nextPageHandler= ()=>{
    if( Math.ceil( articleData.count / 10 )>page)
    {
        setPage(page+1);
    }
  }

  const getArticleClickHandler =(index)=>{
    axios.get("/api/article/"+articleData.results[index].id)
    .then((response) => {
        setSpecificArticleData(response.data);
        setArticleListClicked(!articleListClicked);
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
      <Article 
      item={articleData}
      onArticleClick={getArticleClickHandler}
      specificData={specificArticleData}
      onNextPageHandler={nextPageHandler}
      onPrevPageHandler={prevPageHandler}
      nowPage={page}
      articleClickState={articleListClicked}
      onHexaButtonState={hexaButtonStateHandler}
      hexButtonState={isHexButtonSelected}
      />
      <MusicPlayer tracks={[
        {
            src: `${process.env.PUBLIC_URL}/music/0001.mp3`,
            name: 'Track 1'
        },
        {
            src: `${process.env.PUBLIC_URL}/music/0002.mp3`,
            name: 'Track 2'
        },
        {
            src: `${process.env.PUBLIC_URL}/music/0003.mp3`,
            name: 'Track 3'
        },
        {
            src: `${process.env.PUBLIC_URL}/music/0004.mp3`,
            name: 'Track 4'
        },
      ]}/>
    </div>
  );
}

export default App;
