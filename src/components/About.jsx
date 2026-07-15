import React from 'react';

const About = () => {
  return ( 
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I&apos;m <strong>Pasham Shivanagu Reddy</strong>, a final-year Computer Science Engineering student and an aspiring{' '}
              <strong>Java Backend Developer</strong> with a passion for building scalable and efficient backend applications.
            </p>

            <p>
              I have hands-on experience developing RESTful APIs and full-stack applications using{' '}
              <strong>Java, Spring Boot, React.js, JavaScript, PostgreSQL, MongoDB, Docker, AWS, Git, and GitHub</strong>.
              Through my internship, I worked on real-world software development, collaborated in an Agile environment, and gained
              practical experience in writing clean, maintainable, and production-ready code.
            </p>

            <p>
              Beyond academics, I&apos;m an <strong>active Open Source Contributor</strong>, contributing to real-world Java projects
              by fixing issues and submitting pull requests. I have also solved <strong>300+ Data Structures &amp; Algorithms problems</strong>
              and hold a <strong>1500+ LeetCode rating</strong>, strengthening my problem-solving and coding skills.
            </p>

            <p>
              I&apos;m always eager to learn new technologies, contribute to impactful products, and grow as a software engineer by
              building reliable, scalable, and user-focused applications.

            </p>
            
            <div className="education">
              <h3>Education</h3>
              <div className="education-item">
                <h4>B.Tech in Computer Science and Engineering</h4>
                <p>Sree Dattha Institute of Engineering and Science, Hyderabad, Telangana</p>
                <p>2023 - Present</p>
                <p>CGPA: 8.54</p>
              </div>
            </div>
          </div>
          
          <div className="info-card">
            <h3>Personal Info</h3>
            <div className="info-item">
              <span className="info-label keyword">public class</span>
              <span className="info-value">Developer</span>
              <span className="info-value">{" {"}</span>
            </div>
            <div className="info-item indent-1">
              <span className="info-label keyword">public</span>
              <span className="info-label keyword">static void</span>
              <span className="info-label">main</span>
              <span className="info-value">(String[] args)</span>
              <span className="info-value">{" {"}</span>
            </div>
            <div className="info-item indent-2">
              <span className="info-label variable">String</span>
              <span className="info-label">name</span>
              <span className="info-value">=</span>
              <span className="info-value string">"Pasham Shivanagu Reddy"</span>
              <span className="info-value">;</span>
            </div>
            <div className="info-item indent-2">
              <span className="info-label variable">String</span>
              <span className="info-label">education</span>
              <span className="info-value">=</span>
              <span className="info-value string">"B.Tech CSE"</span>
              <span className="info-value">;</span>
            </div>
            <div className="info-item indent-2">
              <span className="info-label variable">String</span>
              <span className="info-label">institute</span>
              <span className="info-value">=</span>
              <span className="info-value string">"Sree Dattha Institute of Engineering and Science"</span>
              <span className="info-value">;</span>
            </div>
            <div className="info-item indent-2">
              <span className="info-label variable">String[]</span>
              <span className="info-label">skills</span>
              <span className="info-value">=</span>
              <span className="info-value">{"{"}</span>
            </div>
            <div className="info-item indent-3">
              <span className="info-value string">"Web Development"</span>
              <span className="info-value">,</span>
            </div>
            <div className="info-item indent-3">
              <span className="info-value string">"Java"</span>
              <span className="info-value">,</span>
            </div>
            <div className="info-item indent-3">
              <span className="info-value string">"DSA"</span>
              <span className="info-value">,</span>
            </div>
            <div className="info-item indent-3">
              <span className="info-value string">"Problem Solving"</span>
            </div>
            <div className="info-item indent-2">
              <span className="info-value">{"}"}</span>
              <span className="info-value">;</span>
            </div>
            <div className="info-item indent-2">
              <span className="info-label variable">boolean</span>
              <span className="info-label">hardworker</span>
              <span className="info-value">=</span>
              <span className="info-label keyword">true</span>
              <span className="info-value">;</span>
            </div>
            <div className="info-item indent-2">
              <span className="info-label variable">boolean</span>
              <span className="info-label">quicklearner</span>
              <span className="info-value">=</span>
              <span className="info-label keyword">true</span>
              <span className="info-value">;</span>
            </div>
            <div className="info-item indent-2">
              <span className="info-label variable">double</span>
              <span className="info-label">cgpa</span>
              <span className="info-value">=</span>
              <span className="info-value number">8.54</span>
              <span className="info-value">;</span>
            </div>
            <div className="info-item indent-1">
              <span className="info-value">{"}"}</span>
            </div>
            <div className="info-item">
              <span className="info-value">{"}"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
