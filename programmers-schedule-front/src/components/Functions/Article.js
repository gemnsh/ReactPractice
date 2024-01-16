import React,{useState} from "react";

import Card from "../UI/Card";
import ArticleList from "./ArticleList";
import HexaButton from "./HexaButton";
import ArticleSpecific from "./ArticleSpecific";

import './Article.css';

const Article = (props) =>{

    const getArticleClickedHandler=(prev)=>{
        props.onArticleClick(prev);
    }


    const getHexaButtonStateHandler=(index)=>{
        props.onHexaButtonState(index)
    };
if(props.hexButtonState){
    return(
        <Card className='article' bgColor={props.sendThemeArray.color_11}>
            <div className='buttonContainer'>
                    <div id="hexButton0">
                    <HexaButton color={props.sendThemeArray.color_05} stroke={props.hexButtonState[10]?'#FFFFFF':props.sendThemeArray.color_01} gradientName='hex_button_0' name='ALL' fontColor={props.hexButtonState[10]?'#FFFFFF':props.sendThemeArray.color_01} fontSize='26' onEachHexaButtonState={getHexaButtonStateHandler} num={10}/>
                    </div>
                    <div id="hexButton1">
                    <HexaButton color={props.sendThemeArray.color_03} stroke={props.hexButtonState[0]?'#FFFFFF':props.sendThemeArray.color_01} gradientName='hex_button_1' name='Python' fontColor={props.hexButtonState[0]?'#FFFFFF':props.sendThemeArray.color_01} fontSize='20' onEachHexaButtonState={getHexaButtonStateHandler} num={0}/>
                    </div>
                    <div id="hexButton2" >
                    <HexaButton color={props.sendThemeArray.color_03} stroke={props.hexButtonState[1]?'#FFFFFF':props.sendThemeArray.color_01} gradientName='hex_button_2' name='C++' fontColor={props.hexButtonState[1]?'#FFFFFF':props.sendThemeArray.color_01} fontSize='26' onEachHexaButtonState={getHexaButtonStateHandler} num={1}/>
                    </div>
                    <div id="hexButton3">
                    <HexaButton color={props.sendThemeArray.color_03} stroke={props.hexButtonState[2]?'#FFFFFF':props.sendThemeArray.color_01} gradientName='hex_button_3' name='C' fontColor={props.hexButtonState[2]?'#FFFFFF':props.sendThemeArray.color_01} fontSize='26' onEachHexaButtonState={getHexaButtonStateHandler} num={2}/>
                    </div>
                    <div id="hexButton4" >
                    <HexaButton color={props.sendThemeArray.color_03} stroke={props.hexButtonState[3]?'#FFFFFF':props.sendThemeArray.color_01} gradientName='hex_button_4' name='Java' fontColor={props.hexButtonState[3]?'#FFFFFF':props.sendThemeArray.color_01} fontSize='26' onEachHexaButtonState={getHexaButtonStateHandler} num={3}/>
                    </div>
                    <div id="hexButton5" >
                    <HexaButton color={props.sendThemeArray.color_06} stroke={props.hexButtonState[4]?'#FFFFFF':props.sendThemeArray.color_01} gradientName='hex_button_5' name='1' fontColor={props.hexButtonState[4]?'#FFFFFF':props.sendThemeArray.color_01} fontSize='46' onEachHexaButtonState={getHexaButtonStateHandler} num={4}/>
                    </div>
                    <div id="hexButton6">
                    <HexaButton color={props.sendThemeArray.color_06} stroke={props.hexButtonState[5]?'#FFFFFF':props.sendThemeArray.color_01} gradientName='hex_button_6' name='2' fontColor={props.hexButtonState[5]?'#FFFFFF':props.sendThemeArray.color_01} fontSize='46' onEachHexaButtonState={getHexaButtonStateHandler} num={5}/>
                    </div>
                    <div id="hexButton7">
                    <HexaButton color={props.sendThemeArray.color_06} stroke={props.hexButtonState[6]?'#FFFFFF':props.sendThemeArray.color_01} gradientName='hex_button_7' name='3' fontColor={props.hexButtonState[6]?'#FFFFFF':props.sendThemeArray.color_01} fontSize='46' onEachHexaButtonState={getHexaButtonStateHandler} num={6}/>
                    </div>
                    <div id="hexButton8">
                    <HexaButton color={props.sendThemeArray.color_06} stroke={props.hexButtonState[7]?'#FFFFFF':props.sendThemeArray.color_01} gradientName='hex_button_8' name='4' fontColor={props.hexButtonState[7]?'#FFFFFF':props.sendThemeArray.color_01} fontSize='46' onEachHexaButtonState={getHexaButtonStateHandler} num={7}/>
                    </div>
                    <div id="hexButton9">
                    <HexaButton color={props.sendThemeArray.color_06} stroke={props.hexButtonState[8]?'#FFFFFF':props.sendThemeArray.color_01} gradientName='hex_button_9' name='5' fontColor={props.hexButtonState[8]?'#FFFFFF':props.sendThemeArray.color_01} fontSize='46' onEachHexaButtonState={getHexaButtonStateHandler} num={8}/>
                    </div>
                    <div id="hexButton10">
                    <HexaButton color={props.sendThemeArray.color_06} stroke={props.hexButtonState[9]?'#FFFFFF':props.sendThemeArray.color_01} gradientName='hex_button_10' name='백준' fontColor={props.hexButtonState[9]?'#FFFFFF':props.sendThemeArray.color_01} fontSize='30' onEachHexaButtonState={getHexaButtonStateHandler} num={9}/>
                    </div>
            </div>
            <Card className='chartTitle' bgColor={props.sendThemeArray.color_08}>
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
                    <path d="M4.205 8.72805L12.205 3.72805C13.2041 3.10363 14.5 3.82189 14.5 5.00004V15C14.5 16.1782 13.2041 16.8965 12.205 16.272L4.205 11.272C3.265 10.6845 3.265 9.31555 4.205 8.72805Z" fill='#ffffff'/>
                </svg>
                <div style={{color:'#ffffff'}}>
                    {props.nowPage}
                </div>
                <svg width="35px" height="35px" onClick={props.onNextPageHandler} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.795 11.272L7.795 16.272C6.79593 16.8964 5.5 16.1782 5.5 15L5.5 5.00002C5.5 3.82186 6.79593 3.1036 7.795 3.72802L15.795 8.72802C16.735 9.31552 16.735 10.6845 15.795 11.272Z" fill='#ffffff'/>
                </svg>
            </div>
            <ArticleList item={props.item.results} onArticleClicked={getArticleClickedHandler} sendThemeArray={props.sendThemeArray}/>
            <ArticleSpecific  specificData={props?props.specificData:0} articleClickChecker={props.articleClickState} sendThemeArray={props.sendThemeArray}/>
            
        </Card>

        
    );
}

};

export default Article;