import React, { useEffect} from "react";
import {useNavigate} from 'react-router-dom';

function SideNav() {

    const activeUser = sessionStorage.getItem('activeUser');

    const navigate = useNavigate();

    useEffect(() =>{
        const userSession = sessionStorage.getItem('activeUser');
        if(userSession === '' || userSession === null){
            navigate('/');
        }
    });

    const setLogout = () => {
        sessionStorage.clear();
        navigate('/');
    }

    return (
        <div className="sideNav">
            <div className="navLogo"></div>
            <a href="/EditLanding">
                <div className="home"></div>
                <p>Home</p>
            </a>
            <a href="/EditDoctors">
                <div className="doctors"></div>
                <p>Doctors</p>
            </a>
            <a href="/EditPatients">
                <div className="patients"></div>
                <p>Patients</p>
            </a>

            <div className="logOut" onClick={setLogout}>
                <div className="logout"></div>
                <p>Log Out</p>
            </div>
        </div> 
    );
}

export default SideNav;