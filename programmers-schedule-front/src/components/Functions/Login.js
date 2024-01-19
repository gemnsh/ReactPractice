import React,{useState,useRef,useEffect} from "react";
import Card from "../UI/Card";
import LoginInput from "../Input/LoginInput";
import './Login.css';

const Login=(props)=>{
    return(
        <div className='dimmer'>
        <Card className='login'>
            <div className='login_blank'/>
            <h1>Get Started with</h1>
            <LoginInput setLoginModalTrue={props.setLoginModalData}/>
        </Card>
        </div>
    )
}

export default Login;