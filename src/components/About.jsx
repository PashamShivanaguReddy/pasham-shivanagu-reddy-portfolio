import React from 'react';

const About = () => {
  return ( 
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm Pasham Shivanagu Reddy, a CSE student at Sree Dattha Institute of Engineering and Science 
              with a strong passion for technology and continuous learning. I'm interested in web development, 
              Java, DSA, and problem-solving, and I enjoy applying these skills to build practical solutions.
            </p>
            
            <div className="education">
              <h3>Education</h3>
              <div className="education-item">
                <h4>B.Tech in Computer Science and Engineering</h4>
                <p>Sree Dattha Institute of Engineering and Science</p>
                <p>2023 - 2027</p>
                <p>CGPA: 8.4</p>
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
              <span className="info-value number">8.46</span>
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
