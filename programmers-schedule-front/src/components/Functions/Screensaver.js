import React from "react";

import "./Screensaver.css";
import { ReactComponent as Eclipse } from "../Image/eclipse.svg";

const Screensaver = (props) =>{

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const formatTime = (tmp) => {
        const getSeconds = `0${(tmp % 60)}`.slice(-2);
        const minutes = `${Math.floor(tmp / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(tmp / 3600)}`.slice(-2);
        return(`${getHours}:${getMinutes}:${getSeconds}`);
    }

    return(
        <div className='screen_mobile'>
            <div className='screen_svg'>
            <Eclipse />
            </div>
            <div className='screen_text'>
                {formatTime(props.stopWatchTime)}
            </div>
        </div>
    );
};

export default Screensaver