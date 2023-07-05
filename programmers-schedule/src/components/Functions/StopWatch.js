import React,{useState,useRef} from "react";

import './StopWatch.css';

import TimeChart from "./TimeChart";

const StopWatch =(props) =>{

    const [isButtonClicked,setIsButtonClicked]=useState(true);
    const [timer, setTimer] = useState(0);
    const[startLocation,setStartLocation]=useState(270);
    const increment = useRef(null);
    let endTime='';
    let startTime='';
    const buttonHandler = () =>{
        setIsButtonClicked(!isButtonClicked);
        {
            isButtonClicked ?startTimer() : resetHandler()
          }
    };

    const startTimer =()=>{
        startTime=getTime();
        props.onGetButtonState([false,0]);
        setStartLocation((270+(startTime[1]/24000))%360);
        increment.current = setInterval(() => {
            setTimer((timer) => timer + 1);
          }, 1)
    };

    const getTime =()=>{
        const date = new Date();
        const nowHours =String(date.getHours()).padStart(2,"0");
        const nowMinutes =String(date.getMinutes()).padStart(2,"0");
        const nowSeconds =String(date.getSeconds()).padStart(2,"0");
        return [`${nowHours}:${nowMinutes}:${nowSeconds}`,nowHours*3600+nowMinutes*60+nowSeconds]
    };

    const resetHandler = () => {
        endTime=getTime()[0];
        clearInterval(increment.current);
        setIsButtonClicked(true);

        props.onGetButtonState([true,timer]);
        setTimer(0);
    };

    const formatTime = () => {
        let timeValue = timer/864;
        while (timeValue>100){
            timeValue-=100
        }
        const colorB='ff9966'
        const colorA='ff5e62'
        const cA=[parseInt(colorA.slice(0,2),16),parseInt(colorA.slice(2,4),16),parseInt(colorA.slice(4),16)];
        const cB=[parseInt(colorB.slice(0,2),16),parseInt(colorB.slice(2,4),16),parseInt(colorB.slice(4),16)];
        const newColor=[(cA[0]*timeValue+cB[0]*(100-timeValue))/100,(cA[1]*timeValue+cB[1]*(100-timeValue))/100,(cA[2]*timeValue+cB[2]*(100-timeValue))/100]
        const colorResult= [Math.round(newColor[0]).toString(16).padStart(2,'0'),Math.round(newColor[1]).toString(16).padStart(2,'0'),Math.round(newColor[2]).toString(16).padStart(2,'0'),]
        const colorOutput='#'+colorResult[0]+colorResult[1]+colorResult[2]
        
        props.onGetFormatTime(timer);

        return [timeValue,colorOutput]
    }


    return(
        <div>
            <button onClick={buttonHandler} className="stop-watch__button"> {isButtonClicked?'START':'END'}</button>
            <div className="stop-watch__circle">
                <TimeChart start={startLocation} value={formatTime()[0]} color={formatTime()[1]}>
                </TimeChart>
            </div>
        </div>
    );
};
export default StopWatch;