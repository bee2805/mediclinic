import React, { useState } from "react";
import axios from "axios";

const PatientCard = (props) => {
    return(
        <div className="patientCard">
            <div className="editPatient"></div>
            <div className="deletePatient"></div>
            <div className="patientProfile1"></div>
            <h4>{props.name} {props.surname}</h4>
            <p id="medicalAidNo">{props.medicalAidNo}</p>
            <hr/>
            <p><strong>Gender: </strong>{props.gender}</p>
            <p><strong>Age: </strong>{props.age}</p>
            <p><strong>Cell No: </strong>{props.cellNo}</p>
        </div>
    );
}

export default PatientCard;