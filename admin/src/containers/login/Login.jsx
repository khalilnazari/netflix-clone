import React, { useContext, useState } from 'react';
import './login.scss'; 
import {AuthContext} from '../../context/authContext/AuthContext'
import { login } from '../../context/authContext/apiCalls';
const Login = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const {isFetching, dispatch} = useContext(AuthContext); 

    const handLogin = (e) => {
        e.preventDefault();
       login({email, password}, dispatch)
    }

    return (
        <div className='login'>
            <div className='form-wrapper'>
                <h2 className='title'>Login netflix admin</h2>
                <form className='login-form'>
                    <input type="email" name='email' placeholder='email' onChange={e=>setEmail(e.target.value)}/>
                    <input type="password" name='password' placeholder='password' onChange={e=>setPassword(e.target.value)} autoComplete="true"/>
                    <button type='submit' className='submitBtn' onClick={handLogin} disabled={isFetching}>{isFetching ? 'Loging in ...' : 'Submit'}</button>
                </form>
            </div>
        </div>
    );
};

export default Login;