import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);
  
  const roles = ["Computer Science Student", "Java Backend Developer", "Open Source Contributor"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 500);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [roles.length]);
  
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <p className="hero-eyebrow">Hyderabad, Telangana</p>
          <h1>Hi, I'm <span>Pasham Shivanagu Reddy</span></h1>
          <h2 className={fade ? 'fade-in' : 'fade-out'}>
            <span className="role-text">{roles[roleIndex]}</span>
          </h2>
          <p>I build reliable web applications and backend systems with Java, Spring Boot, React, SQL, and a problem-solving mindset.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">View My Work</a>
            <a href="https://drive.google.com/file/d/1GTRCle3x-WtOzm58Tczfqt-QxwG1fRYn/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Open Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
