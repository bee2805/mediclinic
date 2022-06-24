import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import PatientCard from "../components/PatientCard";
import SideNav from "./SideNav";
import axios from "axios";

function EditPatients() {

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

    const [patients, setPatients] = useState();

    const [inputs, setInputs] = useState({
        image: '',
        name: '',
        surname: '',
        age: '', 
        gender: '',
        cellNo: '',
        email: '',
        password: '',
        medicalAidNo: ''
    });

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

    const medicalAidVal = (e) => {
        // get input
        const value = e.target.value;
        setInputs({...inputs, medicalAidNo: value});
    }

    const [renderPatients, setRenderPatients] = useState();

    // this useEffect will get existing doctors and doctors added by receptionist
    useEffect(() => {
        axios.post('http://localhost:8888/mediclinicApi/readPatients.php', userId)
        .then((res) => {
            let data = res.data;
            let renderPatients = data.map((item) => <PatientCard key={item.id} rerender={setRenderPatients} uniqueId={item.id} name={item.name} surname={item.surname} medicalAidNo={item.medicalAidNo} gender={item.gender} age={item.age} cellNo={item.cellNo}/>);
            console.log(res);
            setPatients(renderPatients);
            setRenderPatients(false);
        })
        .catch(err=>{
            console.log(err);
        })
    },[renderPatients]);

    const addPatient = () => {
        document.getElementById('nameInput').value = "";
        document.getElementById('surnameInput').value = "";
        document.getElementById('ageInput').value = "";
        document.getElementById('genderInput').value = "";
        document.getElementById('cellInput').value = "";
        document.getElementById('emailInput').value = "";
        document.getElementById('password').value = "";
        document.getElementById('medicalAidNoInput').value = "";


        axios.post('http://localhost:8888/mediclinicApi/addPatients.php', inputs)
        .then((res) => {
            let data = res.data;
            console.log(data);
            setRenderPatients(true);
        });
    }

    return (
        <div className="editPatients">
            <SideNav/>
            <div className="patientsList overflow">
                <h1>Patients</h1>
                {patients}
            </div>
            <div className="addPatient">
                <div className="patientImg"></div>
                <h2>Add a Patient</h2>
                <form>
                    <div className="imgArea">
                        <div className="profile_img" id="profileImg"></div>
                        <p>Upload a profile image</p>
                        <input name="imageUrl" className="imgInput" type="file" onChange={imageVal}/>
                    </div>
                    <input type="text" id="nameInput" placeholder="Name" onChange={nameVal}/>
                    <input type="text" id="surnameInput" placeholder="Surname" onChange={surnameVal}/>
                    <input type="number" id="ageInput" placeholder="age" onChange={ageVal}/>
                    <input type="text" id="genderInput" placeholder="Gender" onChange={genderVal}/>
                    <input type="number" id="cellInput" placeholder="Celllphone Number" onChange={cellVal}/>
                    <input type="text" id="medicalAidNoInput" placeholder="Medical Aid Number" onChange={medicalAidVal}/>
                    <input type="text" id="emailInput" placeholder="Email Address" onChange={emailVal}/>
                    <input type="password" id="password" placeholder="Password" onChange={passwordVal}/>
                </form>
                <div className="button" onClick={addPatient}>+  Add Patient</div>
            </div>
        </div>
    );
}

export default EditPatients;