import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="#home" className="logo">Pasham<span>.</span></a>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
          
          <button className="menu-btn" onClick={toggleMenu}>
            <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;