import React from "react";

function EditLanding() {
    return (
        <div className="editLanding">
            {/* Left Content */}
            <div className="leftContent">

                {/* Intro */}
                <div className="intro">
                    <div className="landingImg"></div>
                    <div className="introBlock">
                        <h1>Hello, User!</h1>
                        <p>Manage all appointments with ease. Here you will be able to see upcoming appointments and you will also be able to add and delete appointments!</p>
                    </div>
                </div>{/* Intro */}

                <br/>

                {/* Appointments */}
                <div className="appointments">
                    <h2>Todays Appontments:</h2>

                    <div className='row_item'>
                        <p><strong>Patient: </strong>Kelly Pedro</p>
                        <p><strong>Doctor: </strong>Dr. Smith</p>
                        <p><strong>Time: </strong>08:30</p>
                        <p><strong>Room: </strong>A3</p>
                    </div>

                    <div className='row_item'>
                        <p><strong>Patient: </strong>Craig Sterley</p>
                        <p><strong>Doctor: </strong>Dr. Hamade</p>
                        <p><strong>Time: </strong>10:00</p>
                        <p><strong>Room: </strong>A1</p>
                    </div>

                    <div className='row_item'>
                        <p><strong>Patient: </strong>Jess v d Walt</p>
                        <p><strong>Doctor: </strong>Dr. Smith</p>
                        <p><strong>Time: </strong>13:00</p>
                        <p><strong>Room: </strong>A2</p>
                    </div>

                    <div className='row_item'>
                        <p><strong>Patient: </strong>Ian Potgieter</p>
                        <p><strong>Doctor: </strong>Dr. Ramaiah</p>
                        <p><strong>Time: </strong>13:30</p>
                        <p><strong>Room: </strong>A3</p>
                    </div>

                    <div className='row_item'>
                        <p><strong>Patient: </strong>Demi Muir</p>
                        <p><strong>Doctor: </strong>Dr. Shabalala</p>
                        <p><strong>Time: </strong>14:30</p>
                        <p><strong>Room: </strong>A3</p>
                    </div>

                    <div className='row_item'>
                        <p><strong>Patient: </strong>Mila Muir</p>
                        <p><strong>Doctor: </strong>Dr. Smith</p>
                        <p><strong>Time: </strong>14:30</p>
                        <p><strong>Room: </strong>A3</p>
                    </div>

                </div> {/* Appointments */}

                {/* Edit Appointmetns */}
                <div className="button">Edit Appointments</div>

            </div>{/* Left Content */}
            <div className="rightContent">

                <div className="upcomingAppointment">
                    <h2>Next Appointment</h2>
                    <div className="patientDetails">
                        <div className="profilePicture"></div>
                        <div className="appointmentDetails">
                            <p><strong>Patient: </strong>Kelly Pedro</p>
                            <p><strong>Age: </strong>21 years old</p>
                            <p><strong>Doctor: </strong>Dr. Smith</p>
                            <p><strong>Time: </strong>08:30 am</p>
                            <p><strong>Room: </strong>A3</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default EditLanding;