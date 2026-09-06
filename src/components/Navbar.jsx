import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setMoreOpen(false);
  };

  const navClass = ({ isActive }) =>
    `nav-link-custom ${isActive ? "active" : ""}`;

  return (
    <header className="site-navbar">

      {/* Ambient glow */}
      <div className="navbar-glow"></div>

      <div className="navbar-inner container-custom">

        {/* =========================================
            LOGO
            ========================================= */}

        <Link
          to="/"
          className="brand-logo"
          onClick={closeMenu}
        >

          <span className="brand-mark">

            <span></span>
            <span></span>
            <span></span>

          </span>

          <span className="brand-text">
            THE <strong>CODE MUNK</strong>
          </span>

        </Link>


        {/* =========================================
            NAVIGATION
            ========================================= */}

        <nav
          className={`main-navigation ${
            menuOpen ? "mobile-open" : ""
          }`}
        >

          <NavLink
            to="/"
            end
            className={navClass}
            onClick={closeMenu}
          >
            <span>Home</span>
          </NavLink>


          <NavLink
            to="/about"
            className={navClass}
            onClick={closeMenu}
          >
            <span>About</span>
          </NavLink>


          <NavLink
            to="/services"
            className={navClass}
            onClick={closeMenu}
          >
            <span>Services</span>
          </NavLink>


          <NavLink
            to="/projects"
            className={navClass}
            onClick={closeMenu}
          >
            <span>Projects</span>
          </NavLink>


          <NavLink
            to="/technologies"
            className={navClass}
            onClick={closeMenu}
          >
            <span>Technologies</span>
          </NavLink>


          {/* =========================================
              MORE DROPDOWN
              ========================================= */}

          <div
            className={`nav-dropdown ${
              moreOpen ? "dropdown-active" : ""
            }`}
          >

            <button
              type="button"
              className={`more-button ${
                moreOpen ? "active" : ""
              }`}
              onClick={() => setMoreOpen(!moreOpen)}
              aria-expanded={moreOpen}
            >

              <span>More</span>

              <i
                className={`bi ${
                  moreOpen
                    ? "bi-chevron-up"
                    : "bi-chevron-down"
                }`}
              ></i>

            </button>


            <div
              className={`dropdown-menu-custom ${
                moreOpen ? "show" : ""
              }`}
            >

              <div className="dropdown-heading">
                <span>EXPLORE MORE</span>
              </div>


              <Link
                to="/careers"
                onClick={closeMenu}
              >
                <span className="dropdown-icon">
                  <i className="bi bi-people"></i>
                </span>

                <span className="dropdown-content">
                  <strong>Careers</strong>
                  <small>Join the team</small>
                </span>

                <i className="bi bi-arrow-up-right dropdown-arrow"></i>
              </Link>


              <Link
                to="/blog"
                onClick={closeMenu}
              >
                <span className="dropdown-icon">
                  <i className="bi bi-journal-text"></i>
                </span>

                <span className="dropdown-content">
                  <strong>Journal</strong>
                  <small>Ideas & insights</small>
                </span>

                <i className="bi bi-arrow-up-right dropdown-arrow"></i>
              </Link>


              <Link
                to="/contact"
                onClick={closeMenu}
              >
                <span className="dropdown-icon">
                  <i className="bi bi-envelope"></i>
                </span>

                <span className="dropdown-content">
                  <strong>Contact</strong>
                  <small>Let's talk</small>
                </span>

                <i className="bi bi-arrow-up-right dropdown-arrow"></i>
              </Link>

            </div>

          </div>


          {/* Mobile CTA */}

          <Link
            to="/contact"
            className="mobile-talk-btn"
            onClick={closeMenu}
          >
            <span>Let's Talk</span>

            <i className="bi bi-arrow-up-right"></i>
          </Link>

        </nav>


        {/* =========================================
            DESKTOP CTA
            ========================================= */}

        <Link
          to="/contact"
          className="navbar-cta"
          onClick={closeMenu}
        >

          <span>Let's Talk</span>

          <i className="bi bi-arrow-up-right"></i>

        </Link>


        {/* =========================================
            MOBILE TOGGLE
            ========================================= */}

        <button
          type="button"
          className={`mobile-toggle ${
            menuOpen ? "open" : ""
          }`}
          onClick={() => {
            setMenuOpen(!menuOpen);
            setMoreOpen(false);
          }}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </div>

    </header>
  );
};

export default Navbar;