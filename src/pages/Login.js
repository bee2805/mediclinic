import React from "react";

function Login() {
    return (
        <div className="login">
            <div className="loginForm">
                <div className="loginLogo"></div>
                <h1>Welcome Back!</h1>
                <input type="text" className="email" placeholder="Email"/>
                <input type="text" className="password" placeholder="Password"/>
                <div className='button'>Login!</div>
                <a href=""><p>Forgot Passowrd.</p></a>
                <a href="/Register.js"><p>Don't have an account? Sign up!</p></a>
            </div>
            <div className="loginImg"></div>
        </div>
    );
}

export default Login;