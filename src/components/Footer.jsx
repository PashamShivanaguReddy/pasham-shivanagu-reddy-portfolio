import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="logo">Shiva<span>Reddy</span></div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/pasham-shivanagu-reddy-95725b2a5/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/PashamShivanaguReddy" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="shivapasham55@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
            
            <a href="https://www.instagram.com/shiva_nagureddy/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <p className="copyright">© 2023 Pasham Shivanagu Reddy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;