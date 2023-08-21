import React from "react";
import moment from "moment/moment";

import './ArticleList.css';
import Card from "../UI/Card";

const ArticleList = (props) =>{
    let articleData=[]
    if (props.item!=undefined)
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
                            <p>
                            {element.id}
                            </p>
                            <p>
                            {element.articleProblemNumber}
                            </p>
                            <p>
                            {element.articleProblemLevel}
                            </p>
                            <p>
                            {element.articleProblemLanguage}
                            </p>
                            <p>
                            {moment(element.articleTime).format('YYYY-MM-DD')}
                            </p>
                        </div>

                    )
                })
            }
        </Card>
    );
};
export default ArticleList;