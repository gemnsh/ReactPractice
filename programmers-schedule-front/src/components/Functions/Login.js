import React,{useState,useRef,useEffect} from "react";
import Card from "../UI/Card";
import LoginInput from "../Input/LoginInput";
import './Login.css';
import { ReactComponent as Circle } from "../Image/circle.svg";

const Login=(props)=>{
    return(
        <div className='dimmer'>
        <Card className='login'>
            <Circle className='circle_1'/>
            <Circle className='circle_2'/>
            <div className='line_1'/>
            <div className='line_2'/>
            <div className='login_blank'/>
            <h1>Getting Started with</h1>
            <LoginInput setLoginModalTrue={props.setLoginModalData}/>
        </Card>
        </div>
    )
}

export default Login;