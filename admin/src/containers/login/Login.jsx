import React from 'react';
import './login.scss'; 

const Login = () => {
    return (
        <div className='login'>
            <div className='form-wrapper'>
                <h2 className='title'>Login netflix admin</h2>
                <form className='login-form'>
                    <input type="email" name='email' placeholder='email'/>
                    <input type="password" name='password' placeholder='password'/>
                    <button type='submit' className='submitBtn'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;