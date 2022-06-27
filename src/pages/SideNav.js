import React, { useEffect} from "react";
import {NavLink, useNavigate} from 'react-router-dom';

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
            <NavLink to="/EditLanding">
                <div className="home"></div>
                <p className="underline">Home</p>
            </NavLink>
            <NavLink to="/EditDoctors">
                <div className="doctors"></div>
                <p>Doctors</p>
            </NavLink>
            <NavLink to="/EditPatients">
                <div className="patients"></div>
                <p>Patients</p>
            </NavLink>

            <div className="logOut" onClick={setLogout}>
                <div className="logout"></div>
                <p>Log Out</p>
            </div>
        </div> 
    );
}

export default SideNav;