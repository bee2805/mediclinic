import React, { useState, useEffect } from "react";
import axios from "axios";
import EditAppointment from "./EditAppointment";

const Appointments = (props) => {

    const [modal, setModal] = useState();

    const editAppointment = () => {
        setModal(<EditAppointment upRender={props.rerender} rerender={setModal} origionalPatientName={props.patientName} origionalDoctorName={props.doctorName} origionalDate={props.date} origionalTime={props.time} origionalRoom={props.room} id={props.uniqueId}/>);
    }


    // tried to sort times - work but isn't rendering in order
    // const sortTimes = () => {
    //     axios.get('http://localhost:8888/mediclinicApi/readAppointments.php')
    //     .then((res) => {
    //         let data = res.data;
    //         let times = data.map(item => item.time);
    //         let sortedtimes = times.sort();
    //         console.log(sortedtimes);
    //     });
    // }

    const deleteAppointment = () => {
        if(window.confirm("Are you sure you want to delete this Appointment?") === true){
            let appointmentId = {id: props.uniqueId};

            axios.post('http://localhost:8888/mediclinicApi/deleteAppointment.php', appointmentId)
            .then((res) => {
                let data = res.data;
                props.rerender(true);
            });
            
        } else {
            console.log("The user did not delete the post");
        }
    }

    return(
        
        <>
            {modal}
            <div className='row_item'>
                <p><strong>Patient: </strong>{props.patientName}</p>
                <p><strong>Doctor: </strong>Dr. {props.doctorName}</p>
                <p><strong>Time: </strong>{props.time}</p>
                <p><strong>Room: </strong>{props.room}</p>
                <div className="delete" onClick={deleteAppointment}></div>
                <div className="edit" onClick={editAppointment}></div>
            </div>
        </>
    )
}

export default Appointments;