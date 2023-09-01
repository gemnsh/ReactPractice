import React from "react";
import './TimeDisplay.css';
import Card from "../UI/Card";

const TimeDisplay = (props) =>{
    const formatTime = (tmp) => {
        const getSeconds = `0${(tmp % 60)}`.slice(-2);
        const minutes = `${Math.floor(tmp / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(tmp / 3600)}`.slice(-2);
        return(`${getHours}:${getMinutes}:${getSeconds}`);
    }

    return(
        <Card className='time-display' bgColor={props.sendThemeArray.color_09}>
            <Card className='time-display__upper' bgColor={props.sendThemeArray.color_12} >
                <div className='time-text' style={{color:props.sendThemeArray.color_08}}>
                {formatTime(props.item[0])}
                </div>
            </Card>
            <Card className='time-display__lower' bgColor={props.sendThemeArray.color_12}>
            <div className='time-text' style={{color:props.sendThemeArray.color_08}}>
                {formatTime(props.item[0]+props.item[1])}
                </div>
            </Card>
        </Card>
    );
};

export default TimeDisplay;