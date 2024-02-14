import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Contacto from "./Contacto";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"; // Importa el archivo de estilos CSS

const App = () => {
  return (
    <Router>
      <div className="app-container"> {/* Nuevo contenedor para centrar */}
        <Navbar />
        <div className="content-container"> {/* Nuevo contenedor para centrar el contenido */}
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



