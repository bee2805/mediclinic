import React, { useEffect, useRef, useState } from "react";
import SideNav from "./SideNav";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Appointments from "../components/Appointment";
import EditAppointment from "../components/EditAppointment";

function EditLanding() {

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [dataPatient, setDataPatient] = useState([]);
    const [roomData, setRoomData] = useState([]);

    let selectedDoctor = useRef();
    let selectedRoom = useRef();

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

    const nameVal = (e) => {
        const value = e.target.value;
        setNewAppointment({... newAppointmet, patientName: value});

        // validate if the field is empty.
        if(newAppointmet.patientName !== ''){setNameError();}
    }

    const medicalAidNoVal = (e) => {
        const value = e.target.value;
        setNewAppointment({...newAppointmet, medicalAidNo: value});

        // validate if the field is empty.
        if(newAppointmet.medicalAidNo !== ''){setMedicalAidError();}
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
            console.log(data);
            setRenderAppointments(true);
        });
    }

    // sort dates
    // useEffect(() => {
    //     axios.get('http://localhost:8888/mediclinicApi/readRoom.php', userId)
    //     .then((res) => {
    //         let roomData = res.data;
    //         setRoomData(roomData);
    //     })
    //     .catch(err=>{
    //         console.log(err);
    //     })
    // },[]);
    
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
                        <h1>Hello, User!</h1>
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

            {/* right component */}
            <div className="rightContent">

                <div className="upcomingAppointment">
                    <h2>Next Appointment</h2>
                    <div className="patientDetails">
                        <div className="profilePicture"></div>
                        <div className="appointmentDetails">
                            <p><strong>Patient: </strong>Kelly Pedro</p>
                            <p><strong>Medical-Aid No: </strong>095757534</p>
                            <p><strong>Doctor: </strong>Dr. Smith</p>
                            <p><strong>Time: </strong>08:30 am</p>
                            <p><strong>Room: </strong>A3</p>
                        </div>
                    </div>
                </div>

                <hr/>

                <form className="addAppointment">
                    <h2>Add new appointment:</h2>
                    <select name="name" id="patientName" onChange={nameVal}>
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

            </div>
        </div>
    );
}

export default EditLanding;