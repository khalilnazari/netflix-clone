import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Navigate} from 'react-router-dom';
import { checkLogin } from '../../auth/authServices';
import { loginAPI } from '../../redux/api/api';
import { loginAction } from '../../redux/reducers/authSlice';
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
            dispatch(loginAction(res.data)); 
            
            // set local storage
            localStorage.setItem("nf-auth", JSON.stringify(res.data));
            
            // console.log("token 999: ",token)
            // setLoginStatus(true);
            // console.log(res.data)
            console.log(res.data)
            return res; 

        } catch (error) {
            // console.log(error);
            // dispatch(getLogin(error.response));
            // setLoginStatus(false);
            return error.response; 
        }
    }

    useEffect(() => {
        // console.log(localStorage.getItem("userToken"))
        // const res = userLogin();
        // console.log(res)
        
    }, [])

    const handLogin = (e) => {
        e.preventDefault();
        // localStorage.clear();
        userLogin({email, password}); 
    }

    const check = () => {
        checkLogin(); 
    }

    // const userToken = localStorage.getItem("userToken")
    // if(userToken) {
    //     return (<Navigate to="/" replace={true} />)
    // }

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
                <button onClick={check}>Checklogin</button>
            </div>
        </div>
    );
};

export default Login;