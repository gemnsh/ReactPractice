import React from "react";
import './TimeDisplay.css';
import Card from "../UI/Card";

const TimeDisplay = (props) =>{

    const formatTime = (tmp) => {
        const getSeconds = `0${(tmp % 60)}`.slice(-2);
        const minutes = `${Math.floor(tmp / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(tmp / 3600)}`.slice(-2);;
        console.log(`${getHours}:${getMinutes}:${getSeconds}`,props.item)
        return(`${getHours}:${getMinutes}:${getSeconds}`);
    }

    return(
        <Card className='time-display'>
            <Card className='time-display__upper'>
                {formatTime(props.item[0])}
            </Card>
            <Card className='time-display__lower'>
                {formatTime(props.item[0]+props.item[1])}
            </Card>
        </Card>
    );
};

export default TimeDisplay;