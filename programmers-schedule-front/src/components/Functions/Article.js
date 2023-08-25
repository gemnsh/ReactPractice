import React,{useState} from "react";

import Card from "../UI/Card";
import ArticleList from "./ArticleList";
import HexaButton from "./HexaButton";
import ArticleSpecific from "./ArticleSpecific";

import './Article.css';

const Article = (props) =>{

    let hArray=Array(9).fill(false);
    const[isHexButtonSelected,setIsHexButtonSelected]=useState([...hArray]);

    const hexaButtonStateHandler= (index) =>{
        let tmpHexArray=[...hArray];
        tmpHexArray[index] = !tmpHexArray[index];
        setIsHexButtonSelected(tmpHexArray);
    };

    const getArticleClickedHandler=(prev)=>{
        props.onArticleClick(prev);
    }

    return(
        <Card className='article' >
            <div className='buttonContainer'>
                    <div id="hexButton0">
                    <HexaButton color={'#889ACE'} stroke='#CFDAF4' gradientName='hex_button_0' name='ALL' fontSize='26'/>
                    </div>
                    <div id="hexButton1">
                    <HexaButton color={'#A6CEFA'} stroke='#CFDAF4' gradientName='hex_button_1' name='Python' fontSize='20'/>
                    </div>
                    <div id="hexButton2" >
                    <HexaButton color={'#A6CEFA'} stroke='#CFDAF4' gradientName='hex_button_2' name='C++' fontSize='26'/>
                    </div>
                    <div id="hexButton3">
                    <HexaButton color={'#A6CEFA'} stroke='#CFDAF4' gradientName='hex_button_3' name='C' fontSize='26'/>
                    </div>
                    <div id="hexButton4" >
                    <HexaButton color={'#A6CEFA'} stroke='#CFDAF4' gradientName='hex_button_4' name='Java' fontSize='26'/>
                    </div>
                    <div id="hexButton5" >
                    <HexaButton color={'#B3C6F0'} stroke='#CFDAF4' gradientName='hex_button_5' name='1' fontSize='46'/>
                    </div>
                    <div id="hexButton6">
                    <HexaButton color={'#B3C6F0'} stroke='#C8E2FE' gradientName='hex_button_6' name='2' fontSize='46'/>
                    </div>
                    <div id="hexButton7">
                    <HexaButton color={'#B3C6F0'} stroke='#C8E2FE' gradientName='hex_button_7' name='3' fontSize='46'/>
                    </div>
                    <div id="hexButton8">
                    <HexaButton color={'#B3C6F0'} stroke='#C8E2FE' gradientName='hex_button_8' name='4' fontSize='46'/>
                    </div>
                    <div id="hexButton9">
                    <HexaButton color={'#B3C6F0'} stroke='#C8E2FE' gradientName='hex_button_9' name='5' fontSize='46'/>
                    </div>
                    <img id="nousagi_3" draggable={false} src={process.env.PUBLIC_URL+"/image/nousagi_02.png"}/>
            </div>
            <Card className='chartTitle'>
                <div className="articleProblemNumber">
                문제번호
                </div>
                <div className="articleProblemLevel">
                레벨
                </div>
                <div className="articleProblemLanguage">
                언어
                </div>
                <div className="articleProblemTrial">
                시도
                </div>
                <div className="articleTime">
                시간
                </div>
            </Card>
            <div className='chartControl'>
                <button className="chartButton" onClick={props.onPrevPageHandler}> prev </button>
                <div>
                    {props.nowPage}
                </div>
                <button className="chartButton" onClick={props.onNextPageHandler}> next </button>
            </div>
            <ArticleList item={props.item.results} onArticleClicked={getArticleClickedHandler}/>
            <ArticleSpecific  specificData={props?props.specificData:0}/>
            
        </Card>

        
    );
};

export default Article;