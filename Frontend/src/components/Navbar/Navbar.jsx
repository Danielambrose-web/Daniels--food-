import  { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import Image from "./logo.png";
import Humburger from "./humburger.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function handleAdd() {
  alert("Item added!");
}

const Navbar = () => {
  const navigate = useNavigate();

  // Controls the active navigation link
  const [navLinks, setNavlinks] = useState("home");

  // Controls whether mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // Open / close mobile menu
  function handleToggle() {
    setMenuOpen((prev) => !prev);
  }

  // Select a link and close mobile menu
  function handleNavClick(link) {
    setNavlinks(link);
    setMenuOpen(false);
  }

  return (
    <>
      <nav className="Navbar">
        {/* Logo */}
        <img src={Image} alt="Restaurant Logo" className="logo" />

        {/* Desktop Navigation */}
        <ul className="nav-links">
          <Link
            to="/"
            onClick={() => handleNavClick("home")}
            className={navLinks === "home" ? "active" : ""}
          >
            Home
          </Link>

          <Link
            to="/menu"
            onClick={() => handleNavClick("menu")}
            className={navLinks === "menu" ? "active" : ""}
          >
            Menu
          </Link>

          <Link
            to="/about"
            onClick={() => handleNavClick("about")}
            className={navLinks === "about" ? "active" : ""}
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => handleNavClick("contact")}
            className={navLinks === "contact" ? "active" : ""}
          >
            {" "}
            Contact
          </Link>
        </ul>

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
          <Link to ="/"
            onClick={() => handleNavClick("home")}
            className={navLinks === "home" ? "active" : ""}
          >
            Home
          </Link>

          <Link to='/menu'
            onClick={() => handleNavClick("menu")}
            className={navLinks === "menu" ? "active" : ""}
          >
            Menu
          </Link>

          <Link
          to='/about'
            onClick={() => handleNavClick("about")}
            className={navLinks === "about" ? "active" : ""}
          >
            About
          </Link>

          <Link 
          to="/contact"
            onClick={() => handleNavClick("contact")}
            className={navLinks === "contact" ? "active" : ""}
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
