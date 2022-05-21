import React from "react";

function SideNav() {
    return(
        <div className="sideNav">
            <div className="navLogo"></div>
            <div className="home"></div>
            <p>Home</p>
            <div className="doctors"></div>
            <p>Doctors</p>
            <div className="patients"></div>
            <p>Patients</p>
            <div className="logout"></div>
            <p>Log Out</p>
        </div>
    )
}

export default SideNav;