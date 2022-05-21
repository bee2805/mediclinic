import React from "react";

function Register() {
    return (
        <div className="register">
            <div className="registerForm">
                <div className="registerLogo"></div>
                <h1>Register Now!</h1>
                <input type="text" id="nameInput" placeholder="Name"/>
                <input type="text" id="surnameInput" placeholder="Surname"/>
                <input type="number" id="ageInput" placeholder="age"/>
                <input type="text" id="genderInput" placeholder="Gender"/>
                <input type="number" id="cellInput" placeholder="Celllphone Number"/>
                <input type="text" id="emailInput" placeholder="Email Address"/>
                <input type="text" id="password" placeholder="Password"/>
                <input type="text" id="confirmPassword" placeholder="Confirm Password"/>
                <a href="/Dashboard.js"><div className='button'>Sign Up!</div></a>
                <a href="/"><p>Already have an account? Login!</p></a>
            </div>
            <div className="registerImg"></div>
        </div>
    );
}

export default Register;