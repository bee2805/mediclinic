import React from "react";

const Appointments = (props) => {
    return(
        
        <>
            <div className='row_item'>
                <p><strong>Patient: </strong>{props.patientName}</p>
                <p><strong>Doctor: </strong>{props.doctorName}</p>
                <p><strong>Time: </strong>{props.time}</p>
                <p><strong>Room: </strong>{props.room}</p>
            </div>
        </>
    )
}

export default Appointments;