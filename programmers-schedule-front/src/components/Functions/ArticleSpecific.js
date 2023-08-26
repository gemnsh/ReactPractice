import React,{useEffect,useState} from "react";
import Card from "../UI/Card";
import Dice from "./Dice";

import "./ArticleSpecific.css";

const ArticleSpecific =(props) =>{
    
    const [backButtonState,setBackButtonState]=useState(false);
    const[specificData,setSpecificArticleData]=useState([]);

    useEffect(()=>{
        if(props.specificData)
        {
        setSpecificArticleData(props.specificData)}
        
    },[props.articleClickChecker])

    useEffect(()=>{
        if (backButtonState){
            setSpecificArticleData([])
            setBackButtonState(false)
        }
    },[backButtonState])

    const backButtonStateHandler=()=>{
        setBackButtonState(true);
    };
    
    const tmpHour=parseInt(specificData.articleSolvingTime/3600)
    const tmpMinute=parseInt((specificData.articleSolvingTime-tmpHour*3600)/60)
    const tmpSeconds=specificData.articleSolvingTime%60

    const articleDate=new Date(specificData.articleTime);
    const dateParsed=[articleDate.getFullYear(),String(articleDate.getMonth()+1).padStart(2, "0"),String(articleDate.getDate()).padStart(2, "0"),String(articleDate.getHours()).padStart(2, "0"),String(articleDate.getMinutes()).padStart(2, "0"),String(articleDate.getSeconds()).padStart(2, "0")]
    
    if(specificData.id){
        return(
            <Card className='article_specific'>
                <div className='back_button' onClick={backButtonStateHandler}>
                    <svg className='arrow' width="30px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Arrow / Arrow_Undo_Up_Left">
                        <path id="Vector" d="M7 13L3 9M3 9L7 5M3 9H16C18.7614 9 21 11.2386 21 14C21 16.7614 18.7614 19 16 19H11" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                    </svg>
                </div>
                                <div className="publishedDate">
                                {dateParsed[0]}.{dateParsed[1]}.{dateParsed[2]} &nbsp; {dateParsed[3]}:{dateParsed[4]}:{dateParsed[5]}
                                </div>
                                <div className="card_language">
                                {specificData.articleProblemLanguage}
                                </div>
                                <Dice index={specificData.articleProblemLevel}/>
                                <div className="card_problem">
                                {specificData.articleProblemNumber}
                                </div>
                                <Card className="card_specific">
                                    <div className="specific_text">
                                    <div>문제해결까지</div>
                                    <div><span className="span">{specificData.articleProblemTrial}</span> 회 시도,</div>
                                    <div><span className="span">{tmpHour}시간 {tmpMinute}분 {tmpSeconds}초</span> 걸렸습니다</div>
                                    </div>
                                </Card>
                                <Card className="card_specific_note">
                                <div className='card_note_title'>
                                비고
                                </div>
                                <hr className="hr1"></hr>
                                <div className='card_note_body'>
                                {specificData.articleNote}
                                </div>
                                <img id="pekora_2" draggable={false} src={process.env.PUBLIC_URL+"/image/pekora_02.png"}/>
                                </Card>
                                
            </Card>
        )
    }
    else{
        return(
            <Card className='article_specific'>
            </Card>
        )
    }
    
};

export default ArticleSpecific;