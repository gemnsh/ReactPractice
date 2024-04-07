import React,{useState} from "react";
import axios from "axios";

import './LoginInput.css'

const LoginInput=(props)=>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const loginHandler= e =>{
        e.preventDefault();
        axios.post("https://schedule-nu-roan.vercel.app"+'/user/login/',{
            email:username,
            password:password
        }).then((response) => {
            props.setLoginModalTrue(false)
        }) 
        .catch((Error) => {
            setMessage(Error.response.data.message)
            })
    }



return(
        <form onSubmit={loginHandler}>
            <div className='id_login'>
                <input
                        placeholder='USERNAME'
                        type='email'
                        required
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        />
                </div>
            <div className='pw_login'>
                <input 
                        placeholder='PASSWORD'
                        type='password'
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}/>
            </div>
            <input type='submit' className='login_button' value='SIGN IN'/>
            <div className="message_alert">
                {message}
            </div>
        </form>
)
};

export default LoginInput;