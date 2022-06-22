import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import MiniModalRight from "../components/MiniModalRight";
import axios from 'axios';
import Valid from "../assets/icons/Valid.svg";
import invalid from "../assets/icons/invalid.svg";


function Register() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        image: '',
        name: '',
        surname: '',
        age: '',
        gender: '',
        cellNo: '',
        rank: '',
        email: '',
        password: '',
        passwordCon: ''
    });

    const [nameError, setNameError] = useState();
    const [surnameError, setSurnameError] = useState();
    const [ageError, setAgeError] = useState();
    const [genderError, setGenderError] = useState();
    const [contactError, setContactError] = useState();
    const [rankError, setRankError] = useState();
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [passwordConError, setPasswordConError] = useState();

    const [emailAvail, setEmailAvail] = useState();
    const [emailIcon, setEmailIcon] = useState();

    // get Inputs
    // Validation

    const imageVal = (e) => {           
        let file = e.target.files[0];
        let reader = new FileReader();

        reader.onloadend = function() {
            console.log(reader.result);
            let imgFile = reader.result;

            setInputs({...inputs, image: imgFile});

            let image = new Image();
            image.src = reader.result;
            document.getElementById('profileImg').appendChild(image);
        }
        reader.readAsDataURL(file);
    }

    // name
    const nameVal = (e) => {
        // get input
        const value = e.target.value;
        setInputs({...inputs, name: value});

        // make sure input field isn't empty
        if(inputs.name !== ''){setNameError();}
    }

    // surname
    const surnameVal = (e) => {
        // get input
        const value = e.target.value;
        setInputs({...inputs, surname: value});

        // make sure input field isn't empty
        if(inputs.surname !== ''){setSurnameError();}
    }

    // age
    const ageVal = (e) => {
        // get input
        const value = e.target.value;
        setInputs({...inputs, age: value});

        // make sure input field isn't empty
        if(inputs.age !== ''){setAgeError();}
    }

    // gender
    const genderVal = (e) => {
        // get input
        const value = e.target.value;
        setInputs({...inputs, gender: value});

        // make sure input field isn't empty
        if(inputs.gender !== ''){setGenderError();}
    }

    // cellNo
    const contactVal = (e) => {
        const contactRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        // get input
        const value = e.target.value;
        setInputs({...inputs, cellNo: value});

        // make sure input field isn't empty
        if(inputs.cellNo !== ''){setContactError();}
        if(!value.match(contactRegex)){
            setContactError(<MiniModalRight message="Phone number is not valid."/>);
        }
    }

    // email VALIDATE
    const emailVal = (e) => {
        const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        // get input
        const value = e.target.value;
        setInputs({...inputs, email: value});

        // make sure input field isn't empty
        if(inputs.email !== ''){setEmailError();}

        // if value doesn't match regex
        if(!value.match(mailRegex)){
            setEmailError(<MiniModalRight message="Email is not valid. Try something like : joe@gmail.com"/>);
        }
    }

    // rank
    const rankVal = (e) => {
        // get input
        const value = e.target.value;
        setInputs({...inputs, rank: value});

        // make sure input field isn't empty
        if(inputs.rank !== ''){setRankError();}
    }

    // email AUTHENTICATE
    const authenticateEmail = () => {
        axios.post('http://localhost:8888/mediclinicApi/authenticateEmail.php', inputs)
        .then(function(res){
            console.log(res);

            setEmailIcon()

            if(res.data === "Available"){
                setEmailIcon(Valid);
                setEmailAvail();
            } else if(res.data === "Not Available"){
                setEmailIcon(invalid);
                setEmailAvail(<MiniModalRight message="You cannot use this Email."/>);
            } else if(res.data === ''){
                setEmailIcon();
                setEmailAvail();
                setEmailError();
            }
        });
    }

    // password
    const passwordVal = (e) => {
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/ ;
        // get input
        const value = e.target.value;
        setInputs({...inputs, password: value});

        // make sure input field isn't empty
        if(inputs.password !== ''){setPasswordError();}
        if(!value.match(passRegex)){
            setPasswordError(<MiniModalRight message="Password must include a number, special character, uppercase and lowercase letters and it must be at least 5 digits long."/>);
        }
    }

    // confirm password
    const passwordConVal = (e) => {
        // get input
        const value = e.target.value;
        setInputs({...inputs, passwordCon: value});

        if(inputs.password === value){
            setPasswordConError()
        } else {
            setPasswordConError(<MiniModalRight message="Your Password does not match."/>);
        }
    }

    // submit event!
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);

        if(inputs.name === ''){
            setNameError(<MiniModalRight message="What's your name?"/>);
        } else {
            setNameError();
        }

        if(inputs.surname === ''){
            setSurnameError(<MiniModalRight message="What's your Surname?"/>);
        } else {
            setSurnameError();
        }

        if(inputs.age === ''){
            setAgeError(<MiniModalRight message="How old are you?"/>);
        } else {
            setAgeError();
        }

        if(inputs.gender === ''){
            setGenderError(<MiniModalRight message="Are you a male or female?"/>);
        } else {
            setGenderError();
        }

        if(inputs.cellNo === ''){
            setContactError(<MiniModalRight message="You must provide a cellphone Number."/>);
        } else {
            setContactError();
        }

        if(inputs.email === ''){
            setEmailError(<MiniModalRight message="You must provide an email address."/>);
        } else {
            setEmailError();
        }

        if(inputs.rank === ''){
            setRankError(<MiniModalRight message="Are you a head receptionist or a normal receptionist?"/>);
        } else {
            setRankError();
        }

        if(inputs.password === ''){
            setPasswordError(<MiniModalRight message="You must include a password."/>);
        } else {
            setPasswordError();
        }

        if(inputs.passwordCon === ''){
            setPasswordConError(<MiniModalRight message="Please confirm your password."/>);
        } else {
            setPasswordConError();
        }

        let result = Object.values(inputs).some(o => o === '');

        if(result){
            console.log("There is an error");
        } else {
            axios.post('http://localhost:8888/mediclinicApi/addUser.php', inputs)
            .then(function(res){
                console.log(res);

                if(res.status === 200){
                    navigate("/");
                }
            });
        }
    }

    return (
        <div className="register">
            
            <div className="registerForm">
                <form>
                    <div className="registerLogo"></div>
                    <h1>Register Now!</h1>

                    <div className="imgArea">
                        <div className="profile_img" id="profileImg"></div>
                        <p>Upload a profile image</p>
                        <input name="imageUrl" className="imgInput" type="file" onChange={imageVal}/>
                    </div>
                    
                    {nameError}
                    <input name="name" type="text" id="nameInputRegister" placeholder="Name" onChange={nameVal}/>
                    {surnameError}
                    <input name="surname" type="text" id="surnameInputRegister" placeholder="Surname" onChange={surnameVal}/>
                    {ageError}
                    <input name="age" type="number" id="ageInputRegister" placeholder="age" onChange={ageVal}/>
                    {genderError}
                    <input name="gender" type="text" id="genderInputRegister" placeholder="Gender" onChange={genderVal}/>
                    {emailError}
                    {emailAvail}
                    <input name="email" type="text" id="emailInputRegister" placeholder="Email Address" onBlur={authenticateEmail} onChange={emailVal}/>
                    {contactError}
                    <input name="cellNo" type="number" id="cellInputRegister" placeholder="Celllphone Number" onChange={contactVal}/>
                    {rankError}
                    <input name="rank" type="text" id="rankInputRegister" placeholder="Rank" onChange={rankVal}/>
                    {passwordError}
                    <input name="password" type="password" id="passwordRegister" placeholder="Password" onChange={passwordVal}/>
                    {passwordConError}
                    <input type="password" id="confirmPasswordRegister" placeholder="Confirm Password" onChange={passwordConVal}/>
                    
                    <a href="/"><div className='button' onClick={handleSubmit}>Sign Up!</div></a>
                    <a href="/">Already have an account? Login!</a>
                </form>

                <div className="registerImg"></div>
            </div>
            
        </div>
    );
}

export default Register;