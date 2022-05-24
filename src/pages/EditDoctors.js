import React from "react";

function EditDoctors() {
    return (
        <div className="editDoctors">
            <div className="doctorsList">
                <h1>Doctors</h1>
                <div className="doctorCard">
                    <div className="doctorProfile1"></div>
                    <h4>Dr. Reddy</h4>
                    <p id="specialiation">General Practitioner</p>
                    <hr/>
                    <p><strong>Gender: </strong>Male</p>
                    <p><strong>Age: </strong>29</p>
                    <p><strong>Cell No: </strong>0670598196</p>
                </div>

                <div className="doctorCard">
                    <div className="doctorProfile2"></div>
                    <h4>Dr. Hamade</h4>
                    <p id="specialiation">Dentist</p>
                    <hr/>
                    <p><strong>Gender: </strong>Male</p>
                    <p><strong>Age: </strong>31</p>
                    <p><strong>Cell No: </strong>0678945736</p>
                </div>

                <div className="doctorCard">
                    <div className="doctorProfile3"></div>
                    <h4>Dr. Ramaiah</h4>
                    <p id="specialiation">Dermatologist</p>
                    <hr/>
                    <p><strong>Gender: </strong>Male</p>
                    <p><strong>Age: </strong>29</p>
                    <p><strong>Cell No: </strong>0670598196</p>
                </div>

                <div className="doctorCard">
                    <div className="doctorProfile4"></div>
                    <h4>Dr. van Rensburg</h4>
                    <p id="specialiation">Oral Hygenist</p>
                    <hr/>
                    <p><strong>Gender: </strong>Female</p>
                    <p><strong>Age: </strong>30</p>
                    <p><strong>Cell No: </strong>0670598196</p>
                </div>

                <div className="doctorCard">
                    <div className="doctorProfile5"></div>
                    <h4>Dr. Shabalala</h4>
                    <p id="specialiation">Physician</p>
                    <hr/>
                    <p><strong>Gender: </strong>Male</p>
                    <p><strong>Age: </strong>28</p>
                    <p><strong>Cell No: </strong>0670598196</p>
                </div>

                <div className="doctorCard">
                    <div className="doctorProfile6"></div>
                    <h4>Dr. Andrews</h4>
                    <p id="specialiation">Pediatrician</p>
                    <hr/>
                    <p><strong>Gender: </strong>Male</p>
                    <p><strong>Age: </strong>29</p>
                    <p><strong>Cell No: </strong>0670598196</p>
                </div>

                <div className="doctorCard">
                    <div className="doctorProfile7"></div>
                    <h4>Dr. Zack Reddy</h4>
                    <p id="specialiation">General Practitioner</p>
                    <hr/>
                    <p><strong>Gender: </strong>Male</p>
                    <p><strong>Age: </strong>29</p>
                    <p><strong>Cell No: </strong>0670598196</p>
                </div>
            </div>
            <div className="addDoctor">
                <div className="doctorImg"></div>
                <h2>Add a Doctor</h2>
                <form>
                    <input type="text" id="nameInput" placeholder="Name"/>
                    <input type="text" id="surnameInput" placeholder="Surname"/>
                    <input type="number" id="ageInput" placeholder="age"/>
                    <input type="text" id="genderInput" placeholder="Gender"/>
                    <input type="number" id="cellInput" placeholder="Celllphone Number"/>
                    <input type="text" id="emailInput" placeholder="Email Address"/>
                    <input type="text" id="password" placeholder="Password"/>
                    <input type="text" id="specialization" placeholder="Specialization"/>
                    <input type="text" id="room" placeholder="Room"/>
                </form>
                <div className="button">+  Add Doctor</div>
            </div>
        </div>
    );
}

export default EditDoctors;