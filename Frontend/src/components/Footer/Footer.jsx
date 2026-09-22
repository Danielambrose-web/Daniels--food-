import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert("Subscribed!");
      setEmail("");
    }
  };

  return (
    <footer className="footer">
      {/* Main Footer Container */}
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-col footer-brand">
          <Link to="/" aria-label="Home">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="footer-logo-img"
            />
          </Link>
          <p className="footer-tagline">Fresh food, made simple.</p>
        </div>

        {/* Company */}
        <div className="footer-col footer-company">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#press">Press</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-col footer-support">
          <h3 className="footer-heading">Support</h3>
          <ul className="footer-links">
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#delivery">Delivery Info</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-col footer-legal">
          <h3 className="footer-heading">Legal</h3>
          <ul className="footer-links">
            <li><a href="#terms">Terms</a></li>
            <li><a href="#privacy">Privacy</a></li>
          </ul>
        </div>

        {/* Stay in the loop / Newsletter */}
        <div className="footer-col footer-newsletter">
          <h3 className="footer-heading">Stay in the loop</h3>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2026 Food Business. All rights reserved.
        </p>

        <div className="footer-socials social-links">
          <a href="#instagram">Instagram</a>
          <a href="#twitter">Twitter</a>
          <a href="#facebook">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
