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
                    <div className="hexButton0">
                    <HexaButton color={['#940404','#FF8888']} stroke='#FFFFFF' gradientName='hex_button_0'/>
                    </div>
                    <div className="hexButton1">
                    <HexaButton color={['#FDFFB4','#E0814B']} stroke='#FFFFFF' gradientName='hex_button_1'/>
                    </div>
                    <div className="hexButton2" >
                    <HexaButton color={['#FDFFB4','#E0814B']} stroke='#FFFFFF' gradientName='hex_button_2'/>
                    </div>
                    <div className="hexButton3">
                    <HexaButton color={['#FDFFB4','#E0814B']} stroke='#FFFFFF' gradientName='hex_button_3'/>
                    </div>
                    <div className="hexButton4" >
                    <HexaButton color={['#FDFFB4','#E0814B']} stroke='#FFFFFF' gradientName='hex_button_4'/>
                    </div>
                    <div className="hexButton5" >
                    <HexaButton color={['#C3B4FF','#4BBCE0']} stroke='#FFFFFF' gradientName='hex_button_5'/>
                    </div>
                    <div className="hexButton6">
                    <HexaButton color={['#C3B4FF','#4BBCE0']} stroke='#FFFFFF' gradientName='hex_button_6'/>
                    </div>
                    <div className="hexButton7">
                    <HexaButton color={['#C3B4FF','#4BBCE0']} stroke='#FFFFFF' gradientName='hex_button_7'/>
                    </div>
                    <div className="hexButton8">
                    <HexaButton color={['#C3B4FF','#4BBCE0']} stroke='#FFFFFF' gradientName='hex_button_8'/>
                    </div>
                    <div className="hexButton9">
                    <HexaButton color={['#C3B4FF','#4BBCE0']} stroke='#FFFFFF' gradientName='hex_button_9'/>
                    </div>
                    
            </div>
            <Card className='chartSpecific'>

            </Card>
            
        </Card>

        
    );
};

export default Article;