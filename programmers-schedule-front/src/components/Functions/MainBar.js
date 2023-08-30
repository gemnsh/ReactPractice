import React,{useState} from "react";
import { useInterval } from "react-use";
import moment from "moment/moment";


import Card from '../UI/Card';
import ToggleSVG from "../UI/ToggleSVG";
import {ReactComponent as Carrot} from '../Image/carrot.svg';
import {ReactComponent as Gehenna} from '../Image/gehenna.svg';

import './MainBar.css';
const MainBar =(props) =>{
    const [momentTime, setMomentTime]=useState(moment().format('HH:mm:ss'));
    useInterval(()=>{
        setMomentTime(moment().format('HH:mm:ss'));
        props.onMomentData(momentTime);
    }, 1000);

    const gehennaClicked =() =>{
        props.setThemeButtonStateData(true)
    }
    const carrotClicked =() =>{
        props.setThemeButtonStateData(false)
    }

    return (
        <Card className="main-bar" bgColor={props.sendThemeArray.color_09}>
          <div className="left-bar" >
            <div className="title" style={{color:props.sendThemeArray.color_02}}> &nbsp;&nbsp; Algorithm Diary </div>
            <div className="main-bar__time" style={{color:props.sendThemeArray.color_02}}>{momentTime}</div>
          </div>
          <div className="right-bar"> 
            <ToggleSVG  state={!props.themeButtonStateData} icon1={Carrot} icon2={Gehenna} onIcon1Clicked={carrotClicked} onIcon2Clicked={gehennaClicked} sendThemeArray={props.sendThemeArray}/>
          </div>

        </Card>        
    );
};

export default MainBar;

//sendThemeArray