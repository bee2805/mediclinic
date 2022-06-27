import React, { useEffect, useRef, useState } from "react";
import SideNav from "./SideNav";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Appointments from "../components/Appointment";
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';
import { registerLicense } from '@syncfusion/ej2-base';

function EditLanding() {

    registerLicense('ORg4AjUWIQA/Gnt2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkNhX39XcnVUQ2lVUkE=');

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [dataPatient, setDataPatient] = useState([]);
    const [roomData, setRoomData] = useState([]);
    const [receptionist, setReceptionist] = useState();
    const [renderImage, setRenderImage] = useState();
    const [receptionistName, setReceptionistName] = useState([]);

    let selectedDoctor = useRef();
    let selectedRoom = useRef();
    let selectedPatient = useRef();

    const [userId, setUserId] = useState({
        activeUser: sessionStorage.getItem('activeUser')
    });

    // use effect is supposed to redirect if session is not set
    useEffect(() =>{
        const userSession = sessionStorage.getItem('activeUser');
        if(userSession === '' || userSession === null){
            navigate('/');
        }

        axios.post('http://localhost:8888/mediclinicApi/readReceptionists.php', userId)
        .then((res) => {
            let data = res.data;

            let source = data[0].image;
            let renderPath = 'http://localhost:8888/mediclinicApi/' + source;
            setRenderImage(renderPath);
            setReceptionist(data.map(item => item.name));
            setReceptionistName(data.map(item => item.name + " " + item.surname));
        })
    },[]);

    const current = new Date();

    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    // appointments
    const [appointments, setAppointments] = useState();

    // ADDING NEW APPOINTMENTS
    const [nameError, setNameError] = useState();
    const [mediclAidError, setMedicalAidError] = useState();
    const [dateError, setDateError] = useState();
    const [timeError, setTimeError] = useState();
    const [docError, setDocError] = useState();
    const [roomError, setRoomError] = useState();

    const [newAppointmet, setNewAppointment] = useState({
        patientName: '',
        medicalAidNo: '',
        date: '',
        time: '',
        doctorName: '',
        room: ''
    });

    useEffect(() => {
        axios.get('http://localhost:8888/mediclinicApi/readDoctors.php', userId)
        .then((res) => {
            let docData = res.data;
            setData(docData);
        })
        .catch(err=>{
            console.log(err);
        })
    },[]);

    useEffect(() => {
        axios.get('http://localhost:8888/mediclinicApi/readPatients.php', userId)
        .then((res) => {
            let PatientData = res.data;
            setDataPatient(PatientData);
        })
        .catch(err=>{
            console.log(err);
        })
    },[]);

    useEffect(() => {
        axios.get('http://localhost:8888/mediclinicApi/readRoom.php', userId)
        .then((res) => {
            let roomData = res.data;
            setRoomData(roomData);
        })
        .catch(err=>{
            console.log(err);
        })
    },[]);

    const nameVal = () => {
        const patientName = selectedPatient.current.value;
        setNewAppointment({... newAppointmet, patientName: patientName});

        // validate if the field is empty.
        if(newAppointmet.patientName !== ''){setNameError();}
    }

    const dateVal = (e) => {
        const value = e.target.value;
        setNewAppointment({...newAppointmet, date: value});

        // validate if the field is empty.
        if(newAppointmet.date !== ''){setDateError();}
    }

    const timeVal = (e) => {
        const value = e.target.value;
        setNewAppointment({...newAppointmet, time: value});

        // validate if the field is empty.
        if(newAppointmet.time !== ''){setTimeError();}
    }

    const docVal = () => {
        const doctorName = selectedDoctor.current.value;
        setNewAppointment({...newAppointmet, doctorName: doctorName});

        // validate if the field is empty.
        if(newAppointmet.doc !== ''){setDocError();}
    }

    const roomVal = () => {
        const room = selectedRoom.current.value;
        setNewAppointment({...newAppointmet, room: room});

        // validate if the field is empty.
        if(newAppointmet.room !== ''){setRoomError();}
    }

    const [renderAppointments, setRenderAppointments] = useState();

    // this useEffect will get appointments made by the receptionist
    useEffect(() => {
        axios.post('http://localhost:8888/mediclinicApi/readAppointments.php', userId)
        .then((res) => {
            let data = res.data;
            let renderAppointments = data.map((item) => <Appointments key={item.id} rerender={setRenderAppointments} uniqueId={item.id} patientName={item.patientName} doctorName={item.doctorName} time={item.time} room={item.room}/>);

            setAppointments(renderAppointments);
            setRenderAppointments(false);
        })
        .catch(err => {
            console.log(err);
        });
    }, [renderAppointments]);

    const addNewAppointment = (e) => {
        e.preventDefault();
        document.getElementById('patientName').value = "Select Patient";
        document.getElementById('date').value = "";
        document.getElementById('time').value = "";
        document.getElementById('dr').value = "Select Doctor";
        document.getElementById('drRoom').value = "Select Room";

        axios.post('http://localhost:8888/mediclinicApi/addAppointment.php', newAppointmet)
        .then((res) => {
            let data = res.data;
            setRenderAppointments(true);
        });
    }
    
    return (
        <div className="editLanding">
            <SideNav/>
            {/* Left Content */}
            <div className="leftContent overflow">

                {/* <EditAppointment/> */}

                {/* Intro */}
                <div className="intro">
                    <div className="landingImg"></div>
                    <div className="introBlock">
                        <p id="currentDate">{date}</p>
                        {/* {receptionistData.map(item => item.name)} */}
                        <h1>Hello, {receptionist}!</h1>
                        <p>Manage all appointments with ease. Here you will be able to see upcoming appointments and you will also be able to add and delete appointments!</p>
                    </div>
                </div>{/* Intro */}

                <br/>

                {/* Appointments */}
                <div className="appointments">
                    <h2>Todays Appontments:</h2>
                    {appointments}
                    {/* Edit Appointmetns */}
                    {/* <div className="button">Edit Appointments</div> */}
                </div> {/* Appointments */}


            </div>{/* Left Content */}

            {/* right content */}
            <div className="rightContent">

                <div className="receptionistImg">
                    <img src={renderImage} className="receptionistImage"/>
                </div>
                <div className="receptionstName">
                    <h4>{receptionistName}</h4>
                </div>

                <div className="upcomingAppointment">
                    <CalendarComponent></CalendarComponent>
                </div>

                <hr/>

                <form className="addAppointment">
                    <h2>Add new appointment:</h2>
                    <select name="name" id="patientName" ref={selectedPatient} onChange={nameVal}>
                        <option>Select Patient</option>
                        {dataPatient.map(item => <option key={item.id}>{item.name} {item.surname}</option>)}
                    </select>
                    <input name="date" type="date" id="date" onChange={dateVal}/>
                    <input name="time" type="time" id="time" onChange={timeVal}/>
                    <select name="doc" id="dr" ref={selectedDoctor} onChange={docVal}>
                        <option>Select Doctor</option>
                        {data.map(item => <option key={item.id}>{item.surname}</option>)}
                    </select>
                    <select name="room" id="drRoom" ref={selectedRoom} onChange={roomVal}>
                        <option>Select Room</option>
                        {roomData.map(item => <option key={item.id}>{item.room}</option>)}
                    </select>
                    <div className='button' onClick={addNewAppointment}>+ Add Appointment</div>
                </form>

            </div> {/* right content */}
        </div>
    );
}

export default EditLanding;