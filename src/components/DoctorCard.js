import React, { useState } from "react";
import axios from "axios";

const DoctorCard = (props) => {
    return(
        <div className="doctorCard">
            <div className="editDoctor"></div>
            <div className="deleteDoctor"></div>
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