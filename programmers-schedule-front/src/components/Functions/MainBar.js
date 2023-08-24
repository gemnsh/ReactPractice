import React,{useState} from "react";
import { useInterval } from "react-use";
import moment from "moment/moment";


import Card from '../UI/Card';
import './MainBar.css';
const MainBar =(props) =>{
    const [momentTime, setMomentTime]=useState(moment().format('HH:mm:ss'));

    useInterval(()=>{
        setMomentTime(moment().format('HH:mm:ss'));
        props.onMomentData(momentTime);
    }, 1000);

    return (
        <Card className="main-bar">
           <div className="left-bar">
                <div className="title"> &nbsp;&nbsp; Algorithm Diary </div>
                <div className="main-bar__time">{momentTime}</div>
           </div>
           <div className="right-bar"> 
                <button className="nav-button">1</button>
                <button className="nav-button">2</button>
                <button className="nav-button">3</button>
           </div>

        </Card>        
    );
};

export default MainBar;