import React,{useState,useRef,useEffect} from "react";
import Card from "../UI/Card";
import './LoginInput.css'

const LoginInput=()=>{
    //props.setLoginModalTrue
return(
        <div>
            <div className='id_login'>
                <input placeholder='USERNAME'/>
            </div>
            <div className='pw_login'>
                <input placeholder='PASSWORD'/>
            </div>
            <button className='login_button'>
                SIGN IN
            </button>
        </div>
)
};

export default LoginInput;