import React from'react';

const ToggleSVG = (props) => {
    
    const a=()=>{
        props.onIcon1Clicked()
    }
    const b=()=>{
        props.onIcon2Clicked()
    }
    const icon1ClickHandler = (e)=>{
        console.log('1');
        b()
    };

    const icon2ClickHandler = (e)=>{
        console.log('2');
        a()
    };

    if(props.state){
        return(
            <div>
                <props.icon1 onClick={icon1ClickHandler}/>
            </div>
        )
    }
    else{
        return(
            <div>
                <props.icon2 onClick={icon2ClickHandler}/>
            </div>
        )
    }

}


export default ToggleSVG;