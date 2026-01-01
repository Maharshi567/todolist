import React, { useEffect, useState } from "react";
import "../components/css/Contact.css";

export const Contact = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
const [isAdmin, setIsAdmin] = useState(false);
const [adminName, setAdminName] = useState("");
const [adminPassword, setAdminPassword] = useState("");
const [selectedFeedbacks, setSelectedFeedbacks] = useState([]);
const [adminMessage, setAdminMessage] = useState("");
const handleAdminLogin = (e) => {
  e.preventDefault();

  if (adminName === "Maharshi" && adminPassword === "Maharshi@07") {
    setIsAdmin(true);
    setAdminMessage("✅ Admin login successful");
  } else {
    setAdminMessage("❌ Invalid admin credentials");
  }
};

const toggleSelectFeedback = (index) => {
  setSelectedFeedbacks((prev) =>
    prev.includes(index)
      ? prev.filter((i) => i !== index)
      : [...prev, index]
  );
};

const deleteSelectedFeedbacks = () => {
  const updated = feedbacks.filter(
    (_, index) => !selectedFeedbacks.includes(index)
  );

  setFeedbacks(updated);
  localStorage.setItem("feedbacks", JSON.stringify(updated));
  setSelectedFeedbacks([]);
  setAdminMessage("🗑️ Selected feedbacks deleted successfully");
};


  // Load feedbacks from localStorage on first render
  useEffect(() => {
    const storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks"));
    if (storedFeedbacks) {
      setFeedbacks(storedFeedbacks);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const newFeedback = {
      name: form.name.value,
      message: form.message.value,
      time: new Date().toLocaleString(),
    };

    const updatedFeedbacks = [newFeedback, ...feedbacks];

    setFeedbacks(updatedFeedbacks);
    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks));

    setSubmitted(true);
    form.reset();

    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Get in Touch</h2>
      <p className="contact-subheading">
        I’d love to hear from you! Feel free to reach out through email or LinkedIn.
      </p>

      {/* Contact Details (UNCHANGED) */}
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

      {/* Message Form */}
      <div className="contact-form-container">
        <h3>Send me a message</h3>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows="5" required></textarea>
          </div>

          <button type="submit" className="btn-send">
            Send Message
          </button>
        </form>

        {submitted && (
          <p
            className="success-message"
            style={{ color: "green", marginTop: "15px" }}
          >
            Feedback saved successfully 🤝🏻
          </p>
        )}

        {/* ✅ Feedback Section (ADDED BELOW FORM) */}
<div className="feedback-section premium-feedback">
  <h3 className="feedback-title">What People Are Saying</h3>

  {feedbacks.length === 0 && (
    <p className="feedback-empty">No feedback yet. Be the first one!</p>
  )}

  {feedbacks.map((fb, index) => (
    <div key={index} className="feedback-card premium-card">
      {isAdmin && (
        <input
          type="checkbox"
          className="feedback-checkbox"
          checked={selectedFeedbacks.includes(index)}
          onChange={() => toggleSelectFeedback(index)}
        />
      )}

      <div className="feedback-header">
        <h4 className="feedback-name">{fb.name}</h4>
        <span className="feedback-time">{fb.time}</span>
      </div>
      <p className="feedback-message">{fb.message}</p>
    </div>
  ))}

  {/* Manage Feedback Button */}
  {!showAdmin && (
    <div className="manage-feedback-btn-wrapper">
      <button
        className="btn-send"
        onClick={() => setShowAdmin(true)}
      >
        Manage Feedbacks
      </button>
    </div>
  )}

  {/* Admin Login */}
  {showAdmin && !isAdmin && (
    <form className="admin-form" onSubmit={handleAdminLogin}>
      <h4>Admin Login</h4>

      <input
        type="text"
        placeholder="Admin Name"
        value={adminName}
        onChange={(e) => setAdminName(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={adminPassword}
        onChange={(e) => setAdminPassword(e.target.value)}
        required
      />

      <button type="submit" className="btn-send">
        Login
      </button>

      {adminMessage && <p className="admin-message">{adminMessage}</p>}
    </form>
  )}

  {/* Admin Actions */}
  {isAdmin && (
    <div className="admin-actions">
      <button
        className="btn-delete"
        onClick={deleteSelectedFeedbacks}
        disabled={selectedFeedbacks.length === 0}
      >
        Delete Selected Feedbacks
      </button>

      {adminMessage && <p className="admin-message">{adminMessage}</p>}
    </div>
  )}
</div>


      </div>
    </div>
  );
};
