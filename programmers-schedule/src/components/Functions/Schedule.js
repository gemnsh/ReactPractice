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
        props.onGetButtonStateData([...buttonState]);
    };

    return(
        <Card className='schedule'>
            <div>
                <StopWatch onGetFormatTime={getFormatTimeHandler} onGetButtonState={getButtonStateHandler}/>
            </div>
            <NewData />
        </Card>
    );
};

export default Schedule;