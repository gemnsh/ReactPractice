import React from "react";

import './Schedule.css';

import Card from "../UI/Card";
import StopWatch from "./StopWatch";
import NewData from "../Input/NewData";


const Schedule =(props) =>{
    const getFormatTimeHandler = (enteredFormatTime) =>{
        props.onStopWatchData(enteredFormatTime);
    };

    const getButtonStateHandler = (buttonState) =>{
        props.onGetButtonStateData(buttonState);
    };

    const getStartTimeHandler =(startTime)=>{
        props.onGetStartTimeData(startTime);
    };

    const setPageHandler =(pageNumber)=>{
        props.onSetPage(pageNumber)
    }

    return(
        <Card className='schedule'>
            <div>
                <StopWatch onGetFormatTime={getFormatTimeHandler} onGetButtonState={getButtonStateHandler} onGetStartTime={getStartTimeHandler}/>
                <img id="nousagi_1" draggable={false} src={process.env.PUBLIC_URL+"/image/nousagi_01.png"}/>
                <img id="nousagi_2" draggable={false} src={process.env.PUBLIC_URL+"/image/nousagi_02.png"}/>
            </div>
            <NewData stopTime={props.stopWatchTime} buttonStateDatas={props.buttonStateData} onSetPageHandler={setPageHandler} />
        </Card>
    );
};

export default Schedule;