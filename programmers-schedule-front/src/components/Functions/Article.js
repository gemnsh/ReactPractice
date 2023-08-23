import React,{useState} from "react";
import './Article.css';
import Card from "../UI/Card";
import ArticleList from "./ArticleList";
import HexaButton from "./HexaButton";

const Article = (props) =>{

    let hArray=Array(9).fill(false);
    const[isHexButtonSelected,setIsHexButtonSelected]=useState([...hArray]);

    const hexaButtonStateHandler= (index) =>{
        let tmpHexArray=[...hArray];
        tmpHexArray[index] = !tmpHexArray[index];
        setIsHexButtonSelected(tmpHexArray);
        console.log(index)
    };

    return(
        <Card className='article' >
            <div className='buttonContainer'>
                    <div className="hexButton0">
                    <HexaButton color={['#889ACE','#889ACE']} stroke='#CFDAF4' gradientName='hex_button_0' name='ALL' fontSize='26'/>
                    </div>
                    <div className="hexButton1">
                    <HexaButton color={['#A6CEFA','#A6CEFA']} stroke='#CFDAF4' gradientName='hex_button_1' name='Python' fontSize='20'/>
                    </div>
                    <div className="hexButton2" >
                    <HexaButton color={['#A6CEFA','#A6CEFA']} stroke='#CFDAF4' gradientName='hex_button_2' name='C++' fontSize='26'/>
                    </div>
                    <div className="hexButton3">
                    <HexaButton color={['#A6CEFA','#A6CEFA']} stroke='#CFDAF4' gradientName='hex_button_3' name='C' fontSize='26'/>
                    </div>
                    <div className="hexButton4" >
                    <HexaButton color={['#A6CEFA','#A6CEFA']} stroke='#CFDAF4' gradientName='hex_button_4' name='Java' fontSize='26'/>
                    </div>
                    <div className="hexButton5" >
                    <HexaButton color={['#B3C6F0','#B3C6F0']} stroke='#CFDAF4' gradientName='hex_button_5' name='1' fontSize='46'/>
                    </div>
                    <div className="hexButton6">
                    <HexaButton color={['#B3C6F0','#B3C6F0']} stroke='#C8E2FE' gradientName='hex_button_6' name='2' fontSize='46'/>
                    </div>
                    <div className="hexButton7">
                    <HexaButton color={['#B3C6F0','#B3C6F0']} stroke='#C8E2FE' gradientName='hex_button_7' name='3' fontSize='46'/>
                    </div>
                    <div className="hexButton8">
                    <HexaButton color={['#B3C6F0','#B3C6F0']} stroke='#C8E2FE' gradientName='hex_button_8' name='4' fontSize='46'/>
                    </div>
                    <div className="hexButton9">
                    <HexaButton color={['#B3C6F0','#B3C6F0']} stroke='#C8E2FE' gradientName='hex_button_9' name='5' fontSize='46'/>
                    </div>
                    
            </div>
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