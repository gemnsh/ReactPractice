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
            <Card className='chartSpecific'>

            </Card>
        </Card>
    );
};

export default Article;