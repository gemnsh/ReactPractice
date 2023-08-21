import React from "react";
import './Article.css';
import Card from "../UI/Card";
import ArticleList from "./ArticleList";

const Article = (props) =>{
    return(
        <Card className='article' >
            <Card className='chartTitle'>

            </Card>
            <ArticleList item={props.item.results}/>
            <Card className='chartSpecific'>

            </Card>
        </Card>
    );
};

export default Article;