import React from "react";
import moment from "moment/moment";

import './ArticleList.css';
import Card from "../UI/Card";

const ArticleList = (props) =>{
    let articleData=[]
    if (props.item!==undefined)
    {
        articleData=[...props.item]
    }
    const articleClicked = (a) =>{
        console.log(a)
    };
    
    return(
        <Card className='chartBody'>
            {
                articleData.map((element,index)=>{
                    return (
                        <div key={index} className='eachArticle' onClick={articleClicked}>
                            <div className="articleProblemNumber">
                            {element.articleProblemNumber}
                            </div>
                            <div className="articleProblemLevel">
                            {element.articleProblemLevel}
                            </div>
                            <div className="articleProblemLanguage">
                            {element.articleProblemLanguage}
                            </div>
                            <div className="articleProblemTrial">
                            {element.articleProblemTrial}
                            </div>
                            <div className="articleTime">
                            {moment(element.articleTime).format('YYYY-MM-DD')}
                            </div>
                        </div>
                    )
                })
            }
        </Card>
    );
};
export default ArticleList;