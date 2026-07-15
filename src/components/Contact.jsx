import React, { useState } from 'react';

const Contact = () => {
  const contactEmail = 'shivapasham55@gmail.com';
  const leetcodeUrl = 'https://leetcode.com/u/shivapasham55/';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+91 7981487677</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>{contactEmail}</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Location</h3>
                <p>Hyderabad, Telangana, 501510</p>
              </div>
            </div>
            <a
              className="contact-item contact-item-link"
              href={leetcodeUrl}
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-icon-image">
                <img
                  className="leetcode-logo"
                  src="https://cdn.simpleicons.org/leetcode/F89F1B"
                  alt="LeetCode"
                />
              </div>
              <div>
                <h3>LeetCode</h3>
                <p>leetcode.com/u/shivapasham55/</p>
              </div>
            </a>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
