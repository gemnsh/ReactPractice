import React,{useState} from "react";

import './MultiButton.css';
const MultiButton =(props) =>{

    const[isButtonSelected,setIsButtonSelected]=useState(false);

    const buttonArray=[...props.buttonArr];

    const multiButtonHandler =(index) =>{
        console.log(buttonArray);
        const tmpArray= Array(buttonArray.length).fill(false);
        tmpArray[index]=true;
        setIsButtonSelected(tmpArray);
    };
    return(
        <div className="multi-button">
            {
                buttonArray.map((index)=>{
                    return(
                        <button
                        type="button"
                        key={index}
                        onClick={multiButtonHandler}
                        >
                        {buttonArray[index]}
                        </button>
                    )
                })
            }
        </div>
    );
};
export default MultiButton;