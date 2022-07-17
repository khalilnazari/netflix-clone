import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Navigate} from 'react-router-dom';
import { loginAPI } from '../../redux/api/api';
import { login } from '../../redux/reducers/loginSlice';
import './login.scss'; 

const Login = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [loginStatus, setLoginStatus] = useState(false); 
    const dispatch = useDispatch(); 

    const userLogin = async (data) => {
        try {
            const res = await loginAPI(data);
            
            // update redux store
            dispatch(login(res.data)); 
            
            // set local storage 
            localStorage.setItem("userToken", res.data.accessToken);
            setLoginStatus(true);

        } catch (error) {
            console.log(error); 
            setLoginStatus(false);
        }
    }

    const handLogin = (e) => {
        e.preventDefault();
        userLogin({email, password}); 
    }

    const userToken = localStorage.getItem("userToken")
    if(userToken) {
        return (<Navigate to="/" replace={true} />)
    }

    return (
        <div className='login'>
            {loginStatus && <Navigate to="/" replace={true} />}
            <div className='form-wrapper'>
                <h2 className='title'>Login netflix admin</h2>
                <form className='login-form'>
                    <input type="email" name='email' placeholder='email' onChange={e=>setEmail(e.target.value)}/>
                    <input type="password" name='password' placeholder='password' onChange={e=>setPassword(e.target.value)} autoComplete="true"/>
                    <button type='submit' className='submitBtn' onClick={handLogin}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Login;