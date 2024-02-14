import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

const Navbar = () => {
  return (
    
      <nav className="navwrapper">
        <ul className="navegador" >
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
   
  );
};

export default Navbar;
