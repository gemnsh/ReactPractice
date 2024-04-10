
import React,{useState,useEffect} from "react";
import axios from "axios";
import { BrowserView, MobileView } from 'react-device-detect';

import Card from "../UI/Card";
import MultiButton from "./MultiButton";
import moment from 'moment';
import './NewData.css';

const levelArray=[1,2,3,4,5,'백준'];
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
        const getHours = `0${Math.floor(tmp / 3600)}`.slice(-2);
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
            startTimeData: moment(props.startTimeData[1]).format('YYYY-MM-DD HH:mm:ss'),
            problemSolvingTime: a[1],
        }).then((response) => {
            props.onSubmitButtonStateHandler(prev => !prev)
        }) 
        .catch((Error) => {
            })
        //console.log(props.startTimeData)
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
        <div>
            <BrowserView>
                <Card className='new-data' bgColor={props.sendThemeArray.color_01}>
                <form onSubmit={submitHandler}>
                    <div className='new-data__control'>
                        <label style={{color:props.sendThemeArray.color_02}}>
                            문제번호
                        </label>
                        <input id ='pNumber' name="problemNumber" style={{border:props.sendThemeArray.color_05}} onChange ={(e) => setResponseBody({...responseBody, problemNumber: e.target.value})}/>
                    </div>
                    <div className='new-data__control'>
                        <label style={{color:props.sendThemeArray.color_02}}>
                            레벨
                        </label>
                        <MultiButton
                        buttonArr={levelArray}
                        onSetButtonResponse={setButtonResponse1}
                        widthButton={50}
                        sendThemeArray={props.sendThemeArray}
                        totalWidth={"350"}
                        totalHeight={"29"}
                        />
                    </div>
                    <div className='new-data__control'>
                        <label style={{color:props.sendThemeArray.color_02}}>
                            언어
                        </label>
                        <MultiButton
                        buttonArr={langArray}
                        onSetButtonResponse={setButtonResponse2}
                        widthButton={80}
                        sendThemeArray={props.sendThemeArray}
                        totalWidth={"350"}
                        totalHeight={"29"}
                        />
                    </div>
                    <div className='new-data__control'>
                        <label style={{color:props.sendThemeArray.color_02}}>
                            시도횟수
                        </label>
                        <input id ='pTrial' name="trial" style={{border:props.sendThemeArray.color_05}} onChange ={(e) => setResponseBody({...responseBody, trial: e.target.value})}/>
                    </div>
                    <div className='new-data__control'>
                        <label style={{color:props.sendThemeArray.color_02}}>
                            시간
                        </label>
                        <div className='new-data__time' style={{color:props.sendThemeArray.color_02}}>
                            {a[0]}
                        </div>
                        <button id='submit_button' type='submit' disabled={!props.buttonStateDatas} style={props.buttonStateDatas?{border:props.sendThemeArray.color_05,backgroundColor:props.sendThemeArray.color_05}:{border:props.sendThemeArray.color_08,backgroundColor:props.sendThemeArray.color_08,color:props.sendThemeArray.color_08}}>입력</button>
                    </div>

                    <div className='new-data__control2'>

                        <textarea 
                        id='pNote' 
                        name="problemDescription" 
                        style={{border:props.sendThemeArray.color_05}} 
                        placeholder="비고"
                        rows={5}
                        onChange ={(e) => setResponseBody({...responseBody, problemDescription: e.target.value})} />
                    </div>
                </form>
                </Card>
            </BrowserView>
            <MobileView>
                <Card className='new-data_mobile' bgColor={props.sendThemeArray.color_01}>
                    <form onSubmit={submitHandler}>
                        <div className='new-data__control_mobile'>
                            <label style={{color:props.sendThemeArray.color_02}}>
                                문제번호
                            </label>
                            <input id ='pNumber' name="problemNumber" style={{border:props.sendThemeArray.color_05}} onChange ={(e) => setResponseBody({...responseBody, problemNumber: e.target.value})}/>
                        </div>
                        <div className='new-data__control_mobile'>
                            <label style={{color:props.sendThemeArray.color_02}}>
                                레벨
                            </label>
                            <MultiButton
                                buttonArr={levelArray}
                                onSetButtonResponse={setButtonResponse1}
                                widthButton={"15%"}
                                totalWidth={"85%"}
                                totalHeight={"3%"}
                                sendThemeArray={props.sendThemeArray}/>
                        </div>
                        <div className='new-data__control_mobile'>
                            <label style={{color:props.sendThemeArray.color_02}}>
                                언어
                            </label>
                            <MultiButton
                                buttonArr={langArray}
                                onSetButtonResponse={setButtonResponse2} 
                                widthButton={"24%"}
                                sendThemeArray={props.sendThemeArray}
                                totalWidth={"85%"}
                                totalHeight={"3%"}/>

                        </div>
                        <div className='new-data__control_mobile'>
                            <label style={{color:props.sendThemeArray.color_02}}>
                                시도횟수
                            </label>
                            <input id ='pTrial' name="trial" style={{border:props.sendThemeArray.color_05}} onChange ={(e) => setResponseBody({...responseBody, trial: e.target.value})}/>
                        </div>
                        <div className='new-data__control_mobile'>
                            <label style={{color:props.sendThemeArray.color_02}}>
                                시간
                            </label>
                            <div className='new-data__time_mobile' style={{color:props.sendThemeArray.color_02}}>
                                {a[0]}
                            </div>
                            <button id='submit_button' type='submit' disabled={!props.buttonStateDatas} style={props.buttonStateDatas?{border:props.sendThemeArray.color_05,backgroundColor:props.sendThemeArray.color_05}:{border:props.sendThemeArray.color_08,backgroundColor:props.sendThemeArray.color_08,color:props.sendThemeArray.color_08}}>입력</button>
                        </div>

                        <div className='new-data__control2_mobile'>

                            <textarea 
                            id='pNote' 
                            name="problemDescription" 
                            style={{border:props.sendThemeArray.color_05}} 
                            placeholder="비고"
                            rows={5}
                            onChange ={(e) => setResponseBody({...responseBody, problemDescription: e.target.value})} />
                        </div>
                    </form>
                </Card>
            </MobileView>
        </div>
    );
};

export default NewData;