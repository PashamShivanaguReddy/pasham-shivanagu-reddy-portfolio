import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [counts, setCounts] = useState({
    leetcode: 0,
    hackathons: 0,
    certifications: 0,
    openSource: 0
  });
  
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observedSection = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (observedSection) {
      observer.observe(observedSection);
    }
    
    return () => {
      if (observedSection) {
        observer.unobserve(observedSection);
      }
    };
  }, []);
  
  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // ms
      const steps = 60;
      const incrementLeetcode = 1500 / steps;
      const incrementHackathons = 2 / steps;
      const incrementCertifications = 4 / steps;
      const incrementOpenSource = 1 / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep += 1;
        setCounts({
          leetcode: Math.min(1500, Math.round(incrementLeetcode * currentStep)),
          hackathons: Math.min(2, Math.round(incrementHackathons * currentStep)),
          certifications: Math.min(4, Math.round(incrementCertifications * currentStep)),
          openSource: Math.min(1, Math.round(incrementOpenSource * currentStep))
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
      category: "Backend & APIs",
      items: [
        { name: "Spring Boot", level: 85, icon: "fas fa-leaf" },
        { name: "Spring Security", level: 80, icon: "fas fa-shield-alt" },
        { name: "Hibernate / JPA", level: 80, icon: "fas fa-database" },
        { name: "REST APIs", level: 82, icon: "fas fa-network-wired" },
      ]
    },
    {
      category: "Languages",
      items: [
        { name: "Java", level: 90, icon: "fab fa-java" },
        { name: "JavaScript", level: 75, icon: "fab fa-node-js" },
        { name: "SQL", level: 78, icon: "fas fa-database" },
        { name: "C", level: 65, icon: "fas fa-code" },
      ]
    },
    {
      category: "Databases & Cloud",
      items: [
        { name: "H2 Database", level: 78, icon: "fas fa-database" },
        { name: "MongoDB", level: 68, icon: "fas fa-leaf" },
        { name: "PostgreSQL", level: 72, icon: "fas fa-server" },
        { name: "AWS / Docker", level: 72, icon: "fab fa-aws" },
      ]
    },
    {
      category: "Tools & Core CS",
      items: [
        { name: "Git", level: 80, icon: "fab fa-git-alt" },
        { name: "GitHub", level: 82, icon: "fab fa-github" },
        { name: "Postman", level: 76, icon: "fas fa-rocket" },
        { name: "Maven", level: 74, icon: "fas fa-cube" },
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
          <h3 className="section-title" style={{ fontSize: '2rem', marginBottom: '20px' }}>Resume Highlights</h3>
          <div className="achievements-grid">
            <div className="achievement-item">
              <div className="achievement-icon">
                <img
                  className="leetcode-logo"
                  src="https://cdn.simpleicons.org/leetcode/F89F1B"
                  alt="LeetCode"
                />
              </div>
              <div className="achievement-number">300+</div>
              <div className="achievement-label">Problems Solved</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">
                <img
                  className="leetcode-logo"
                  src="https://cdn.simpleicons.org/leetcode/F89F1B"
                  alt="LeetCode"
                />
              </div>
              <div className="achievement-number">{counts.leetcode}+</div>
              <div className="achievement-label">LeetCode Rating</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="achievement-number">{counts.hackathons}</div>
              <div className="achievement-label">Hackathons Participated</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <div className="achievement-number">{counts.certifications}</div>
              <div className="achievement-label">Certifications</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">
                <i className="fas fa-code-branch"></i>
              </div>
              <div className="achievement-number">{counts.openSource}</div>
              <div className="achievement-label">Open Source Contributions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

