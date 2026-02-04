import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [counts, setCounts] = useState({
    hackathons: 0,
    leetcode: 0,
    projects: 0
  });
  
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // ms
      const steps = 60;
      const incrementHackathons = 2 / steps;
      const incrementLeetcode = 120 / steps;
      const incrementProjects = 5 / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep += 1;
        setCounts({
          hackathons: Math.min(2, Math.round(incrementHackathons * currentStep)),
          leetcode: Math.min(120, Math.round(incrementLeetcode * currentStep)),
          projects: Math.min(4, Math.round(incrementProjects * currentStep))
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }
  }, [isVisible]);
  
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", level: 90, icon: "fab fa-html5" },
        { name: "CSS3", level: 85, icon: "fab fa-css3-alt" },
        { name: "JavaScript", level: 80, icon: "fab fa-js-square" },
        { name: "React", level: 75, icon: "fab fa-react" },
        
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Spring Boot", level: 70, icon: "fas fa-leaf" },
        { name: "MySQL", level: 70, icon: "fas fa-database" },
        { name: "MongoDB", level: 65, icon: "fas fa-envira" },
        { name: "Restful APIs", level: 60, icon: "fas fa-network-wired" },
      ]
    },

    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript", level: 70, icon: "fab fa-node-js" },
        { name: "Python", level: 70, icon: "fab fa-python" },
        { name: "Java", level: 85, icon: "fab fa-java" },
        { name: "C", level: 65, icon: "fas fa-code" }
        
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", level: 75, icon: "fab fa-git-alt" },
        { name: "GitHub", level: 80, icon: "fab fa-github" },
        { name: "VS Code", level: 85, icon: "fas fa-code" },
        {name:"Postman", level:70, icon:"fas fa-rocket" },
        {name:"Docker", level:60, icon:"fab fa-docker" }
       
      ]
    }
  ];

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Skills & Achievements</h2>
        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skill-category">
              <h3>{skillCategory.category}</h3>
              {skillCategory.items.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-icon">
                    <i className={skill.icon}></i>
                  </div>
                  <div className="skill-content">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        
        <div className="achievements">
          <h3 className="section-title" style={{ fontSize: '2rem', marginBottom: '20px' }}>Achievements</h3>
          <div className="achievements-grid">
            <div className="achievement-item">
              <div className="achievement-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="achievement-number">{counts.hackathons}</div>
              <div className="achievement-label">Hackathons Participated</div>
              
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="achievement-number">{counts.leetcode}+</div>
              <div className="achievement-label">LeetCode Problems Solved</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <div className="achievement-number">{counts.projects}+</div>
              <div className="achievement-label">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

