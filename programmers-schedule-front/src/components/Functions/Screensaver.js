import React from "react";

import "./Screensaver.css";
import { ReactComponent as Eclipse } from "../Image/eclipse.svg";

const Screensaver = (props) =>{

    return(
        <div>
            <Eclipse />
            <div >
                {props.stopWatchTime}
            </div>
        </div>
    );
};

export default Screensaver