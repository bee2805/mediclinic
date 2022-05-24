import React from "react";
// Pages
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import EditLanding from "./pages/EditLanding";
import EditDoctors from "./pages/EditDoctors"
// React Routing
import {Routes, Route} from 'react-router';
import SideNav from "./pages/SideNav";


function App() {
  return (
    <div className="App">
      <SideNav/>
      <Routes>
        {/* <Route path='/' element={<Login/>}/> */}
        {/* <Route path='Register.js' element={<Register/>}/> */}
        <Route path='/' element={<EditLanding/>}/>
        <Route path='/EditDoctors' element={<EditDoctors/>}/>
      </Routes>
    </div>
  );
}

export default App;
