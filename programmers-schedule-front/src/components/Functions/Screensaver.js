import React from "react";

import "./Screensaver.css";
import { ReactComponent as Eclipse } from "../Image/eclipse.svg";

const Screensaver = (props) =>{

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    return(
        <div className='screen_mobile'>
            <Eclipse />
            <div className='screen_text'>
                {props.stopWatchTime}
            </div>
        </div>
    );
};

export default Screensaver