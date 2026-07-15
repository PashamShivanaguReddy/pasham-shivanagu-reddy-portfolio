import React from 'react';

const Experience = () => {
  const experienceItems = [
    {
      title: 'Open Source Contributor',
      company: 'Broadleaf Commerce',
      meta: 'Java, Spring, Hibernate, JPA, Maven | Apr 2026',
      badge: 'Issue #3114',
      badgeLink: 'https://github.com/BroadleafCommerce/BroadleafCommerce/issues/3114',
      points: [
        'Eliminated database deep-scan penalties in sitemap generation by implementing keyset pagination with composite (fullUrl, id) cursors.',
        'Reduced ORM memory footprint and GC pressure by introducing lightweight DTO projections instead of hydrating full entity graphs with eager-loaded relationships.',
        'Delivered production-ready performance improvements while preserving deterministic sitemap output and validating the changes with comprehensive tests.'
      ]
    },
    {
      title: 'Java Backend Developer Intern',
      company: 'Byte Shastra Technology',
      meta: 'React.js, Spring Boot, PostgreSQL, Docker, AWS | Mar 2026 - Apr 2026',
      badge: 'Remote Internship',
      points: [
        'Containerized backend services using Docker and deployed them on AWS EC2 via Docker Hub to improve scalability and deployment efficiency.',
        'Built a Download Test PDF feature for TestWala, enabling dynamic PDF generation after test completion.',
        'Supported cloud deployments and backend enhancements that improved application performance and availability.'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="projects-grid experience-grid">
          {experienceItems.map((item) => (
            <article key={item.title} className="project-card experience-card">
              <div className="project-header">
                <h3>{item.title}</h3>
                {item.badgeLink ? (
                  <a href={item.badgeLink} className="project-year" target="_blank" rel="noopener noreferrer">
                    {item.badge}
                  </a>
                ) : (
                  <span className="project-year">{item.badge}</span>
                )}
              </div>
              <p className="experience-company">{item.company}</p>
              <p className="project-description">{item.meta}</p>
              <ul className="experience-list">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;