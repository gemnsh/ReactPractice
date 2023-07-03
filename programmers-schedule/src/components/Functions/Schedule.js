import React from "react";

import './Schedule.css';

import Card from "../UI/Card";
import StopWatch from "./StopWatch";
import NewData from "../Input/NewData";


const Schedule =() =>{
    return(
        <Card className='schedule'>
            <div>
                <StopWatch />
            </div>
            <NewData />
        </Card>
    );
};

export default Schedule;