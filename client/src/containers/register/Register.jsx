import { useRef, useState } from 'react';
import './register.scss'

const Register = () => {
    const [email, setEmail] = useState(); 
    const [password, setPassword] = useState(); 
    const emailRef = useRef(); 
    const passwordRef = useRef(); 

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }
    const handleFinish = () => {
        setEmail(passwordRef.current.value)
    }


    const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"; 
    // jsx
    return (
        <div className="register">
            <div className='top'>
                <div className="wrapper">
                    <img src={logo} alt="logo" className='logo' />
                    <button className='loginButton'>Sign In</button>
                </div>
            </div>

            <div className="container">
                <h1>Unlimited movies, Tv shows, and more.</h1>
                <h2>Watch anywhere, Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your memebership.</p>

                {!email ? (
                    <div className="input">
                        <input type="email" name="" id="" placeholder='Email address' ref={emailRef}/>
                        <button className='registerButton' onClick={handleStart} >Get Started</button>
                    </div>
                ) : (
                    <form action="" className='input'>
                       <input type="password" name="" id="" placeholder='Password' ref={passwordRef} autoComplete="new-password"/>
                        <button className='registerButton' onClick={handleFinish} >Start</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Register;