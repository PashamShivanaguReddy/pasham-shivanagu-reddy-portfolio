import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);
  
  const roles = ["A Student", "A Frontend Web Developer", "Passionate Coder"];
  
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
          <h1>I am <span>Pasham Shivanagu Reddy</span></h1>
          <h2 className={fade ? 'fade-in' : 'fade-out'}>
            <span className="role-text">{roles[roleIndex]}</span>
          </h2>
          <p>A passionate and creative developer with a knack for building beautiful and functional web applications.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">View My Work</a>
            <a href="https://drive.google.com/file/d/1pqKuLjYrjBZkDvJBC-VSm32lWTAz3VuR/view?usp=drivesdk" download className="btn btn-outline">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
