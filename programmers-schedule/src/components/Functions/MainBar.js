import React from "react";
import Card from '../UI/Card';
import './MainBar.css';
const MainBar =() =>{

    return (
        <Card className="main-bar">
           <div className="left-bar">
            <div className="title"> Navigation Bar </div>
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