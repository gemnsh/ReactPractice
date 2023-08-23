import React,{useState,useEffect} from "react";
import './NewData.css';

import Card from "../UI/Card";
import MultiButton from "./MultiButton";

const NewData =(props) =>{
    const[a,setA]=useState(`00:00:00`);

    const formatTime = (tmp) => {
        const getSeconds = `0${(tmp % 60)}`.slice(-2);
        const minutes = `${Math.floor(tmp / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(tmp / 3600)}`;
        return(`${getHours}:${getMinutes}:${getSeconds}`);
    }

    const submitHandler =(event)=>{
        console.log(event.target)
        event.preventDefault();
        event.target.reset()
        setA(`00:00:00`);
    };

    useEffect(() =>{
        !props.buttonStateDatas&&setA(formatTime(props.stopTime))
    },[props.stopTime,props.buttonStateDatas])

    return(
        <Card className='new-data'>
            <form onSubmit={submitHandler}>
                <div className='new-data__control'>
                    <label>
                        문제번호
                    </label>
                    <input name="problemNumber"/>
                </div>
                <div className='new-data__control'>
                    <label>
                        레벨
                    </label>
                    <MultiButton buttonArr={['1','2','3','4','5']} widthButton={62}/>
                </div>
                <div className='new-data__control'>
                    <label>
                        언어
                    </label>
                    <MultiButton buttonArr={['C','C++','Python','Java']} widthButton={80}/>
                </div>
                <div className='new-data__control'>
                    <label>
                        시도횟수
                    </label>
                    <input name="trial"/>
                </div>
                <div className='new-data__control'>
                    <label>
                        시간
                    </label>
                    <div className='new-data__time'>
                        {a}
                    </div>
                    <button id='submit_button' type='submit' disabled={!props.buttonStateDatas}>입력</button>
                </div>

                <div className='new-data__control2'>

                    <input name="problemDescription" placeholder="비고"/>
                </div>
            </form>
        </Card>
    );
};

export default NewData;