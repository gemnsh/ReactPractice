import React from'react';

const ToggleSVG = (props) => {
    
    const a=()=>{
        props.onIcon1Clicked()
    }
    const b=()=>{
        props.onIcon2Clicked()
    }
    const icon1ClickHandler = (e)=>{
        b()
    };

    const icon2ClickHandler = (e)=>{
        a()
    };

    if(props.sendThemeArray){
        if(props.state){
            return(
                <div>
                    <props.icon1 onClick={icon1ClickHandler} fill={props.sendThemeArray.color_02}/>
                </div>
            )
        }
        else{
            return(
                <div>
                    <props.icon2 onClick={icon2ClickHandler} fill={props.sendThemeArray.color_02}/>
                </div>
            )
        }
    }

}


export default ToggleSVG;