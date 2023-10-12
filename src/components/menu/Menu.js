import './Menu.css';
import { BiMenu, BiX } from "react-icons/bi";
import React, { useState } from 'react';


export default function Menu() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  
  return (
    <header className="nav-container">
      <nav className="nav-content">
        <div className="logo">
          <span> Gabriel Ronny </span>
        </div>
        <ul className={`nav-list ${menuOpen ? 'active': ''}`}>
          <li><a href="#">Quem Sou</a></li>
          <li><a href="#">Seviços</a></li>
          <li><a href="#">Feedbacks</a></li>
          <li><a href="#">Contato</a></li>
          {/* <li><a href="../../assets/files/cv-gabriel-ronny.pdf" download>Baixar CV</a></li> */}
        </ul>
        <button 
          className={`nav-button ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          {
            menuOpen ? <BiX size="32" color="#FFF"/> : <BiMenu  size="32" color="#FFF"/>
          }      
        </button>
      </nav>
    </header>
  );
}

