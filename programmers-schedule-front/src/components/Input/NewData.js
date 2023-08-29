
import React,{useState,useEffect} from "react";
import axios from "axios";
import Card from "../UI/Card";
import MultiButton from "./MultiButton";
import moment from 'moment';
import './NewData.css';

const levelArray=[1,2,3,4,5];
const langArray=['C','C++','Python','Java'];

const NewData =(props) =>{
    const[a,setA]=useState([`00:00:00`,0]);
    const [responseBody, setResponseBody] = useState({
        problemNumber: 0, trial: 0, problemDescription: "",level:"",language:""
    })
    const[buttonResponse1,setButtonResponse1]=useState(0)
    const[buttonResponse2,setButtonResponse2]=useState(0)

    const formatTime = (tmp) => {
        const getSeconds = `0${(tmp % 60)}`.slice(-2);
        const minutes = `${Math.floor(tmp / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(tmp / 3600)}`;
        return(`${getHours}:${getMinutes}:${getSeconds}`);
    }

    const submitHandler =(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        event.target.reset()
        setA([`00:00:00`,0]);
        const d=new Date()
        axios.post("/api/post/",{
            articleProblemNumber : responseBody.problemNumber,
            articleProblemLevel : responseBody.level,
            articleProblemLanguage : responseBody.language ,
            articleProblemTrial : responseBody.trial,
            articleTime :  d ,
            articleSolvingTime : a[1],
            articleNote : responseBody.problemDescription
        })
        .then((response) => {
            props.onSetPageHandler(0)
        }) 
        .catch((Error) => {
            })

        axios.post('/api/postDate/',{
            startTimeData: moment(d).format('YYYY-MM-DD HH:mm:ss'),
            problemSolvingTime: a[1],
        }).then((response) => {
        }) 
        .catch((Error) => {
            })
    };

    useEffect(() =>{
        if(props.stopTime>0){
            setA([formatTime(props.stopTime),props.stopTime])
        }
    },[props.stopTime,props.buttonStateDatas])

    useEffect(()=>{
        setResponseBody({...responseBody, level: levelArray[buttonResponse1], language: langArray[buttonResponse2]})
    },[buttonResponse1,buttonResponse2])

    return(
        <Card className='new-data'>
            <form onSubmit={submitHandler}>
                <div className='new-data__control'>
                    <label>
                        문제번호
                    </label>
                    <input id ='pNumber' name="problemNumber" onChange ={(e) => setResponseBody({...responseBody, problemNumber: e.target.value})}/>
                </div>
                <div className='new-data__control'>
                    <label>
                        레벨
                    </label>
                    <MultiButton buttonArr={levelArray} onSetButtonResponse={setButtonResponse1}widthButton={62}/>
                </div>
                <div className='new-data__control'>
                    <label>
                        언어
                    </label>
                    <MultiButton buttonArr={langArray} onSetButtonResponse={setButtonResponse2}  widthButton={80}/>
                </div>
                <div className='new-data__control'>
                    <label>
                        시도횟수
                    </label>
                    <input id ='pTrial' name="trial" onChange ={(e) => setResponseBody({...responseBody, trial: e.target.value})}/>
                </div>
                <div className='new-data__control'>
                    <label>
                        시간
                    </label>
                    <div className='new-data__time'>
                        {a[0]}
                    </div>
                    <button id='submit_button' type='submit' disabled={!props.buttonStateDatas} >입력</button>
                </div>

                <div className='new-data__control2'>

                    <input id='pNote' name="problemDescription" placeholder="비고" onChange ={(e) => setResponseBody({...responseBody, problemDescription: e.target.value})}/>
                </div>
            </form>
        </Card>
    );
};

export default NewData;