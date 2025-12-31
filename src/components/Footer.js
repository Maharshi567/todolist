import React from "react";
import "./css/Footer.css"; // Make sure the path is correct

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>Mytodolist</h3>
          <p>Organize your tasks elegantly and efficiently.</p>
        </div>

        <div className="footer-links">
          <h5>Quick Links</h5>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Mytodolist | Created by Maharshi
          Danidhariya
        </p>
      </div>
    </footer>
  );
};
