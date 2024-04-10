import React from "react";
import { BrowserView, MobileView } from 'react-device-detect';

import './Schedule.css';

import Card from "../UI/Card";
import StopWatch from "./StopWatch";
import NewData from "../Input/NewData";


const Schedule =(props) =>{
    const getFormatTimeHandler = (enteredFormatTime) =>{
        props.onStopWatchData(enteredFormatTime);
    };

    const getButtonStateHandler = (buttonState) =>{
        props.onGetButtonStateData(buttonState);
    };

    const getStartTimeHandler =(startTime)=>{
        props.onGetStartTimeData([...startTime]);
    };

    const setPageHandler =(pageNumber)=>{
        props.onSetPage(pageNumber)
    }

    const setSubmitStateHandler = (t)=>{
        props.onGetSubmitButtonState(t)
    }
    
    return(
        <div>
            <BrowserView>
                <Card className='schedule' bgColor={props.sendThemeArray.color_09}>
                
                <StopWatch onGetFormatTime={getFormatTimeHandler} onGetButtonState={getButtonStateHandler} onGetStartTime={getStartTimeHandler} sendThemeArray={props.sendThemeArray}/>
                <img id="nousagi_1" draggable={false} src={process.env.PUBLIC_URL+props.sendThemeArray.image_01}/>
                <img id="nousagi_2" draggable={false} src={process.env.PUBLIC_URL+props.sendThemeArray.image_02}/>
            
                <NewData stopTime={props.stopWatchTime} buttonStateDatas={props.buttonStateData}  onSubmitButtonStateHandler={setSubmitStateHandler} onSetPageHandler={setPageHandler} startTimeData={props.startTimeDatas} sendThemeArray={props.sendThemeArray}/>
                </Card>
            </BrowserView>
            <MobileView>
                    <StopWatch
                    onGetFormatTime={getFormatTimeHandler}
                    onGetButtonState={getButtonStateHandler}
                    onGetStartTime={getStartTimeHandler}
                    item={props.item}
                    sendThemeArray={props.sendThemeArray}/>
                    <NewData stopTime={props.stopWatchTime} buttonStateDatas={props.buttonStateData}  onSubmitButtonStateHandler={setSubmitStateHandler} onSetPageHandler={setPageHandler} startTimeData={props.startTimeDatas} sendThemeArray={props.sendThemeArray}/>

            </MobileView>
        </div>
    );
};

export default Schedule;