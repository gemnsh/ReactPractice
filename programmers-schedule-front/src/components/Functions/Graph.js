import React from "react";
import './Graph.css';
import Card from "../UI/Card";
import CalendarG from "./CalendarG";

const Graph =(props) =>{
  
    return(
        <Card className='graph' bgColor={props.sendThemeArray.color_09}>
            <div className="graphTitle" style={{color : props.sendThemeArray.color_02}}>
                Today's Record
            </div>
            <img id="nousagi_4" draggable={false} src={process.env.PUBLIC_URL+props.sendThemeArray.image_01}/>
            <CalendarG data={props.graphDatas} sendThemeArray={props.sendThemeArray}>

            </CalendarG>
        </Card>
    );
};

export default Graph;