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
            <div className="patients"></div>
            <p>Patients</p>
            <div className="logout"></div>
            <p>Log Out</p>
        </div> 
    );
}

export default SideNav;