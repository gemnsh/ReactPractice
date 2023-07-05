import React from "react";

import './Schedule.css';

import Card from "../UI/Card";
import StopWatch from "./StopWatch";
import NewData from "../Input/NewData";


const Schedule =(props) =>{
    const getFormatTimeHandler = (enteredFormatTime) =>{
        props.onStopWatchData([...enteredFormatTime]);
    };

    return(
        <Card className='schedule'>
            <div>
                <StopWatch onGetFormatTime={getFormatTimeHandler}/>
            </div>
            <NewData />
        </Card>
    );
};

export default Schedule;