import React from "react";
import './ArticleList.css';
import Card from "../UI/Card";
import EachArticle from "./EachArticle";

const ArticleList = (props) =>{
    let articleData=[]
    
    const getArticleClickedDataHandler = (prev)=>{
        props.onArticleClicked(prev);
    }
    
    if (props.item!==undefined)
    {
        articleData=[...props.item]
    }
    return(
        <Card className='chartBody'>
            {
                articleData.map((element,index)=>{
                    return (
                        <EachArticle key={index}
                        onEachArticleClicked={getArticleClickedDataHandler}
                        articleProblemNumber={element.articleProblemNumber}
                        articleProblemLevel={element.articleProblemLevel}
                        articleProblemLanguage={element.articleProblemLanguage}
                        articleProblemTrial={element.articleProblemTrial}
                        articleTime={element.articleTime}
                        index={index}
                        />
                    )
                })
            }
        </Card>
    );
};
export default ArticleList;