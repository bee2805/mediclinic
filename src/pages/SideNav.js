function SideNav() {
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

            <a href="/">
                <div className="logout"></div>
                <p>Log Out</p>
            </a>
        </div> 
    );
}

export default SideNav;