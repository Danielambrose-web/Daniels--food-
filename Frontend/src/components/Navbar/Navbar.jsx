import { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Image from "./logo.png";
import Humburger from "./humburger.png";
import Button from "../Button/Button";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  // Controls whether mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  function handleToggle() {
    setMenuOpen((prev) => !prev);
  }

  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <>
      <nav className="Navbar">
        {/* Logo */}
        <Link to="/" onClick={handleNavClick}>
          <img src={Image} alt="Restaurant Logo" className="logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <Link
            to="/"
            className={pathname === "/" ? "active" : ""}
          >
            Home
          </Link>

          <Link
            to="/menu"
            className={pathname === "/menu" ? "active" : ""}
          >
            Menu
          </Link>

          <Link
            to="/about"
            className={pathname === "/about" ? "active" : ""}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </div>

        {/* Desktop Order Button */}
        <div className="nav-button">
          <Button label="Cart" variant="secondary" onClick={() => navigate("/cart")} />
        </div>

        {/* Hamburger */}
        <div className="hamburger-menu" onClick={handleToggle}>
          <img
            src={Humburger}
            alt="Open navigation menu"
            className="hamburger-icon"
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link
            to="/"
            onClick={handleNavClick}
            className={pathname === "/" ? "active" : ""}
          >
            Home
          </Link>

          <Link
            to="/menu"
            onClick={handleNavClick}
            className={pathname === "/menu" ? "active" : ""}
          >
            Menu
          </Link>

          <Link
            to="/about"
            onClick={handleNavClick}
            className={pathname === "/about" ? "active" : ""}
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={handleNavClick}
            className={pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>

          <div className="mobile-order-button">
            <Button label="Order Now" variant="secondary" onClick={() => navigate("/cart")} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
