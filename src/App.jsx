import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Contacto from "./Contacto";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"; 

const App = () => {
  return (
    <Router>
      <div className="app-container"> 
        <Navbar />
        <div className="content-container"> 
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;



