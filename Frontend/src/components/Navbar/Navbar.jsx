import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Image from "./logo.png";
import Humburger from "./humburger.png";
import Button from "../Button/Button";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const { cart = [] } = useCart() || {};
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuClosing(true);
        window.clearTimeout(closeTimer.current);
        closeTimer.current = window.setTimeout(() => {
          setMenuOpen(false);
          setMenuClosing(false);
        }, 220);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  function openDrawer() {
    window.clearTimeout(closeTimer.current);
    setMenuClosing(false);
    setMenuOpen(true);
  }

  function closeDrawer(destination) {
    if (!menuOpen) {
      if (destination) navigate(destination);
      return;
    }
    setMenuClosing(true);
    closeTimer.current = window.setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
      if (destination) navigate(destination);
    }, 220);
  }

  function handleDrawerNavigation(event, destination) {
    event.preventDefault();
    closeDrawer(destination);
  }

  function handleNavClick() {
    if (menuOpen) {
      closeDrawer();
    }
  }

  return (
    <>
      <nav className={`Navbar${isScrolled ? " Navbar--scrolled" : ""}`}>
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
          <div className="cart-indicator-wrap">
            <Button label="Cart" variant="secondary" onClick={() => navigate("/cart")} />
            {cart?.length > 0 && <span className="cart-indicator-dot" aria-label="Cart has items" />}
          </div>
        </div>

        <button
          type="button"
          className="hamburger-menu"
          onClick={() => (menuOpen ? closeDrawer() : openDrawer())}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <span className="hamburger-close-mark">×</span> : (
            <img src={Humburger} alt="" className="hamburger-icon" />
          )}
        </button>
      </nav>

      {menuOpen && (
        <div
          className={`mobile-menu-backdrop${menuClosing ? " is-closing" : ""}`}
          onClick={() => closeDrawer()}
        >
          <div
            className={`mobile-menu${menuClosing ? " is-closing" : ""}`}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mobile-menu__header">
              <span>Explore</span>
              <button type="button" onClick={() => closeDrawer()} aria-label="Close navigation menu">
                ×
              </button>
            </div>
            <div className="mobile-menu__links">
              <Link to="/" onClick={(event) => handleDrawerNavigation(event, "/")} className={pathname === "/" ? "active" : ""}>
                <span>Home</span><span aria-hidden="true">↗</span>
              </Link>
              <Link to="/menu" onClick={(event) => handleDrawerNavigation(event, "/menu")} className={pathname === "/menu" ? "active" : ""}>
                <span>Menu</span><span aria-hidden="true">↗</span>
              </Link>
              <Link to="/about" onClick={(event) => handleDrawerNavigation(event, "/about")} className={pathname === "/about" ? "active" : ""}>
                <span>About</span><span aria-hidden="true">↗</span>
              </Link>
              <Link to="/contact" onClick={(event) => handleDrawerNavigation(event, "/contact")} className={pathname === "/contact" ? "active" : ""}>
                <span>Contact</span><span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="mobile-menu__footer">
              <div className="cart-indicator-wrap">
                <Button
                  label="View cart"
                  variant="secondary"
                  onClick={() => closeDrawer("/cart")}
                />
                {cart?.length > 0 && <span className="cart-indicator-dot" aria-label="Cart has items" />}
              </div>
              <p>Fresh food, made for your table.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

