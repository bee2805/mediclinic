import React from "react";

function EditPatients() {
    return (
        <div className="editPatients">
            <div className="patientsList">
                <h1>Patients</h1>
                <div className="patientCard">
                    <div className="patientProfile1"></div>
                    <h4>Kelly Pedro</h4>
                    <p id="medicalAidNo">345432948</p>
                    <hr/>
                    <p><strong>Gender: </strong>Female</p>
                    <p><strong>Age: </strong>21</p>
                    <p><strong>Cell No: </strong>0670598196</p>
                </div>

                <div className="patientCard">
                    <div className="patientProfile2"></div>
                    <h4>Demika Muir</h4>
                    <p id="medicalAidNo">573948736</p>
                    <hr/>
                    <p><strong>Gender: </strong>Female</p>
                    <p><strong>Age: </strong>19</p>
                    <p><strong>Cell No: </strong>0678945736</p>
                </div>

                <div className="patientCard">
                    <div className="patientProfile3"></div>
                    <h4>Jessica vd Walt</h4>
                    <p id="medicalAidNo">749384754</p>
                    <hr/>
                    <p><strong>Gender: </strong>Female</p>
                    <p><strong>Age: </strong>40</p>
                    <p><strong>Cell No: </strong>0670598196</p>
                </div>

                <div className="patientCard">
                    <div className="patientProfile4"></div>
                    <h4>Ruan vd Heever</h4>
                    <p id="medicalAidNo">674938478</p>
                    <hr/>
                    <p><strong>Gender: </strong>Male</p>
                    <p><strong>Age: </strong>24</p>
                    <p><strong>Cell No: </strong>0670598196</p>
                </div>

                <div className="patientCard">
                    <div className="patientProfile5"></div>
                    <h4>Craig Sterley</h4>
                    <p id="medicalAidNo">573948572</p>
                    <hr/>
                    <p><strong>Gender: </strong>Male</p>
                    <p><strong>Age: </strong>49</p>
                    <p><strong>Cell No: </strong>0670598196</p>
                </div>

                <div className="patientCard">
                    <div className="patientProfile6"></div>
                    <h4>Ian Potgieter</h4>
                    <p id="medicalAidNo">960594837</p>
                    <hr/>
                    <p><strong>Gender: </strong>Male</p>
                    <p><strong>Age: </strong>35</p>
                    <p><strong>Cell No: </strong>0670598196</p>
                </div>

                <div className="patientCard">
                    <div className="patientProfile7"></div>
                    <h4>Mila Muir</h4>
                    <p id="medicalAidNo">573846104</p>
                    <hr/>
                    <p><strong>Gender: </strong>Female</p>
                    <p><strong>Age: </strong>1</p>
                    <p><strong>Cell No: </strong>0670598196</p>
                </div>
            </div>
            <div className="addPatient">
                <div className="patientImg"></div>
                <h2>Add a Patient</h2>
                <form>
                    <input type="text" id="nameInput" placeholder="Name"/>
                    <input type="text" id="surnameInput" placeholder="Surname"/>
                    <input type="number" id="ageInput" placeholder="age"/>
                    <input type="text" id="genderInput" placeholder="Gender"/>
                    <input type="number" id="cellInput" placeholder="Celllphone Number"/>
                    <input type="text" id="medicalAidNoInput" placeholder="Medical Aid Number"/>
                    <input type="text" id="emailInput" placeholder="Email Address"/>
                    <input type="text" id="password" placeholder="Password"/>
                </form>
                <div className="button">+  Add Patient</div>
            </div>
        </div>
    );
}

export default EditPatients;