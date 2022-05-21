import React from "react";
// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
// React Routing
import {Routes, Route} from 'react-router';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='Register.js' element={<Register/>}/>
        <Route path='Dashboard.js' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
