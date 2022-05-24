import React from "react";

function Register() {
    return (
        <div className="register">
            <div className="registerForm">
                <div className="registerLogo"></div>
                <h1>Register Now!</h1>
                <input type="text" id="nameInputRegister" placeholder="Name"/>
                <input type="text" id="surnameInputRegister" placeholder="Surname"/>
                <input type="number" id="ageInputRegister" placeholder="age"/>
                <input type="text" id="genderInputRegister" placeholder="Gender"/>
                <input type="number" id="cellInputRegister" placeholder="Celllphone Number"/>
                <input type="text" id="emailInputRegister" placeholder="Email Address"/>
                <input type="text" id="passwordRegister" placeholder="Password"/>
                <input type="text" id="confirmPasswordRegister" placeholder="Confirm Password"/>
                <a href="/Dashboard.js"><div className='button'>Sign Up!</div></a>
                <a href="/"><p>Already have an account? Login!</p></a>
            </div>
            <div className="registerImg"></div>
        </div>
    );
}

export default Register;