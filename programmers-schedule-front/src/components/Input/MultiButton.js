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
        console.log(buttonArray[tmpArray.indexOf(true)]);
    };
    return(
        <div className="multi-button">
            {
                buttonArray.map((element,index)=>{
                    return(
                        <button
                        type="button"
                        key={index}
                        onClick={() => multiButtonHandler(index)}
                        className={isButtonSelected[index]?"multi-button__Selected":"multi-button__notSelected"}
                        style={{width: props.widthButton}}
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