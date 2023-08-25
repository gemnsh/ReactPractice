import React from "react";
import Card from "../UI/Card";
import Dice from "./Dice";

import "./ArticleSpecific.css";

const ArticleSpecific =(props) =>{
    console.log(props)
    return(
        <Card className='article_specific'>
            <div>
                            <div className="publishedDate">
                            {props.specificData.articleTime}
                            </div>
                            <div className="card_language">
                            {props.specificData.articleProblemLanguage}
                            </div>
                            <Dice index={props.specificData.articleProblemLevel}/>
                            <div className="card_problem">
                            {props.specificData.articleProblemNumber}
                            </div>
                            <Card className="card_specific">
                            <div>
                            {props.specificData.articleProblemTrial}회 시도
                            </div>
                            <div>
                            {props.specificData.articleSolvingTime}초 걸렸습니다
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
    
};

export default ArticleSpecific;