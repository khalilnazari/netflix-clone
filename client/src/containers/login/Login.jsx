import './login.scss'

const Login = () => {
    const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"; 
    
    // jsx
    return (
        <div className="login">
            <div className='top'>
                <div className="wrapper">
                    <img src={logo} alt="logo" className='logo' />
                </div>
            </div>

            <div className="container">
                <form >
                    <h1>Sign In</h1>
                    <div className='form-control'>
                       <input type="text" name="" id="" placeholder='Enter email or phone number' autoComplete={false}/>
                    </div>
                    <div className='form-control'>
                        <input type="password" name="" id="" placeholder='Password' autoComplete={true}/>
                    </div>

                    <button type="submit" className='loginButton'>Sign In</button>
                    <span>New to Netflix <b>Sign up now</b></span>
                    <small>
                        This page is protected!
                    </small>
                </form>
                
            </div>
        </div>
    )
}

export default Login;