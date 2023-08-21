import React from "react";
import './Article.css';
import Card from "../UI/Card";
import ArticleList from "./ArticleList";

const Article = (props) =>{
    return(
        <Card className='article' >
            <Card className='chartTitle'>
            </Card>
            <div className='chartControl'>
            <button className="chartButton"> prev </button>
            <div>
                1
            </div>
            <button className="chartButton"> next </button>
            </div>
            <ArticleList item={props.item.results}/>
            <div className='buttonContainer'>
            <div>
                <div className="hexButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="98" viewBox="0 0 88 98" fill="none">
                    <path d="M49 1.88675C45.906 0.100423 42.094 0.100423 39 1.88675L5.69873 21.1132C2.60472 22.8996 0.69873 26.2008 0.69873 29.7735V68.2265C0.69873 71.7992 2.60472 75.1004 5.69873 76.8868L39 96.1132C42.094 97.8996 45.906 97.8996 49 96.1132L82.3013 76.8868C85.3953 75.1004 87.3013 71.7992 87.3013 68.2265V29.7735C87.3013 26.2008 85.3953 22.8996 82.3013 21.1132L49 1.88675Z" fill="#112233"/>
                </svg>
            </div>
            
            </div>
            </div>
            <Card className='chartSpecific'>

            </Card>
            
        </Card>

        
    );
};

export default Article;