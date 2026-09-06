import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="contact-luxury-hero">

        <div className="contact-hero-image"></div>
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-grid"></div>

        <div className="contact-orb orb-one"></div>
        <div className="contact-orb orb-two"></div>

        <div className="container-custom contact-hero-container">

          <div className="contact-hero-left">

            <div className="contact-eyebrow">
              <span className="eyebrow-line"></span>
              <span>THE CODE MUNK / CONTACT</span>
              <span className="eyebrow-dot"></span>
            </div>

            <h1>
              Let's create
              <br />
              something
              <span className="gradient-text">
                {" "}remarkable.
              </span>
            </h1>

            <p className="contact-hero-description">
              Have a website, digital product or business idea in mind?
              Tell us what you're building. We'll bring the strategy,
              design and technology together to create something that
              actually works.
            </p>

            <div className="contact-hero-actions">

              <a
                href="#contact-form"
                className="btn-primary-custom"
              >
                Start a Conversation
                <i className="bi bi-arrow-up-right"></i>
              </a>

              <a
                href="mailto:hello@thecodemunk.in"
                className="contact-email-link"
              >
                <span className="email-icon">
                  <i className="bi bi-envelope"></i>
                </span>

                <span>
                  <small>EMAIL US DIRECTLY</small>
                  <strong>hello@thecodemunk.in</strong>
                </span>
              </a>

            </div>

          </div>


          {/* HERO SIDE CARD */}
          <div className="contact-hero-right">

            <div className="luxury-contact-card">

              <div className="luxury-card-glow"></div>

              <div className="luxury-card-top">
                <span>START A PROJECT</span>

                <div className="card-index">
                  01
                </div>
              </div>

              <div className="luxury-card-icon">
                <i className="bi bi-arrow-up-right"></i>
              </div>

              <div className="luxury-card-content">

                <span className="luxury-mini-label">
                  YOUR IDEA
                </span>

                <h3>
                  Starts with
                  <br />
                  a conversation.
                </h3>

                <p>
                  You don't need a perfect brief.
                  Just bring the idea, challenge or
                  opportunity you're thinking about.
                </p>

              </div>

              <div className="luxury-card-bottom">

                <div className="availability-dot"></div>

                <span>
                  CURRENTLY ACCEPTING
                  <br />
                  NEW PROJECTS
                </span>

              </div>

            </div>

          </div>

        </div>


        <div className="contact-hero-scroll">

          <span>SCROLL TO EXPLORE</span>

          <div className="scroll-line">
            <span></span>
          </div>

          <i className="bi bi-arrow-down"></i>

        </div>

      </section>


      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}
      <section className="section-padding contact-main">

        <div className="container-custom">

          <div className="contact-intro-grid">

            <div className="contact-intro-left">

              <div className="section-label">
                <span></span>
                GET IN TOUCH
              </div>

              <h2 className="section-title">
                Let's talk about
                <br />
                <span className="gradient-text">
                  your next move.
                </span>
              </h2>

            </div>

            <div className="contact-intro-right">

              <p>
                Whether you're starting something completely new,
                redesigning an existing website or looking for help
                with a digital product, we'd love to understand what
                you're trying to achieve.
              </p>

              <p>
                Share as much or as little as you know.
                We'll help you turn the initial conversation into
                a clear and practical direction.
              </p>

            </div>

          </div>


          {/* CONTACT CARDS */}
          <div className="contact-info-grid">

            <a
              href="mailto:hello@thecodemunk.in"
              className="contact-info-card"
            >

              <div className="info-card-number">
                01
              </div>

              <div className="info-card-icon">
                <i className="bi bi-envelope"></i>
              </div>

              <div className="info-card-content">

                <span>EMAIL</span>

                <h3>
                  hello@thecodemunk.in
                </h3>

                <p>
                  Send your project details,
                  questions or ideas.
                </p>

              </div>

              <div className="info-card-arrow">
                <i className="bi bi-arrow-up-right"></i>
              </div>

            </a>


            <div className="contact-info-card">

              <div className="info-card-number">
                02
              </div>

              <div className="info-card-icon">
                <i className="bi bi-geo-alt"></i>
              </div>

              <div className="info-card-content">

                <span>LOCATION</span>

                <h3>
                  Waraseoni
                </h3>

                <p>
                  Balaghat, Madhya Pradesh,
                  India.
                </p>

              </div>

              <div className="info-card-arrow">
                <i className="bi bi-arrow-up-right"></i>
              </div>

            </div>


            <div className="contact-info-card">

              <div className="info-card-number">
                03
              </div>

              <div className="info-card-icon">
                <i className="bi bi-clock"></i>
              </div>

              <div className="info-card-content">

                <span>WORKING HOURS</span>

                <h3>
                  Mon — Fri
                </h3>

                <p>
                  10:00 AM — 6:00 PM
                  <br />
                  IST
                </p>

              </div>

              <div className="info-card-arrow">
                <i className="bi bi-calendar-check"></i>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FORM + MAP
      ===================================================== */}
      <section
        className="section-padding contact-form-section"
        id="contact-form"
      >

        <div className="container-custom">

          <div className="contact-form-layout">

            {/* ================================================
                FORM
            ================================================= */}
            <div className="luxury-form-wrapper">

              <div className="form-top-line"></div>

              <div className="form-heading">

                <div>

                  <span className="form-kicker">
                    PROJECT ENQUIRY
                  </span>

                  <h2>
                    Tell us about
                    <br />
                    <span className="gradient-text">
                      your project.
                    </span>
                  </h2>

                  <p>
                    A few details are enough to get
                    the conversation started.
                  </p>

                </div>

                <span className="form-big-number">
                  01
                </span>

              </div>


              {submitted ? (

                <div className="contact-success">

                  <div className="success-circle">

                    <i className="bi bi-check-lg"></i>

                  </div>

                  <span className="success-label">
                    MESSAGE RECEIVED
                  </span>

                  <h3>
                    Thanks for reaching out.
                  </h3>

                  <p>
                    Your enquiry has been recorded.
                    We'll review the details and get
                    back to you with the next steps.
                  </p>

                  <button
                    type="button"
                    className="success-button"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                    <i className="bi bi-arrow-right"></i>
                  </button>

                </div>

              ) : (

                <form
                  className="luxury-contact-form"
                  onSubmit={handleSubmit}
                >

                  {/* NAME + EMAIL */}
                  <div className="form-grid-two">

                    <div className="luxury-field">

                      <label>
                        YOUR NAME
                        <span>*</span>
                      </label>

                      <div className="field-input">
                        <i className="bi bi-person"></i>

                        <input
                          type="text"
                          placeholder="Enter your name"
                          required
                        />
                      </div>

                    </div>


                    <div className="luxury-field">

                      <label>
                        EMAIL ADDRESS
                        <span>*</span>
                      </label>

                      <div className="field-input">
                        <i className="bi bi-envelope"></i>

                        <input
                          type="email"
                          placeholder="you@example.com"
                          required
                        />
                      </div>

                    </div>

                  </div>


                  {/* COMPANY + PROJECT */}
                  <div className="form-grid-two">

                    <div className="luxury-field">

                      <label>
                        COMPANY / BRAND
                      </label>

                      <div className="field-input">
                        <i className="bi bi-building"></i>

                        <input
                          type="text"
                          placeholder="Your company or brand"
                        />
                      </div>

                    </div>


                    <div className="luxury-field">

                      <label>
                        PROJECT TYPE
                        <span>*</span>
                      </label>

                      <div className="field-input select-field">

                        <i className="bi bi-layers"></i>

                        <select
                          required
                          defaultValue=""
                        >

                          <option
                            value=""
                            disabled
                          >
                            Select project type
                          </option>

                          <option value="website">
                            Website Development
                          </option>

                          <option value="web-app">
                            Web Application
                          </option>

                          <option value="ui-ux">
                            UI / UX Design
                          </option>

                          <option value="redesign">
                            Website Redesign
                          </option>

                          <option value="api">
                            API Integration
                          </option>

                          <option value="maintenance">
                            Maintenance & Support
                          </option>

                          <option value="other">
                            Something Else
                          </option>

                        </select>

                        <i className="bi bi-chevron-down select-arrow"></i>

                      </div>

                    </div>

                  </div>


                  {/* BUDGET */}
                  <div className="luxury-field">

                    <label>
                      ESTIMATED BUDGET
                    </label>

                    <div className="budget-grid">

                      <label className="budget-card">

                        <input
                          type="radio"
                          name="budget"
                          value="under-25"
                        />

                        <span>
                          <small>STARTING</small>
                          Under ₹25K
                        </span>

                      </label>


                      <label className="budget-card">

                        <input
                          type="radio"
                          name="budget"
                          value="25-50"
                        />

                        <span>
                          <small>GROWING</small>
                          ₹25K — ₹50K
                        </span>

                      </label>


                      <label className="budget-card">

                        <input
                          type="radio"
                          name="budget"
                          value="50-100"
                        />

                        <span>
                          <small>BUSINESS</small>
                          ₹50K — ₹1L
                        </span>

                      </label>


                      <label className="budget-card">

                        <input
                          type="radio"
                          name="budget"
                          value="100-plus"
                        />

                        <span>
                          <small>PREMIUM</small>
                          ₹1L+
                        </span>

                      </label>

                    </div>

                  </div>


                  {/* MESSAGE */}
                  <div className="luxury-field">

                    <label>
                      TELL US ABOUT YOUR PROJECT
                      <span>*</span>
                    </label>

                    <div className="field-textarea">

                      <i className="bi bi-chat-left-text"></i>

                      <textarea
                        rows="7"
                        placeholder="What are you building? What problem are you trying to solve? What would success look like?"
                        required
                      ></textarea>

                    </div>

                  </div>


                  {/* FORM FOOTER */}
                  <div className="form-submit-row">

                    <div className="privacy-note">

                      <i className="bi bi-shield-check"></i>

                      <span>
                        Your information stays private
                        and is only used to respond to
                        your enquiry.
                      </span>

                    </div>

                    <button
                      type="submit"
                      className="btn-primary-custom form-submit"
                    >
                      Send Enquiry
                      <i className="bi bi-arrow-up-right"></i>
                    </button>

                  </div>

                </form>

              )}

            </div>


            {/* ================================================
                MAP + LOCATION
            ================================================= */}
            <div className="contact-location">

              <div className="location-heading">

                <span className="form-kicker">
                  FIND US
                </span>

                <h3>
                  Based in
                  <br />
                  <span className="gradient-text">
                    Waraseoni.
                  </span>
                </h3>

                <p>
                  We work remotely with clients across
                  India and beyond, while our base is
                  in Waraseoni, Madhya Pradesh.
                </p>

              </div>


              {/* GOOGLE MAP */}
              <div className="map-wrapper">

                <iframe
                  title="The Code Munk - Waraseoni Madhya Pradesh"
                  src="https://www.google.com/maps?q=Waraseoni,Madhya%20Pradesh,India&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className="map-overlay">

                  <div className="map-location-pin">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>

                  <div className="map-location-info">

                    <strong>
                      Waraseoni
                    </strong>

                    <span>
                      Madhya Pradesh, India
                    </span>

                  </div>

                </div>

              </div>


              {/* LOCATION DETAIL */}
              <div className="location-detail">

                <div className="location-detail-icon">
                  <i className="bi bi-compass"></i>
                </div>

                <div>

                  <span>
                    OUR BASE
                  </span>

                  <strong>
                    Waraseoni, Balaghat
                  </strong>

                  <p>
                    Madhya Pradesh · India
                  </p>

                </div>

              </div>


              <a
                href="https://www.google.com/maps/search/?api=1&query=Waraseoni%2CMadhya%20Pradesh%2CIndia"
                target="_blank"
                rel="noreferrer"
                className="open-map-button"
              >
                Open in Google Maps
                <i className="bi bi-arrow-up-right"></i>
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CONTACT US
      ===================================================== */}
      <section className="contact-values">

        <div className="contact-values-grid"></div>

        <div className="container-custom">

          <div className="contact-values-heading">

            <div>

              <div className="section-label">
                <span></span>
                WHY WORK WITH US
              </div>

              <h2 className="section-title">
                More than a
                <br />
                <span className="gradient-text">
                  service provider.
                </span>
              </h2>

            </div>

            <p>
              We believe the best digital work comes from
              clear communication, thoughtful decisions and
              attention to the details that users actually notice.
            </p>

          </div>


          <div className="values-grid">

            <div className="value-card">

              <span className="value-number">
                01
              </span>

              <div className="value-icon">
                <i className="bi bi-bullseye"></i>
              </div>

              <h3>
                Purpose First
              </h3>

              <p>
                We start with your business goal,
                not with a template. Every design and
                development decision has a reason behind it.
              </p>

            </div>


            <div className="value-card">

              <span className="value-number">
                02
              </span>

              <div className="value-icon">
                <i className="bi bi-code-square"></i>
              </div>

              <h3>
                Clean Development
              </h3>

              <p>
                Modern frontend architecture,
                reusable components and responsive
                implementation built for long-term use.
              </p>

            </div>


            <div className="value-card">

              <span className="value-number">
                03
              </span>

              <div className="value-icon">
                <i className="bi bi-lightning-charge"></i>
              </div>

              <h3>
                Performance Focus
              </h3>

              <p>
                Beautiful interfaces should also feel
                fast. We focus on responsive layouts,
                efficient interactions and clean code.
              </p>

            </div>


            <div className="value-card">

              <span className="value-number">
                04
              </span>

              <div className="value-icon">
                <i className="bi bi-chat-square-heart"></i>
              </div>

              <h3>
                Real Collaboration
              </h3>

              <p>
                You stay involved throughout the process
                with clear communication, practical updates
                and no unnecessary complexity.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="section-padding contact-process">

        <div className="container-custom">

          <div className="process-top">

            <div>

              <div className="section-label">
                <span></span>
                HOW IT WORKS
              </div>

              <h2 className="section-title">
                From first message
                <br />
                to <span className="gradient-text">
                  launch.
                </span>
              </h2>

            </div>

            <p>
              No complicated agency process.
              Just a clear sequence that keeps everyone
              aligned from the first conversation to delivery.
            </p>

          </div>


          <div className="process-line"></div>


          <div className="process-grid">

            <div className="process-card">

              <span className="process-number">
                01
              </span>

              <div className="process-icon">
                <i className="bi bi-chat-left-text"></i>
              </div>

              <span className="process-label">
                STEP ONE
              </span>

              <h3>
                We Talk
              </h3>

              <p>
                You tell us about your idea,
                business, users and goals.
              </p>

            </div>


            <div className="process-card">

              <span className="process-number">
                02
              </span>

              <div className="process-icon">
                <i className="bi bi-search"></i>
              </div>

              <span className="process-label">
                STEP TWO
              </span>

              <h3>
                We Understand
              </h3>

              <p>
                We study the requirements and
                identify the right technical direction.
              </p>

            </div>


            <div className="process-card">

              <span className="process-number">
                03
              </span>

              <div className="process-icon">
                <i className="bi bi-bezier2"></i>
              </div>

              <span className="process-label">
                STEP THREE
              </span>

              <h3>
                We Design
              </h3>

              <p>
                We shape the visual language,
                experience and interface structure.
              </p>

            </div>


            <div className="process-card">

              <span className="process-number">
                04
              </span>

              <div className="process-icon">
                <i className="bi bi-rocket-takeoff"></i>
              </div>

              <span className="process-label">
                STEP FOUR
              </span>

              <h3>
                We Build
              </h3>

              <p>
                Once everything is aligned,
                development begins and the product comes alive.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ / QUICK ANSWERS
      ===================================================== */}
      <section className="contact-faq">

        <div className="container-custom">

          <div className="faq-heading">

            <div className="section-label">
              <span></span>
              BEFORE YOU REACH OUT
            </div>

            <h2 className="section-title">
              Good to
              <br />
              <span className="gradient-text">
                know.
              </span>
            </h2>

          </div>


          <div className="faq-list">

            <div className="faq-item">

              <span>01</span>

              <div>

                <h3>
                  Do I need a complete project brief?
                </h3>

                <p>
                  Not at all. If you only have an idea,
                  problem or rough direction, that's enough
                  for the first conversation.
                </p>

              </div>

              <i className="bi bi-arrow-up-right"></i>

            </div>


            <div className="faq-item">

              <span>02</span>

              <div>

                <h3>
                  Do you work with clients remotely?
                </h3>

                <p>
                  Yes. The Code Munk is remote-friendly,
                  so communication and project collaboration
                  can happen online.
                </p>

              </div>

              <i className="bi bi-arrow-up-right"></i>

            </div>


            <div className="faq-item">

              <span>03</span>

              <div>

                <h3>
                  Can you redesign an existing website?
                </h3>

                <p>
                  Yes. We can work on visual redesign,
                  responsive improvements, frontend development,
                  performance and overall user experience.
                </p>

              </div>

              <i className="bi bi-arrow-up-right"></i>

            </div>


            <div className="faq-item">

              <span>04</span>

              <div>

                <h3>
                  What happens after I submit the form?
                </h3>

                <p>
                  We'll review the information you provide
                  and use it to understand your project before
                  discussing the next practical step.
                </p>

              </div>

              <i className="bi bi-arrow-up-right"></i>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="contact-final-cta">

        <div className="final-cta-grid"></div>
        <div className="final-cta-glow"></div>

        <div className="container-custom">

          <div className="final-cta-content">

            <span className="final-cta-label">
              HAVE AN IDEA?
            </span>

            <h2>
              Let's make it
              <span className="gradient-text">
                {" "}real.
              </span>
            </h2>

            <p>
              The next great digital experience could
              start with one simple conversation.
            </p>

            <div className="final-cta-actions">

              <a
                href="mailto:hello@thecodemunk.in"
                className="btn-primary-custom"
              >
                hello@thecodemunk.in
                <i className="bi bi-arrow-up-right"></i>
              </a>

              <Link
                to="/projects"
                className="btn-outline-custom"
              >
                Explore Our Work
                <i className="bi bi-arrow-right"></i>
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;