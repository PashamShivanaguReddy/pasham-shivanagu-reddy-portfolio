import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Email Assistant",
      year: "2025",
      description: "Built a Chrome Extension that generates context-aware email replies inside Gmail UI and connects to a Spring Boot backend for real-time AI suggestions.",
      technologies: ["React.js", "Java", "Spring Boot", "Chrome Extension"],
      link: "https://github.com/PashamShivanaguReddy/Smart_Email_Assistant_BE",
      linkLabel: "Source Code",
    },
    {
      id: 2,
      title: "Banking Management System",
      year: "2025",
      description: "Built a secure banking application with REST APIs for account creation, deposits, withdrawals, fund transfers, balance inquiries, and transaction history using layered architecture.",

      technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "H2"],
      link: "https://github.com/PashamShivanaguReddy/BankingApp",
      linkLabel: "Source Code",

    },
    {
      id: 3,
      title: "Weather & AQI Prediction App",
      year: "2024-2025",
      description: "Built an interactive web application for predicting air quality index and weather using real-time data and ML models with data visualizations for temperature, humidity, and pollution metrics.",
      technologies: ["Python", "scikit-learn", "ML"],
      link: "https://github.com/PashamShivanaguReddy/air-quality-predictor",
      linkLabel: "Source Code",
    },
    {
      id: 4,
      title: "Portfolio Website",
      year: "2025",
      description: "Developed the portfolio site to showcase coding projects, technical skills, achievements, and contact details with a responsive user interface.",
      technologies: ["HTML", "CSS", "JavaScript", "React.js"],
      link: "https://pasham-shivanagu-reddy-portfolio-1i.vercel.app/#projects",
      linkLabel: "Live Demo",
    },
    {
      id: 5,
      title: "Weather App",
      year: "2025",
      description: "Developed a real-time weather app displaying temperature, humidity, and wind speed using API calls. Designed a user-friendly interface for quick weather lookups and location search.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      link: "https://wheather-app-vm1c.vercel.app/",
      linkLabel: "Live Demo",
    },
    {
      id: 6,
      title: "Calendar App",
      year: "2025",
      description: "Interactive calendar application with scheduling functionality and event management features.",
      technologies: ["React", "JavaScript", "CSS"],
      link: "https://calendar-app-sage-gamma.vercel.app/",
      linkLabel: "Live Demo",
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-year">{project.year}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              {project.link ? (
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  {project.linkLabel || 'View Project'} <i className="fas fa-arrow-right"></i>
                </a>
              ) : (
                <span className="project-link" aria-disabled="true">Details coming soon</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
