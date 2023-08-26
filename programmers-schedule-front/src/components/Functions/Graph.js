import React from "react";
import './Graph.css';
import Card from "../UI/Card";
import CalendarG from "./CalendarG";

const Graph =(props) =>{
  
    return(
        <Card className='graph'>
            <div className="graphTitle">
                Today's Record
            </div>
            <img id="nousagi_4" draggable={false} src={process.env.PUBLIC_URL+"/image/nousagi_01.png"}/>
            <CalendarG data={props.graphDatas}>

            </CalendarG>
        </Card>
    );
};

export default Graph;