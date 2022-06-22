import React, { useState } from "react";
import axios from "axios";

const DoctorCard = (props) => {

    const deleteDoctor = () => {
        if(window.confirm("Are you sure you want to remove this Doctor?") === true){
            
            let doctorId = {id: props.uniqueId};

            axios.post('http://localhost:8888/mediclinicApi/deleteDoctor.php', doctorId)
            .then((res) => {
                let data = res.data;
                console.log(res);
                props.rerender(true);
            });

        } else {
            console.log("The doctor was not deleted.");
        }
    }

    return(
        <div className="doctorCard">
            <div className="editDoctor"></div>
            <div className="deleteDoctor" onClick={deleteDoctor}></div>
            <div className="doctorProfile1"></div>
            <h4>Dr. {props.surname}</h4>
            <p id="specialiation">{props.specialization}</p>
            <hr/>
            <p><strong>Gender: </strong>{props.gender}</p>
            <p><strong>Age: </strong>{props.age}</p>
            <p><strong>Cell No: </strong>{props.cellNo}</p>
        </div>
    );
}

export default DoctorCard;