import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="logo">Pasham<span>.</span></div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/pasham-shivanagu-reddy-95725b2a5/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://leetcode.com/u/shivapasham55/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <img className="social-icon-img" src="https://cdn.simpleicons.org/leetcode/F89F1B" alt="LeetCode" />
            </a>
            <a href="https://github.com/PashamShivanaguReddy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:shivapasham55@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <p className="copyright">Developed with ❤️ by Pasham Shivanagu Reddy.</p>
      </div>
    </footer>
  );
};

export default Footer;
