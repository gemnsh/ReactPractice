import React from "react";
import { ReactComponent as Dice1 } from "../Image/dice_1.svg";
import { ReactComponent as Dice2 } from "../Image/dice_2.svg";
import { ReactComponent as Dice3 } from "../Image/dice_3.svg";
import { ReactComponent as Dice4 } from "../Image/dice_4.svg";
import { ReactComponent as Dice5 } from "../Image/dice_5.svg";

import "./Dice.css";

const Dice =(props)=>{
    
    switch (props.index) {
        case 1:
            return (
                <Dice1 className="dice" fill={props.sendThemeArray.color_06}/>
            )
            
        case 2:
            return (
                <Dice2 className="dice" fill={props.sendThemeArray.color_06}/>
            )
        case 3:
            return (
                <Dice3 className="dice" fill={props.sendThemeArray.color_06}/>
            )
            
        case 4:
            return (
                <Dice4 className="dice" fill={props.sendThemeArray.color_06}/>
            )  
        case 5:
            return (
                <Dice5 className="dice" fill={props.sendThemeArray.color_06}/>
            )    
            
        default:
        // do nothing
    }


};

export default Dice;