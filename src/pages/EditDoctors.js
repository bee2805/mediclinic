import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import SideNav from "./SideNav";
import DoctorCard from "../components/DoctorCard";
import axios from "axios";

function EditDoctors() {

    const navigate = useNavigate();

    const [userId, setUserId] = useState({
        activeUser: sessionStorage.getItem('activeUser')
    });

    // use effect is supposed to redirect if session is not set
    useEffect(() =>{
        const userSession = sessionStorage.getItem('activeUser');
        if(userSession === '' || userSession === null){
            navigate('/');
        }
    },[]);

    const [doctors, setDoctors] = useState();

    const [inputs, setInputs] = useState({
        name: '',
        surname: '',
        age: '', 
        gender: '',
        cellNo: '',
        email: '',
        password: '',
        specialization: '',
        room: ''
    });

    // const imageVal = (e) => {           
    //     let file = e.target.files[0];
    //     let reader = new FileReader();

    //     reader.onloadend = function() {
    //         console.log(reader.result);
    //         let imgFile = reader.result;

    //         setInputs({...inputs, image: imgFile});

    //         let image = new Image();
    //         image.src = reader.result;
    //         document.getElementById('profileImg').appendChild(image);
    //     }
    //     reader.readAsDataURL(file);
    // }

    const nameVal = (e) => {
        // get input
        const value = e.target.value;
        setInputs({...inputs, name: value});
        // make sure input field isn't empty
        // if(inputs.name !== ''){setNameError();}
    }
    
    const surnameVal = (e) => {
        // get input
        const value = e.target.value;
        setInputs({...inputs, surname: value});
    }

    const ageVal = (e) => {
        // get input
        const value = e.target.value;
        setInputs({...inputs, age: value});
    }

    const genderVal = (e) => {
        // get input
        const value = e.target.value;
        setInputs({...inputs, gender: value});
    }

    const cellVal = (e) => {
        // get input
        const value = e.target.value;
        setInputs({...inputs, cellNo: value});
    }

    const emailVal = (e) => {
        // get input
        const value = e.target.value;
        setInputs({...inputs, email: value});
    }

    const passwordVal = (e) => {
        // get input
        const value = e.target.value;
        setInputs({...inputs, password: value});
    }

    const specializationVal = (e) => {
        // get input
        const value = e.target.value;
        setInputs({...inputs, specialization: value});
    }

    const roomVal = (e) => {
        // get input
        const value = e.target.value;
        setInputs({...inputs, room: value});
    }

    const [renderDoctors, setRenderDoctors] = useState();

    // this useEffect will get existing doctors and doctors added by receptionist
    useEffect(() => {
        axios.post('http://localhost:8888/mediclinicApi/readDoctors.php', userId)
        .then((res) => {
            let data = res.data;
            let renderDoctors = data.map((item) => <DoctorCard key={item.id} surname={item.surname} specialization={item.specialization} gender={item.gender} age={item.age} cellNo={item.cellNo}/>);
            console.log(res);
            setDoctors(renderDoctors);
            setRenderDoctors(false);
        })
        .catch(err=>{
            console.log(err);
        })
    },[renderDoctors]);

    const addDoctor = () => {
        document.getElementById('nameInput').value = "";
        document.getElementById('surnameInput').value = "";
        document.getElementById('ageInput').value = "";
        document.getElementById('genderInput').value = "";
        document.getElementById('cellInput').value = "";
        document.getElementById('emailInput').value = "";
        document.getElementById('password').value = "";
        document.getElementById('specialization').value = "";
        document.getElementById('room').value = "";


        axios.post('http://localhost:8888/mediclinicApi/addDoctors.php', inputs)
        .then((res) => {
            let data = res.data;
            console.log(data);
            setRenderDoctors(true);
        });
    }


    return (
        <div className="editDoctors">
            <SideNav/>
            <div className="doctorsList overflow">
                <h1>Doctors</h1>
                {doctors}
            </div>
            <div className="addDoctor">
                <div className="doctorImg"></div>
                <h2>Add a Doctor</h2>
                <form>
                    {/* <div className="imgArea">
                        <div className="profile_img" id="profileImg"></div>
                        <p>Upload a profile image</p>
                        <input name="imageUrl" className="imgInput" type="file"/>
                    </div> */}
                    <br/>
                    <input type="text" id="nameInput" placeholder="Name" onChange={nameVal}/>
                    <input type="text" id="surnameInput" placeholder="Surname" onChange={surnameVal}/>
                    <input type="number" id="ageInput" placeholder="age" onChange={ageVal}/>
                    <input type="text" id="genderInput" placeholder="Gender" onChange={genderVal}/>
                    <input type="number" id="cellInput" placeholder="Celllphone Number" onChange={cellVal}/>
                    <input type="text" id="emailInput" placeholder="Email Address" onChange={emailVal}/>
                    <input type="password" id="password" placeholder="Password" onChange={passwordVal}/>
                    <input type="text" id="specialization" placeholder="Specialization" onChange={specializationVal}/>
                    <input type="text" id="room" placeholder="Room" onChange={roomVal}/>
                </form>
                <div className="button" onClick={addDoctor}>+  Add Doctor</div>
            </div>
        </div>

    );
}

export default EditDoctors;