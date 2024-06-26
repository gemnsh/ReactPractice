import React,{useState,useRef,useEffect} from "react";
import { BrowserView, MobileView } from 'react-device-detect';

import Card from "../UI/Card";
import LoginInput from "../Input/LoginInput";
import './Login.css';

const Login=(props)=>{
    return(
<div>
    <BrowserView>
        <div className='dimmer'>
            <Card className='login'>
                <div className='line_1'/>
                <div className='line_2'/>
                <div className='login_blank'/>
                <h1>Getting Started with</h1>
                <LoginInput setLoginModalTrue={props.setLoginModalData}/>
            </Card>
        </div>
    </BrowserView>
    <MobileView>
        <Card className='login_mobile'>
            <div className='line_1'/>
            <div className='line_2'/>
            <div className='login_blank'/>
            <h1>Getting Started with</h1>
            <LoginInput setLoginModalTrue={props.setLoginModalData}/>
        </Card>
    </MobileView>
</div>
    )
}

export default Login;