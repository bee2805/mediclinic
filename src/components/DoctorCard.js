import React, { useEffect, useState } from "react";
import axios from "axios";
import EditDoctor from "./EditDoctor";

const DoctorCard = (props) => {

    const [modal, setModal] = useState();

    const editDoctor = () => {
        setModal(<EditDoctor id={props.uniqueId} upRender={props.rerender} rerender={setModal} origionalName={props.name} origionalSurname={props.surname} origionalAge={props.age} origionalGender={props.gender} origionalCell={props.cellNo} origionalEmail={props.email} origionalSpecialization={props.specialization} origionalRoom={props.room}/>);
    }

    const deleteDoctor = () => {
        if(window.confirm("Are you sure you want to remove this Doctor?") === true){
            
            let doctorId = {id: props.uniqueId};

            axios.post('http://localhost:8888/mediclinicApi/deleteDoctor.php', doctorId)
            .then((res) => {
                let data = res.data;
                props.rerender(true);
            });

        } else {
            console.log("The doctor was not deleted.");
        }
    }

    return(
        <>
            {modal}
            <div className="doctorCard">
                <div className="editDoctor" onClick={editDoctor}></div>
                <div className="deleteDoctor" onClick={deleteDoctor}></div>
                <div className="doctorProfile">
                    <img src={props.image} className="doctorImage"/>
                </div>
                <h4>Dr. {props.surname}</h4>
                <p id="specialiation">{props.specialization}</p>
                <hr/>
                <p><strong>Gender: </strong>{props.gender}</p>
                <p><strong>Age: </strong>{props.age}</p>
                <p><strong>Cell No: </strong>{props.cellNo}</p>
            </div>
        </>
    );
}

export default DoctorCard;