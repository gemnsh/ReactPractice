import React,{useState,useRef,useEffect} from "react";

import './StopWatch.css';

import TimeChart from "./TimeChart";

const StopWatch =(props) =>{

    const [isButtonClicked,setIsButtonClicked]=useState(true);
    const [timer, setTimer] = useState(0);
    const[startLocation,setStartLocation]=useState(270);
    const increment = useRef(null);
    
    const buttonHandler = () =>{
        setIsButtonClicked(!isButtonClicked);
        isButtonClicked ?startTimer() : resetHandler()
    
    };

    const startTimer =()=>{
        props.onGetButtonState(false);
        const date = new Date();
        const nowHours =String(date.getHours()).padStart(2,"0");
        const nowMinutes =String(date.getMinutes()).padStart(2,"0");
        const nowSeconds =String(date.getSeconds()).padStart(2,"0");
        setStartLocation((((nowHours*3600+nowMinutes*60+nowSeconds)/24000))%360);
        props.onGetStartTime(parseInt(nowHours)*3600+parseInt(nowMinutes)*60+parseInt(nowSeconds));
        increment.current = setInterval(() => {
            setTimer((timer) => timer + 1);
          }, 1000)
    };

    useEffect(()=>{
        props.onGetFormatTime(timer);
    },[timer])

    const resetHandler = () => {
        clearInterval(increment.current);
        setIsButtonClicked(true);

        props.onGetButtonState(true);
        setTimer(0);
    };

    const formatTime = () => {
        let timeValue = timer/240;
        while (timeValue>360){
            timeValue-=360
        }
        const colorB=props.sendThemeArray.calender_02
        const colorA=props.sendThemeArray.calender_03
        const cA=[parseInt(colorA.slice(1,3),16),parseInt(colorA.slice(3,5),16),parseInt(colorA.slice(5),16)];
        const cB=[parseInt(colorB.slice(1,3),16),parseInt(colorB.slice(3,5),16),parseInt(colorB.slice(5),16)];
        const newColor=[(cA[0]*timeValue+cB[0]*(360-timeValue))/360,(cA[1]*timeValue+cB[1]*(360-timeValue))/360,(cA[2]*timeValue+cB[2]*(360-timeValue))/360]
        const colorResult= [Math.round(newColor[0]).toString(16).padStart(2,'0'),Math.round(newColor[1]).toString(16).padStart(2,'0'),Math.round(newColor[2]).toString(16).padStart(2,'0'),]
        const colorOutput='#'+colorResult[0]+colorResult[1]+colorResult[2]
        
        return [timeValue,colorOutput]
    }


    return(
        <div>
            <button onClick={buttonHandler} className="stop-watch__button" style={{backgroundColor:props.sendThemeArray.color_11}}> {isButtonClicked?'START':'END'}</button>
                <TimeChart start={startLocation} value={formatTime()[0]} color={formatTime()[1]} sendThemeArray={props.sendThemeArray} buttonState={isButtonClicked}>
                </TimeChart>
        </div>
    );
};
export default StopWatch;