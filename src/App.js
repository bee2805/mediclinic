import React from "react";
// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
// React Routing
import {Routes, Route} from 'react-router';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
