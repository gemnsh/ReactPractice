import React from "react";
import Card from "../UI/Card";
import Dice from "./Dice";

import "./ArticleSpecific.css";

const ArticleSpecific =(props) =>{
    
    const tmpHour=parseInt(props.specificData.articleSolvingTime/3600)
    const tmpMinute=parseInt((props.specificData.articleSolvingTime-tmpHour*3600)/60)
    const tmpSeconds=props.specificData.articleSolvingTime%60

    const articleDate=new Date(props.specificData.articleTime);
    const dateParsed=[articleDate.getFullYear(),String(articleDate.getMonth()+1).padStart(2, "0"),String(articleDate.getDate()).padStart(2, "0"),String(articleDate.getHours()).padStart(2, "0"),String(articleDate.getMinutes()).padStart(2, "0"),String(articleDate.getSeconds()).padStart(2, "0")]
    if(props.specificData.id){
        return(
            <Card className='article_specific'>
                <div>
                                <div className="publishedDate">
                                {dateParsed[0]}.{dateParsed[1]}.{dateParsed[2]} &nbsp; {dateParsed[3]}:{dateParsed[4]}:{dateParsed[5]}
                                </div>
                                <div className="card_language">
                                {props.specificData.articleProblemLanguage}
                                </div>
                                <Dice index={props.specificData.articleProblemLevel}/>
                                <div className="card_problem">
                                {props.specificData.articleProblemNumber}
                                </div>
                                <Card className="card_specific">
                                    <div className="specific_text">
                                    <div>문제해결까지,</div>
                                    <div><span className="span">{props.specificData.articleProblemTrial}</span> 회 시도,</div>
                                    <div><span className="span">{tmpHour}시간 {tmpMinute}분 {tmpSeconds}초</span> 걸렸습니다</div>
                                    </div>
                                </Card>
                                <Card className="card_specific_note">
                                <div className='card_note_title'>
                                비고
                                </div>
                                <hr className="hr1"></hr>
                                <div className='card_note_body'>
                                {props.specificData.articleNote}
                                </div>
                                </Card>
                </div>
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