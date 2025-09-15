import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Weather & AQI Prediction App",
      year: "2024-2025",
      description: "Built an interactive web application for predicting air quality index and weather using real-time data and ML models. Integrated data visualization for temperature, humidity, and pollution metrics.",
      technologies: ["Python", "scikit-learn", "ML"],
      link: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      year: "2025",
      description: "Developed a personal portfolio site to showcase coding projects, technical skills, and achievements with a contact form. Implemented responsive design and dynamic user interface components.",
      technologies: ["HTML", "CSS", "JavaScript", "React.js"],
      link: "#",
    },
    {
      id: 3,
      title: "Weather App",
      year: "2025",
      description: "Developed a real-time weather app displaying temperature, humidity, and wind speed using API calls. Designed a user-friendly interface for quick weather lookups and location search.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      link: "https://wheather-app-vm1c.vercel.app/",
    },
    {
      id: 4,
      title: "Calendar App",
      year: "2025",
      description: "Interactive calendar application with scheduling functionality and event management features.",
      technologies: ["React", "JavaScript", "CSS"],
      link: "https://calendar-app-sage-gamma.vercel.app/",
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
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;