import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const EditAppointment = (props) => {

    const [updatedAppointment, setUpdatedAppointment] = useState({
        id: props.id,
        newPatient: props.origionalPatientName,
        newTime: props.origionalTime, 
        newDoctor: props.origionalDoctorName,
        newRoom: props.origionalRoom
    })

    const closeModal = () =>{
        props.rerender();
    }

    useEffect(() => {
        document.getElementById('name').innerHTML = props.origionalPatientName;
        document.getElementById('time').innerHTML = props.origionalTime;
        document.getElementById('dr').innerHTML = props.origionalDoctorName;
        document.getElementById('drRoom').innerHTML = props.origionalRoom;
    }, []);

    const nameChange = (e) => {
        let value = e.target.value;
        setUpdatedAppointment({...updatedAppointment, newPatient:value});
        console.log(updatedAppointment);
    }

    const doctorChange = (e) => {
        let value = e.target.value;
        setUpdatedAppointment({...updatedAppointment, newDoctor:value});
        console.log(updatedAppointment);
    }

    const timeChange = (e) => {
        let value = e.target.value;
        setUpdatedAppointment({...updatedAppointment, newTime:value});
        console.log(updatedAppointment);
    }

    const roomChange = (e) => {
        let value = e.target.value;
        setUpdatedAppointment({...updatedAppointment, newRoom:value});
        console.log(updatedAppointment);
    }

    const updateAppointment = () => {
        axios.post('http://localhost:8888/mediclinicApi/updateAppointment.php', updatedAppointment)
        .then((res) => {
            let data = res.data;
            console.log(data);
            props.upRender(true);
            props.rerender();
        });
    }

    return(
        <div className="editAppointment">
            <form>
                <div className="close" onClick={closeModal}></div>
                <h2>Edit Appointment</h2>
                <input name="name" id="name" placeholder="Name and Surname" onChange={nameChange}/>
                <input name="time" type="time" id="time" onChange={timeChange}/>
                <select name="room" id="drRoom" onChange={roomChange}>
                    <option>Select Room</option>
                </select>
                <select name="doc" id="dr" onChange={doctorChange}>
                    <option id="dr">Select Doctor</option>
                </select>
                <div className='button' onClick={updateAppointment}>Edit this appointment</div>
            </form>
        </div>
    )
}

export default EditAppointment;