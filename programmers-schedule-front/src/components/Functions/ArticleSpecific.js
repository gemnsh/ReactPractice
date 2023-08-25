import React from "react";
import Card from "../UI/Card";

import "./ArticleSpecific.css";

const ArticleSpecific =(props) =>{
    console.log(props)
    return(
        <Card className='article_specific'>
            <div>
                            <div>
                            {props.specificData.id}
                            </div>
                            <div>
                            {props.specificData.articleTime}
                            </div>
                            <div>
                            {props.specificData.articleProblemLanguage}
                            </div>
                            <div>
                            {props.specificData.articleProblemLevel}
                            </div>
                            <div>
                            {props.specificData.articleProblemNumber}
                            </div>
                            <div>
                            {props.specificData.articleProblemTrial}
                            </div>
                            <div>
                            {props.specificData.articleSolvingTime}
                            </div>
                            <div>
                            {props.specificData.articleNote}
                            </div>
            </div>
        </Card>
    )
    
};

export default ArticleSpecific;