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
        
    },[props])

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
                                <img id="kanata_1" draggable={false} src={process.env.PUBLIC_URL+"/image/kanata_01.png"}/>
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