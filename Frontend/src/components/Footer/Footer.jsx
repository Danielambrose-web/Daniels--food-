import React from "react";
import "./Footer.css";
import siteConfig from "../../data/siteConfig";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="company flexes">
        <h2>{siteConfig.footer.company.title}</h2>

        <p>Fresh food, made simple.</p>

        <div>
          {siteConfig.footer.company.links.map((link) => (
            <p key={link}>{link}</p>
          ))}
        </div>
      </div>
      <div className="support flexes">
        <h2>{siteConfig.footer.support.title}</h2>

        <div>
          {siteConfig.footer.support.links.map((link) => (
            <p key={link}>{link}</p>
          ))}
        </div>
      </div>
      <div className="legal flexes">
        <h2>{siteConfig.footer.legal.title}</h2>

        <div>
          {siteConfig.footer.legal.links.map((link) => (
            <p key={link}>{link}</p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
