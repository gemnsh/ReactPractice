import React from "react";
import moment from "moment/moment";

import "./EachArticle.css";

const EachArticle =(props) =>{

    const eachArticleHandler=()=>{
        if(props.index!==undefined){
            props.onEachArticleClicked(props.index);
        }
    }


return(
    <div id={props.index%2===0?'eachArticle_1':'eachArticle_2'} onClick={eachArticleHandler} style={props.index%2===0?{}:{backgroundColor:props.sendThemeArray.color_08}}>
        <div className="articleProblemNumber">
        {props.articleProblemNumber}
        </div>
        <div className="articleProblemLevel">
        {props.articleProblemLevel}
        </div>
        <div className="articleProblemLanguage">
        {props.articleProblemLanguage}
        </div>
        <div className="articleProblemTrial">
        {props.articleProblemTrial}
        </div>
        <div className="articleTime">
        {moment(props.articleTime).format('YYYY-MM-DD')}
        </div>
    </div>
);
};

export default EachArticle;