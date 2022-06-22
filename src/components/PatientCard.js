import React, { useState } from "react";
import axios from "axios";
import EditPatient from "./EditPatient";

const PatientCard = (props) => {

    const [modal, setModal] = useState();

    const editPatient = () => {
        setModal(<EditPatient id={props.uniqueId} upRender={props.rerender} rerender={setModal} origionalName={props.name} origionalSurname={props.surname} origionalAge={props.age} origionalGender={props.gender} origionalCell={props.cellNo} origionalEmail={props.email} origionalMedicalAidNo={props.specialization}/>);
    }

    const deletePatient = () => {
        if(window.confirm("Are you sure you want to remove this Patient?") === true){
            
            let patientId = {id: props.uniqueId};

            axios.post('http://localhost:8888/mediclinicApi/deletePatient.php', patientId)
            .then((res) => {
                let data = res.data;
                console.log(res);
                props.rerender(true);
            });

        } else {
            console.log("The patient was not deleted.");
        }
    }

    return(
        <>
            {modal}
            <div className="patientCard">
                <div className="editPatient" onClick={editPatient}></div>
                <div className="deletePatient" onClick={deletePatient}></div>
                <div className="patientProfile1"></div>
                <h4>{props.name} {props.surname}</h4>
                <p id="medicalAidNo">{props.medicalAidNo}</p>
                <hr/>
                <p><strong>Gender: </strong>{props.gender}</p>
                <p><strong>Age: </strong>{props.age}</p>
                <p><strong>Cell No: </strong>{props.cellNo}</p>
            </div>
        </>
    );
}

export default PatientCard;