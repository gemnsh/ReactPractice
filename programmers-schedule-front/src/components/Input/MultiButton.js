import React,{useState} from "react";

import './MultiButton.css';
const MultiButton =(props) =>{
    
    const buttonArray=[...props.buttonArr];
    let bArray=Array(buttonArray.length).fill(false);
    bArray[0]=true;
    const[isButtonSelected,setIsButtonSelected]=useState([...bArray]);

    const multiButtonHandler =(index) =>{
        let tmpArray= Array(buttonArray.length).fill(false);
        tmpArray[index]=true;
        setIsButtonSelected([...tmpArray]);
        props.onSetButtonResponse(index);
    };
    return(
        <div className="multi-button" style={{width: props.totalWidth, height: props.totalHeight}}>
            {
                buttonArray.map((element,index)=>{
                    return(
                        <button
                        type="button"
                        key={index}
                        onClick={() => multiButtonHandler(index)}
                        className={isButtonSelected[index]?"multi-button__Selected":"multi-button__notSelected"}
                        style={isButtonSelected[index]?{backgroundColor:props.sendThemeArray.color_06,border:props.sendThemeArray.color_03,width: props.widthButton,height: props.heightButton}:{backgroundColor:props.sendThemeArray.color_02,width: props.widthButton,height: props.heightButton}}
                        >
                        {element}
                        </button>
                    )
                })
            }
        </div>
    );
};
export default MultiButton;