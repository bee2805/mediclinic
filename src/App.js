import React from "react";
// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
// import EditLanding from "./pages/EditLanding";
// import EditDoctors from "./pages/EditDoctors";
// import EditPatients from "./pages/EditPatients";
// React Routing
import {Routes, Route} from 'react-router';
import SideNav from "./pages/SideNav";


function App() {
  return (
    <div className="App">
      {/* <SideNav/> */}
      <Routes>
        <Route path='/' element={<Login/>}/> 
        <Route path='Register.js' element={<Register/>}/>
        {/* <Route path='/' element={<EditLanding/>}/>
        <Route path='/EditDoctors' element={<EditDoctors/>}/>
        <Route path='/EditPatients' element={<EditPatients/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
