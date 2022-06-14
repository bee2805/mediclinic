import React from "react";
// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import EditLanding from "./pages/EditLanding";
import EditDoctors from "./pages/EditDoctors";
import EditPatients from "./pages/EditPatients";
// React Routing
import {Routes, Route} from 'react-router';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/> 
        <Route path='/Register' element={<Register/>}/>
        <Route path='/EditLanding' element={<EditLanding/>}/>
        <Route path='/EditDoctors' element={<EditDoctors/>}/>
        <Route path='/EditPatients' element={<EditPatients/>}/>
      </Routes>
    </div>
  );
}

export default App;
