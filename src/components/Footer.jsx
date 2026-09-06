import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="top">

      {/* =========================================
          BACKGROUND EFFECTS
          ========================================= */}

      <div className="footer-grid"></div>

      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>


      <div className="container-custom">

        {/* =========================================
            TOP CTA
            ========================================= */}

        <div className="footer-cta">

          <div className="footer-cta-left">

            <span className="footer-eyebrow">
              <span></span>
              HAVE AN IDEA?
            </span>

            <h2>
              Let's build
              <span> what's next.</span>
            </h2>

            <p>
              Have a project, idea or challenge in mind?
              Let's turn it into something people remember.
            </p>

          </div>

          <Link
            to="/contact"
            className="footer-cta-button"
          >
            <span>Start a Project</span>

            <span className="footer-cta-arrow">
              <i className="bi bi-arrow-up-right"></i>
            </span>
          </Link>

        </div>


        {/* =========================================
            DIVIDER
            ========================================= */}

        <div className="footer-divider"></div>


        {/* =========================================
            MAIN FOOTER
            ========================================= */}

        <div className="footer-main">


          {/* BRAND */}
          <div className="footer-brand">

            <Link
              to="/"
              className="footer-logo"
            >

              <span className="footer-logo-mark">
                <span></span>
                <span></span>
                <span></span>
              </span>

              <span className="footer-logo-text">
                THE <strong>CODE MUNK</strong>
              </span>

            </Link>


            <p>
              We build modern digital experiences that
              combine thoughtful design, powerful technology
              and meaningful user experiences.
            </p>


            <div className="footer-status">

              <span className="footer-status-dot"></span>

              <span>
                AVAILABLE FOR NEW PROJECTS
              </span>

            </div>


            <Link
              to="/contact"
              className="footer-start-link"
            >
              Start a conversation

              <i className="bi bi-arrow-up-right"></i>
            </Link>

          </div>


          {/* EXPLORE */}
          <div className="footer-column">

            <span className="footer-column-index">
              01
            </span>

            <h4>
              EXPLORE
            </h4>

            <Link to="/">
              Home
            </Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/services">
              Services
            </Link>

            <Link to="/projects">
              Projects
            </Link>

            <Link to="/technologies">
              Technologies
            </Link>

          </div>


          {/* COMPANY */}
          <div className="footer-column">

            <span className="footer-column-index">
              02
            </span>

            <h4>
              COMPANY
            </h4>

            <Link to="/careers">
              Careers
            </Link>

            <Link to="/blog">
              Journal
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>


          {/* CONTACT */}
          <div className="footer-column footer-contact">

            <span className="footer-column-index">
              03
            </span>

            <h4>
              LET'S TALK
            </h4>


            <a
              href="mailto:hello@thecodemunk.in"
              className="footer-email"
            >
              hello@thecodemunk.in
            </a>


            <div className="footer-contact-details">

              <span>
                <i className="bi bi-geo-alt"></i>
                India
              </span>

              <span>
                <i className="bi bi-clock"></i>
                Mon — Fri
                <br />
                10 AM — 6 PM
              </span>

            </div>


            {/* SOCIALS */}
            <div className="footer-social-wrapper">

              <span>
                FOLLOW ALONG
              </span>

              <div className="footer-socials">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* =========================================
            BIG BRAND
            ========================================= */}

        <div className="footer-big-brand">

          <span>
            THE
          </span>

          <strong>
            CODE MUNK
          </strong>

        </div>


        {/* =========================================
            FOOTER BOTTOM
            ========================================= */}

        <div className="footer-bottom">

          <p>
            © {currentYear} The Code Munk.
            <span> All rights reserved.</span>
          </p>


          <div className="footer-bottom-links">

            <span>
              Privacy
            </span>

            <span>
              Terms
            </span>

          </div>


          <a
            href="#top"
            className="back-top"
          >
            <span>
              BACK TO TOP
            </span>

            <i className="bi bi-arrow-up"></i>
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;