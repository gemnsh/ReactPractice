import React,{useState,useEffect} from "react";
import axios from "axios";
import moment from 'moment';
import { BrowserView, MobileView } from 'react-device-detect';

import './App.css';

import MainBar from "./components/Functions/MainBar";
import MusicPlayer from "./components/Functions/MusicPlayer";
import Schedule from "./components/Functions/Schedule";
import Graph from "./components/Functions/Graph";
import TimeDisplay from "./components/Functions/TimeDisplay";
import Article from "./components/Functions/Article";
import Login from"./components/Functions/Login";
import Screensaver from "./components/Functions/Screensaver";

const App =() =>{
  const hArray=Array(11).fill(false);
  const arrLanguage=['Python','C%2b%2b','C','Java']
  const arrLevel=['1','2','3','4','5','백준']

  const [stopWatchTimeData,setStopWatchTimeData]=useState(0);
  const [startTimeData,setStartTimeData]=useState([]);
  const [accumulateTime,setAccumulateTime]=useState(0);
  const [buttonState,setButtonState]=useState(true);
  const [midnightState,setMidnightState]=useState(true);
  const [solvedacState,setSolvedacState]=useState(true);
  const [articleData,setArticleData]=useState([]);
  const [specificArticleData,setSpecificArticleData]=useState([]);
  const [page,setPage]=useState(1);
  const [articleListClicked,setArticleListClicked]=useState(true);
  const [isHexButtonSelected,setIsHexButtonSelected]=useState([...hArray]);
  const [searchUrl,setSearchUrl]=useState('/api/list/?');
  const [graphData,setGraphData]=useState([]);
  const [nowDate,setNowDate] =useState('2024-01-01');
  const [themeArray,setThemeArray]=useState({
    "id": 1,
    "color_01": "#CFDAF4",
    "color_02": "#5f6b8e",
    "color_03": "#436BE4",
    "color_04": "#9BB6F6",
    "color_05": "#889ACE",
    "color_06": "#436EEA",
    "color_07": "#F7A549",
    "color_08": "#8491C9",
    "color_09": "#C3CFF1",
    "color_10": "#8491C9",
    "color_11": "#6e8bf3",
    "color_12": "#D5E9FC",
    "calender_01": "#fde5c8",
    "calender_02": "#faca8d",
    "calender_03": "#f7a549",
    "calender_04": "#f58c2a",
    "calender_05": "#ef6711",
    "calender_06": "#d3480c",
    "image_01": "/image/nousagi_01.png",
    "image_02": "/image/nousagi_02.png",
    "image_03": "/image/pekora_02.png"
});
  const [totalCount,setTotalCount]=useState(0);
  const [after6,setAfter6]=useState(0);
  const [loginModal,setLoginModal]=useState(false);
  const [themeButtonState,setThemeButtonState]=useState(true);
  const [submitButtonState,setSubmitButtonState]=useState(true);
  const [lastTouch, setLastTouch]=useState(0)
  const preventCloseWindow = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = ""; //Chrome에서 동작하도록; deprecated
  };

  const [screensaverState,setScreensaverState]=useState(false)

  const startApp =()=>{
    setLoginModal(true);
    setThemeButtonState(true);
    setPage(1)
    const d=new Date();
    setNowDate(moment(d).format('YYYY-MM-DD'));
    
  };

  useEffect(startApp,[])

  useEffect(()=>{
    if(themeButtonState){
        axios.get("/api/color/1")
    .then((response) => {
        setThemeArray(response.data);
    }) 
    .catch((Error) => {console.log(Error)
        setArticleData({})
        })
    }
    else{
        axios.get("/api/color/2")
        .then((response) => {
            setThemeArray(response.data);
        }) 
        .catch((Error) => {console.log(Error)
            setArticleData({})
            })
    }
  },[ themeButtonState])

  useEffect(()=>{
    let tmp='/api/list/?'
    const tmpLang='lang=';
    const tmpLevel='level='
    let check=0;  
    for (let i=0;i<4;i++){
        if(isHexButtonSelected[i])
        {
            tmp=tmp+tmpLang+arrLanguage[i]+'&';
            check+=1;
        }
    }
    for (let i=4;i<10;i++){
        if(isHexButtonSelected[i])
        {
            tmp=tmp+tmpLevel+arrLevel[i-4]+'&';
            check+=1;
        }
    }
    if(check>0)
    {
        setPage(0);
        if(isHexButtonSelected[10]&&check<10)
        {
            let tmpHexArray=[...isHexButtonSelected];
            tmpHexArray[10]=false;
            setIsHexButtonSelected([...tmpHexArray]);
        }
    }
    setSearchUrl(tmp);

    axios.get("/api/stats/")
        .then((response) => {
            setTotalCount(response.data.countTotal);
            setAfter6(response.data.countAfter6);
        }) 
        .catch((Error) => {console.log(Error)
            setTotalCount(0);
            setAfter6(0);
            })

  },[isHexButtonSelected])

  useEffect(()=>{
    if(page<1){
        setPage(1)
    }
    else{
        axios.get(searchUrl+"page="+page)
        .then((response) => {
            setArticleData(response.data);
        }) 
        .catch((Error) => {console.log(Error)
            setArticleData([])
            })
    }

    const graph_addr="/api/graph/";
    let now_year=moment();
    let graph_address= graph_addr.concat( now_year.format('YYYY'))
    axios.get(graph_address)
    .then((response) => {
        setGraphData(response.data);
    }) 
    .catch((Error) => {console.log(Error)
        setGraphData([])
        })
  },[page,searchUrl])

  useEffect(()=>{
    axios.post("/api/returnTime/",{targetDate : nowDate})
    .then((response)=>{
        if(response.data.sum){
            //console.log('오늘 푼 문제 있음')
            setAccumulateTime(response.data.sum)
        }
        else{
            //console.log('오늘 푼 문제 없음')
            if(accumulateTime>=0 || buttonState===true)
            {
                //console.log('푼 문제가 없거나 버튼이 안눌려있으면 초기화')
                //console.log(accumulateTime)
                setAccumulateTime(0)
            }
        }
    }).catch((Error)=>{console.log(Error)})

    axios.get("/api/stats/")
    .then((response) => {
        setTotalCount(response.data.countTotal);
        setAfter6(response.data.countAfter6);
    }) 
    .catch((Error) => {console.log(Error)
        setTotalCount(0);
        setAfter6(0);
        })

  },[nowDate,buttonState,submitButtonState,solvedacState])


  useEffect(()=>{
    const d=new Date();
    setNowDate(moment(d).format('YYYY-MM-DD'));
    const tmpTime= 24*3600-startTimeData[0];
    setAccumulateTime(-tmpTime);
  },[midnightState])

  const getMomentBooleanHandler =(momentData)=>{
    if (momentData==='00:00:00'){
        if(buttonState===false){
            setMidnightState(prev=>!prev)
            }
        else{
            const d=new Date();
            setNowDate(moment(d).format('YYYY-MM-DD'));
        }
    }
    if (momentData==='06:00:00'){
        setSolvedacState(prev=>!prev)
    }
  };

  const hexaButtonStateHandler= (index) =>{
      let tmpHexArray=[...isHexButtonSelected];
      tmpHexArray[index] = !tmpHexArray[index];
      if (index===10){
        for(var i=0;i<10;i++){
            tmpHexArray[i]=tmpHexArray[10];
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

  const getStopWatchButtonStateHandler =(stopWatchButtonState)=>{
    
    if (stopWatchButtonState!==undefined){
        if(stopWatchButtonState)
        {
            setButtonState(true);}
        else{
            setButtonState(false);
        }
    }
  };
  
  const getStartTimeDataHandler =(startTimeDatas) =>{
    setStartTimeData([...startTimeDatas]);
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


  const onTouch=(e)=>{
    setLastTouch(stopWatchTimeData);
    setScreensaverState(false);
    e.stopImmediatePropagation();
  }

  useEffect(()=>{
    if (stopWatchTimeData-lastTouch>60){
        setScreensaverState(true)
    }
  },[stopWatchTimeData])

  return (
            <div>
    <MobileView >
    <div >
    {
            loginModal&&(<Login setLoginModalData={setLoginModal}/>)
    }
    <div onTouch={onTouch}>
    {
            screensaverState&&(<Screensaver stopWatchTime={stopWatchTimeData}/>)
    }
    </div>
    <Schedule 
      onSetPage={setPage} 
      onStopWatchData ={getStopWatchHandler} 
      onGetButtonStateData={getStopWatchButtonStateHandler} 
      onGetStartTimeData={getStartTimeDataHandler} 
      onGetSubmitButtonState={setSubmitButtonState}
      stopWatchTime={stopWatchTimeData} 
      buttonStateData={buttonState}
      sendThemeArray={themeArray}
      startTimeDatas={startTimeData}
      item={[stopWatchTimeData,accumulateTime]}
    />
    </div>
    </MobileView>
    <BrowserView>
        <div className="App">
            {
                loginModal&&(<Login setLoginModalData={setLoginModal}/>)
            }
        <MainBar onMomentData={getMomentBooleanHandler} sendThemeArray={themeArray} setThemeButtonStateData={setThemeButtonState} themeButtonStateData={themeButtonState}/>
        <Graph graphDatas={graphData} sendThemeArray={themeArray}/>
        <TimeDisplay item={[stopWatchTimeData,accumulateTime]} sendThemeArray={themeArray}/>
        <Schedule 
        onSetPage={setPage} 
        onStopWatchData ={getStopWatchHandler} 
        onGetButtonStateData={getStopWatchButtonStateHandler} 
        onGetStartTimeData={getStartTimeDataHandler} 
        onGetSubmitButtonState={setSubmitButtonState}
        stopWatchTime={stopWatchTimeData} 
        buttonStateData={buttonState}
        sendThemeArray={themeArray}
        startTimeDatas={startTimeData}
        item={[stopWatchTimeData,accumulateTime]}
        sendThemeArray={themeArray}
        />
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
        sendThemeArray={themeArray}
        totalCount={totalCount}
        after6={after6}
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
            {
                src: `${process.env.PUBLIC_URL}/music/0005.mp3`,
                name: 'Track 5'
            },
            {
                src: `${process.env.PUBLIC_URL}/music/0006.mp3`,
                name: 'Track 6'
            }
        ]}
        sendThemeArray={themeArray}
        />
        </div>
    </BrowserView>
    </div>
  );
}

export default App;
