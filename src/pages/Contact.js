import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../components/css/Contact.css";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false); // state to track submission

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    emailjs
      .sendForm(
        "service_o3k5tig",       // replace with your EmailJS Service ID
        "template_zwzonv8",     // your EmailJS Template ID
        e.target,
        "YOUR_PUBLIC_KEY"        // replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);     // show success message
          e.target.reset();      // clear the form
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Get in Touch</h2>
      <p className="contact-subheading">
        I’d love to hear from you! Feel free to reach out through email or LinkedIn.
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
              href="https://www.linkedin.com/in/maharshi-danidhariya/"
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
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-send">
            Send Message
          </button>
        </form>

        {/* Success message */}
        {submitted && (
          <p className="success-message" style={{ color: "green", marginTop: "15px" }}>
            Message submitted! Thank you 🤝🏻
          </p>
        )}
      </div>
    </div>
  );
};
