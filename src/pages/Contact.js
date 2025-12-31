import React from "react";
import "../components/css/Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Get in Touch</h2>
      <p className="contact-subheading">
        I’d love to hear from you! Feel free to reach out through email or
        LinkedIn.
      </p>

      <div className="contact-details">
        <div className="contact-card">
          <h4>Email</h4>
          <p>maharshidanidhariya001@gmail.com</p>
        </div>
        <div className="contact-card">
          <h4>LinkedIn</h4>
          <p>
            <a
              href="https://www.linkedin.com/in/maharshidanidhariya/"
              target="_blank"
              rel="noreferrer"
            >
              Maharshi Danidhariya
            </a>
          </p>
        </div>
      </div>

      <div className="contact-form-container">
        <h3>Send me a message</h3>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="btn-send">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
