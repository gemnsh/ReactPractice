import React from "react";
import './Article.css';
import Card from "../UI/Card";
import ArticleList from "./ArticleList";

const Article = (props) =>{
    console.log(props.item)
    return(
        <Card className='article' >
            <Card className='chartTitle'>

            </Card>
            <ArticleList item={props.item}/>
            <Card className='chartSpecific'>

            </Card>
        </Card>
    );
};

export default Article;