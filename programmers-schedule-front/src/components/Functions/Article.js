import React from "react";
import './Article.css';
import Card from "../UI/Card";

const Article = (props) =>{
    console.log(props.item)
    return(
        <Card className='article' >
            <Card className='chartTitle'>

            </Card>
            <Card className='chartBody'>

            </Card>
        </Card>
    );
};

export default Article;