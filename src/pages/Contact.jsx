import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">

        <div className="contact-hero-bg"></div>
        <div className="contact-hero-grid"></div>
        <div className="contact-hero-glow"></div>

        <div className="container-custom contact-hero-inner">

          <div className="contact-hero-content">

            <div className="contact-kicker">
              <span></span>
              LET'S CONNECT
            </div>

            <h1>
              Let's build
              <span className="gradient-text">
                {" "}something great.
              </span>
            </h1>

            <p>
              Have a project, idea or question?
              Tell us what you're thinking and we'll
              turn the conversation into the next step.
            </p>

            <div className="contact-hero-meta">

              <div>
                <i className="bi bi-lightning-charge"></i>
                <span>Quick Response</span>
              </div>

              <div>
                <i className="bi bi-globe2"></i>
                <span>Remote Friendly</span>
              </div>

              <div>
                <i className="bi bi-chat-dots"></i>
                <span>Clear Communication</span>
              </div>

            </div>

          </div>


          {/* Hero floating card */}

          <div className="contact-hero-card">

            <div className="hero-card-orbit orbit-one"></div>
            <div className="hero-card-orbit orbit-two"></div>

            <div className="hero-card-top">
              <span>START HERE</span>

              <i className="bi bi-arrow-down-right"></i>
            </div>

            <div className="hero-card-icon">
              <i className="bi bi-send"></i>
            </div>

            <h3>
              Your idea
              <br />
              starts here.
            </h3>

            <p>
              Tell us what you want to build.
              We'll help you figure out what comes next.
            </p>

            <div className="hero-card-line"></div>

            <span className="hero-card-note">
              NO PRESSURE. JUST A CONVERSATION.
            </span>

          </div>

        </div>


        <div className="contact-hero-bottom">

          <div className="container-custom">

            <span>SCROLL TO CONTACT</span>

            <i className="bi bi-arrow-down"></i>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT MAIN
      ===================================================== */}

      <section className="section-padding contact-section">

        <div className="container-custom">

          <div className="contact-main-grid">


            {/* =================================================
                LEFT INFO
            ================================================= */}

            <div className="contact-info">

              <div className="section-label">
                <span></span>
                GET IN TOUCH
              </div>

              <h2 className="section-title">

                Start a
                <br />

                <span className="gradient-text">
                  conversation.
                </span>

              </h2>

              <p className="contact-intro">
                Whether you have a complete project brief,
                a rough idea or simply want to explore what's
                possible, we're happy to talk.
              </p>


              <div className="contact-details">


                {/* EMAIL */}

                <a
                  href="mailto:hello@thecodemunk.in"
                  className="contact-detail"
                >

                  <span className="contact-icon">
                    <i className="bi bi-envelope"></i>
                  </span>

                  <span className="contact-detail-content">

                    <small>EMAIL</small>

                    <strong>
                      hello@thecodemunk.in
                    </strong>

                    <em>
                      Send us your project details
                    </em>

                  </span>

                  <i className="bi bi-arrow-up-right contact-detail-arrow"></i>

                </a>


                {/* LOCATION */}

                <div className="contact-detail">

                  <span className="contact-icon">
                    <i className="bi bi-geo-alt"></i>
                  </span>

                  <span className="contact-detail-content">

                    <small>LOCATION</small>

                    <strong>
                      Waraseoni, Madhya Pradesh
                    </strong>

                    <em>
                      India · Working with clients worldwide
                    </em>

                  </span>

                </div>


                {/* HOURS */}

                <div className="contact-detail">

                  <span className="contact-icon">
                    <i className="bi bi-clock"></i>
                  </span>

                  <span className="contact-detail-content">

                    <small>WORKING HOURS</small>

                    <strong>
                      Mon — Fri / 10 AM — 6 PM
                    </strong>

                    <em>
                      Usually online during business hours
                    </em>

                  </span>

                </div>

              </div>


              {/* Response */}

              <div className="contact-response">

                <div className="response-icon">
                  <i className="bi bi-clock-history"></i>
                </div>

                <div>

                  <strong>
                    What happens next?
                  </strong>

                  <p>
                    We review your message, understand your
                    requirements and get back to you with
                    the next steps.
                  </p>

                </div>

              </div>

            </div>


            {/* =================================================
                FORM
            ================================================= */}

            <div className="contact-form-wrapper">

              <div className="form-header">

                <div>

                  <span>
                    PROJECT ENQUIRY
                  </span>

                  <h3>
                    Tell us about
                    <br />
                    <strong>your project.</strong>
                  </h3>

                </div>

                <div className="form-number">
                  01
                </div>

              </div>


              {submitted ? (

                <div className="form-success">

                  <div className="success-icon">
                    <i className="bi bi-check-lg"></i>
                  </div>

                  <h3>
                    Message received.
                  </h3>

                  <p>
                    Thanks for reaching out.
                    We'll get back to you with the next steps.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="success-again"
                  >
                    Send another message

                    <i className="bi bi-arrow-right"></i>
                  </button>

                </div>

              ) : (

                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                >

                  {/* NAME + EMAIL */}

                  <div className="form-row">

                    <div className="form-group">

                      <label>
                        Your Name
                        <span>*</span>
                      </label>

                      <input
                        type="text"
                        placeholder="Enter your name"
                        required
                      />

                    </div>


                    <div className="form-group">

                      <label>
                        Email Address
                        <span>*</span>
                      </label>

                      <input
                        type="email"
                        placeholder="you@example.com"
                        required
                      />

                    </div>

                  </div>


                  {/* COMPANY + PROJECT */}

                  <div className="form-row">

                    <div className="form-group">

                      <label>
                        Company / Brand
                      </label>

                      <input
                        type="text"
                        placeholder="Your company name"
                      />

                    </div>


                    <div className="form-group">

                      <label>
                        Project Type
                        <span>*</span>
                      </label>

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

                        <option>
                          Website
                        </option>

                        <option>
                          Web Application
                        </option>

                        <option>
                          UI / UX Design
                        </option>

                        <option>
                          Mobile App
                        </option>

                        <option>
                          API Integration
                        </option>

                        <option>
                          Website Redesign
                        </option>

                        <option>
                          Other
                        </option>

                      </select>

                    </div>

                  </div>


                  {/* BUDGET */}

                  <div className="form-group">

                    <label>
                      Estimated Budget
                    </label>

                    <div className="budget-options">

                      <label className="budget-option">

                        <input
                          type="radio"
                          name="budget"
                          value="under-25k"
                        />

                        <span>
                          Under ₹25K
                        </span>

                      </label>


                      <label className="budget-option">

                        <input
                          type="radio"
                          name="budget"
                          value="25-50k"
                        />

                        <span>
                          ₹25K — ₹50K
                        </span>

                      </label>


                      <label className="budget-option">

                        <input
                          type="radio"
                          name="budget"
                          value="50-100k"
                        />

                        <span>
                          ₹50K — ₹1L
                        </span>

                      </label>


                      <label className="budget-option">

                        <input
                          type="radio"
                          name="budget"
                          value="100k-plus"
                        />

                        <span>
                          ₹1L+
                        </span>

                      </label>

                    </div>

                  </div>


                  {/* MESSAGE */}

                  <div className="form-group">

                    <label>
                      Tell us about your project
                      <span>*</span>
                    </label>

                    <textarea
                      rows="6"
                      placeholder="What are you building? What problem are you trying to solve?"
                      required
                    ></textarea>

                  </div>


                  {/* FORM FOOTER */}

                  <div className="form-footer">

                    <p>
                      <i className="bi bi-shield-check"></i>

                      Your information stays private.
                    </p>

                    <button
                      type="submit"
                      className="btn-primary-custom contact-submit"
                    >

                      Send Message

                      <i className="bi bi-arrow-up-right"></i>

                    </button>

                  </div>

                </form>

              )}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WARASEONI MAP
      ===================================================== */}

      <section className="contact-map-section">

        <div className="container-custom">

          <div className="contact-map-heading">

            <div>

              <div className="section-label">

                <span></span>

                FIND US

              </div>

              <h2 className="section-title">

                Based in
                <br />

                <span className="gradient-text">
                  Waraseoni, MP.
                </span>

              </h2>

            </div>

            <div className="map-heading-copy">

              <span>
                MADHYA PRADESH · INDIA
              </span>

              <p>
                From a small town in Madhya Pradesh
                to digital projects around the world.
              </p>

            </div>

          </div>


          <div className="contact-map-wrapper">

            {/* Decorative map UI */}

            <div className="map-top-bar">

              <div className="map-status">

                <span></span>

                LOCATION ACTIVE

              </div>

              <span>
                21.7557° N · 80.0492° E
              </span>

            </div>


            {/* Google Maps */}

            <iframe
              title="The Code Munk - Waraseoni Madhya Pradesh"
              src="https://www.google.com/maps?q=Waraseoni,Madhya%20Pradesh,India&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>


            {/* Floating location card */}

            <div className="map-location-card">

              <div className="map-location-icon">

                <i className="bi bi-geo-alt-fill"></i>

              </div>

              <div>

                <span>
                  OUR BASE
                </span>

                <strong>
                  Waraseoni
                </strong>

                <small>
                  Balaghat · Madhya Pradesh
                </small>

              </div>

            </div>


            <div className="map-corner map-corner-tl"></div>
            <div className="map-corner map-corner-tr"></div>
            <div className="map-corner map-corner-bl"></div>
            <div className="map-corner map-corner-br"></div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="contact-services">

        <div className="container-custom">

          <div className="contact-services-heading">

            <div>

              <div className="section-label">

                <span></span>

                WHAT CAN WE HELP WITH?

              </div>

              <h2 className="section-title">

                Bring us your
                <br />

                <span className="gradient-text">
                  challenge.
                </span>

              </h2>

            </div>

            <p>
              You don't need to have everything figured out.
              Start with the problem and we'll help shape the solution.
            </p>

          </div>


          <div className="contact-service-grid">


            <div className="contact-service-card">

              <span>01</span>

              <i className="bi bi-code-slash"></i>

              <h3>
                Build something new
              </h3>

              <p>
                A new website, web application or digital
                product from the ground up.
              </p>

              <div>
                <i className="bi bi-arrow-up-right"></i>
              </div>

            </div>


            <div className="contact-service-card">

              <span>02</span>

              <i className="bi bi-magic"></i>

              <h3>
                Redesign something old
              </h3>

              <p>
                Give an existing website or interface
                a modern visual and technical upgrade.
              </p>

              <div>
                <i className="bi bi-arrow-up-right"></i>
              </div>

            </div>


            <div className="contact-service-card">

              <span>03</span>

              <i className="bi bi-speedometer2"></i>

              <h3>
                Improve performance
              </h3>

              <p>
                Make your existing digital experience
                faster, cleaner and more responsive.
              </p>

              <div>
                <i className="bi bi-arrow-up-right"></i>
              </div>

            </div>


            <div className="contact-service-card">

              <span>04</span>

              <i className="bi bi-lightbulb"></i>

              <h3>
                Explore an idea
              </h3>

              <p>
                Not sure where to start? Let's turn
                your early idea into a practical direction.
              </p>

              <div>
                <i className="bi bi-arrow-up-right"></i>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="section-padding contact-process">

        <div className="container-custom">

          <div className="process-heading">

            <div className="section-label">

              <span></span>

              WHAT HAPPENS NEXT

            </div>

            <h2 className="section-title">

              Simple process.
              <br />

              <span className="gradient-text">
                No confusion.
              </span>

            </h2>

          </div>


          <div className="contact-process-grid">


            <div className="contact-process-item">

              <span>01</span>

              <div className="process-icon">
                <i className="bi bi-chat-left-text"></i>
              </div>

              <h3>
                We talk
              </h3>

              <p>
                You tell us about your idea, goals,
                challenges and expectations.
              </p>

            </div>


            <div className="contact-process-item">

              <span>02</span>

              <div className="process-icon">
                <i className="bi bi-search"></i>
              </div>

              <h3>
                We understand
              </h3>

              <p>
                We analyze the requirements and identify
                the right technical and design direction.
              </p>

            </div>


            <div className="contact-process-item">

              <span>03</span>

              <div className="process-icon">
                <i className="bi bi-layers"></i>
              </div>

              <h3>
                We plan
              </h3>

              <p>
                We define the scope, priorities, timeline
                and next steps for the project.
              </p>

            </div>


            <div className="contact-process-item">

              <span>04</span>

              <div className="process-icon">
                <i className="bi bi-rocket-takeoff"></i>
              </div>

              <h3>
                We build
              </h3>

              <p>
                Once everything is aligned, we start
                turning the idea into a real product.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="contact-cta">

        <div className="contact-cta-grid"></div>
        <div className="contact-cta-glow"></div>

        <div className="container-custom">

          <div className="contact-cta-inner">

            <span className="contact-cta-label">
              HAVE A PROJECT IN MIND?
            </span>

            <h2>

              Your next digital
              <br />

              experience starts
              <span className="gradient-text">
                {" "}with a conversation.
              </span>

            </h2>

            <p>
              No complicated forms. No unnecessary meetings.
              Just a straightforward conversation about what
              you want to build.
            </p>

            <a
              href="mailto:hello@thecodemunk.in"
              className="btn-primary-custom"
            >

              hello@thecodemunk.in

              <i className="bi bi-arrow-up-right"></i>

            </a>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;