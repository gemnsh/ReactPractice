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
                <svg width="35px" height="35px" onClick={props.onPrevPageHandler} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.205 8.72805L12.205 3.72805C13.2041 3.10363 14.5 3.82189 14.5 5.00004V15C14.5 16.1782 13.2041 16.8965 12.205 16.272L4.205 11.272C3.265 10.6845 3.265 9.31555 4.205 8.72805Z" fill="#436EEA"/>
                </svg>
                <div>
                    {props.nowPage}
                </div>
                <svg width="35px" height="35px" onClick={props.onNextPageHandler} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.795 11.272L7.795 16.272C6.79593 16.8964 5.5 16.1782 5.5 15L5.5 5.00002C5.5 3.82186 6.79593 3.1036 7.795 3.72802L15.795 8.72802C16.735 9.31552 16.735 10.6845 15.795 11.272Z" fill="#436EEA"/>
                </svg>
            </div>
            <ArticleList item={props.item.results} onArticleClicked={getArticleClickedHandler}/>
            <ArticleSpecific  specificData={props?props.specificData:0} articleClickChecker={props.articleClickState}/>
            
        </Card>

        
    );
};

export default Article;