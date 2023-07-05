import React from "react";
import './TimeDisplay.css';
import Card from "../UI/Card";

const TimeDisplay = (props) =>{
    return(
        <Card className='time-display'>
            <Card className='time-display__upper'>
                {props.item[0]}
            </Card>
            <Card className='time-display__lower'>
                {props.item[1]}
            </Card>
        </Card>
    );
};

export default TimeDisplay;