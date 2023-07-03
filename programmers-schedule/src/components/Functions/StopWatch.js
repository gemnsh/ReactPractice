import React,{useState} from "react";

import './StopWatch.css';

const StopWatch =() =>{

    const [buttonClicked,IsButtonClicked]=useState(true);

    const buttonHandler = () =>{
        console.log(buttonClicked);
        IsButtonClicked(!buttonClicked);
};
    return(
        <div>
            <button onClick={buttonHandler} className="stop-watch__button"> {buttonClicked?'START':'STOP'}</button>
            <div className="stop-watch__circle"></div>
        </div>
    );
};
export default StopWatch;