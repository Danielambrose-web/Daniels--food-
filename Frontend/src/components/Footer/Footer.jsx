import React from "react";
import "./Footer.css";
import siteConfig from "../../data/siteConfig";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Main Footer */}
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand flexes">

          <h2 className="footer-logo">
            Daniel Foodies
          </h2>

          <p>
            Fresh food, made simple.
          </p>

          <p className="footer-description">
            Delicious meals made with quality ingredients
            and delivered straight to your doorstep.
          </p>

        </div>


        {/* Company */}
        <div className="company flexes">

          <h3>
            {siteConfig.footer.company.title}
          </h3>

          <div className="footer-links">
            {siteConfig.footer.company.links.map((link) => (
              <p key={link}>{link}</p>
            ))}
          </div>

        </div>


        {/* Support */}
        <div className="support flexes">

          <h3>
            {siteConfig.footer.support.title}
          </h3>

          <div className="footer-links">
            {siteConfig.footer.support.links.map((link) => (
              <p key={link}>{link}</p>
            ))}
          </div>

        </div>


        {/* Legal */}
        <div className="legal flexes">

          <h3>
            {siteConfig.footer.legal.title}
          </h3>

          <div className="footer-links">
            {siteConfig.footer.legal.links.map((link) => (
              <p key={link}>{link}</p>
            ))}
          </div>

        </div>


        {/* Newsletter */}
        <div className="newsletter flexes">

          <h3>
            {siteConfig.footer.newsletter.title}
          </h3>

          <p>
            {siteConfig.footer.newsletter.description}
          </p>

          <div className="newsletter-form">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              Subscribe
            </button>

          </div>

        </div>

      </div>


      {/* Bottom Footer */}
      <div className="footer-bottom">

        <p>
          © 2026 Daniel Foodies. All rights reserved.
        </p>

        <div className="social-links">

          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;