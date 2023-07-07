import React,{useState,useEffect} from "react";
import './NewData.css';
import Card from "../UI/Card";

const NewData =(props) =>{
    const[a,setA]=useState(`00:00:00`);

    const formatTime = (tmp) => {
        const getSeconds = `0${(tmp % 60)}`.slice(-2);
        const minutes = `${Math.floor(tmp / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(tmp / 3600)}`;
        return(`${getHours}:${getMinutes}:${getSeconds}`);
    }

    useEffect(() =>{
        !props.buttonStateDatas&&setA(formatTime(props.stopTime))
    },[props.stopTime,props.buttonStateDatas])

    return(
        <Card className='new-data'>
            <form>
                <div className='new-data__control'>
                    <label>
                        문제번호
                    </label>
                    <input />
                </div>
                <div className='new-data__control'>
                    <label>
                        레벨
                    </label>
                    <input />
                </div>
                <div className='new-data__control'>
                    <label>
                        언어
                    </label>
                    <input />
                </div>
                <div className='new-data__control'>
                    <label>
                        시도횟수
                    </label>
                    <input />
                </div>
                <div className='new-data__control'>
                    <label>
                        시간
                    </label>
                    <div className='new-data__time'>
                        {a}
                    </div>
                    <button type='submit' disabled={!props.buttonStateDatas}>입력</button>
                </div>

                <div className='new-data__control2'>

                    <input />
                </div>
            </form>
        </Card>
    );
};

export default NewData;