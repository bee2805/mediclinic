function SideNav() {
    return (
        <div className="sideNav">
            <div className="navLogo"></div>
            <a href="/">
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

            <div className="logout"></div>
            <p>Log Out</p>
        </div> 
    );
}

export default SideNav;