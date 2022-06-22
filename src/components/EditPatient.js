import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const EditPatient = (props) => {

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

export default EditPatient;