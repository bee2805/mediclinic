import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const EditDoctor = (props) => {

    return(
        <div className="editAppointment">
            <form>
                <div className="close"></div>
                <h2>Edit Appointment</h2>
                <input name="name" id="name" placeholder="Name and Surname"/>
                <input name="time" type="time" id="time"/>
                <select name="room" id="drRoom">
                    <option>Select Room</option>
                </select>
                <select name="doc" id="dr">
                    <option id="dr">Select Doctor</option>
                </select>
                <div className='button'>Edit this appointment</div>
            </form>
        </div>
    )
}

export default EditDoctor;