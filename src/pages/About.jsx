import { Link } from "react-router-dom";
import "./About.css";

const values = [
  {
    number: "01",
    icon: "bi-bullseye",
    title: "Purpose First",
    text: "We don't start with technology. We start by understanding the problem, the audience and the business goal behind every project.",
  },
  {
    number: "02",
    icon: "bi-stars",
    title: "Creative Thinking",
    text: "We look beyond ordinary templates and create digital experiences with a strong visual identity, thoughtful interactions and clear purpose.",
  },
  {
    number: "03",
    icon: "bi-code-slash",
    title: "Quality Code",
    text: "Our development approach focuses on clean architecture, reusable components, responsive layouts and maintainable code.",
  },
  {
    number: "04",
    icon: "bi-people",
    title: "Real Collaboration",
    text: "We believe the best products are created together. Clients stay involved from the first idea to the final launch.",
  },
];

const capabilities = [
  {
    icon: "bi-window-stack",
    title: "Web Development",
    text: "Responsive websites and modern web applications built with React, JavaScript and scalable frontend architecture.",
  },
  {
    icon: "bi-bezier2",
    title: "UI / UX Design",
    text: "Clean and intuitive interfaces that balance aesthetics, usability, accessibility and business objectives.",
  },
  {
    icon: "bi-phone",
    title: "Responsive Experiences",
    text: "Mobile-first digital experiences that look and perform consistently across phones, tablets and desktops.",
  },
  {
    icon: "bi-plug",
    title: "API Integration",
    text: "Reliable REST API integration connecting frontend experiences with real-time business data and services.",
  },
  {
    icon: "bi-speedometer2",
    title: "Performance",
    text: "Fast-loading interfaces focused on optimized assets, efficient code and smooth user interactions.",
  },
  {
    icon: "bi-arrow-repeat",
    title: "Maintenance",
    text: "Continuous improvements, updates, bug fixes and frontend support to keep digital products healthy.",
  },
];

const approach = [
  {
    number: "01",
    title: "Discover",
    text: "We understand your business, audience, goals and technical requirements before writing the first line of code.",
  },
  {
    number: "02",
    title: "Design",
    text: "We shape the visual direction, user journey and interface system to create a clear and memorable experience.",
  },
  {
    number: "03",
    title: "Develop",
    text: "We turn approved designs into responsive, scalable and high-quality digital products using modern technology.",
  },
  {
    number: "04",
    title: "Launch",
    text: "After testing and optimization, we prepare the product for launch and continue improving it as it grows.",
  },
];

const About = () => {
  return (
    <div className="about-page">

      {/* =========================================
          HERO
      ========================================= */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="about-hero-grid"></div>
        <div className="about-hero-glow"></div>

        <div className="container-custom about-hero-inner">

          <div className="about-hero-content">
            <div className="about-kicker">
              <span></span>
              ABOUT THE CODE MUNK
            </div>

            <h1>
              We build digital
              <span className="gradient-text">
                {" "}experiences.
              </span>
            </h1>

            <p>
              We are a digital development and design studio focused
              on creating modern websites, interfaces and technology
              experiences that help ideas move forward.
            </p>

            <div className="about-hero-buttons">
              <Link
                to="/contact"
                className="btn-primary-custom"
              >
                Start a Project
                <i className="bi bi-arrow-up-right"></i>
              </Link>

              <a
                href="#our-story"
                className="btn-outline-custom"
              >
                Explore Our Story
                <i className="bi bi-arrow-down"></i>
              </a>
            </div>
          </div>

          <div className="about-hero-side">

            <div className="about-orbit">
              <div className="orbit-circle circle-one"></div>
              <div className="orbit-circle circle-two"></div>
              <div className="orbit-circle circle-three"></div>

              <div className="orbit-core">
                <span>&lt;/&gt;</span>
              </div>

              <div className="orbit-dot dot-one"></div>
              <div className="orbit-dot dot-two"></div>
              <div className="orbit-dot dot-three"></div>
            </div>

            <div className="hero-side-card">
              <span>OUR MINDSET</span>
              <strong>
                Think.
                <br />
                Design.
                <br />
                Build.
              </strong>
            </div>

          </div>

        </div>

        <div className="about-hero-bottom">
          <div className="container-custom">
            <div className="hero-scroll">
              <span>SCROLL TO EXPLORE</span>
              <i className="bi bi-arrow-down"></i>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================
          INTRO
      ========================================= */}
      <section
        className="section-padding about-intro"
        id="our-story"
      >
        <div className="container-custom">

          <div className="about-intro-grid">

            <div className="about-intro-label">
              <span className="section-label">
                <span></span>
                WHO WE ARE
              </span>

              <div className="intro-index">
                <span>01</span>
                <div></div>
                <span>THE CODE MUNK</span>
              </div>
            </div>

            <div className="about-intro-content">

              <h2>
                A small team with
                <span className="gradient-text">
                  {" "}big digital thinking.
                </span>
              </h2>

              <p className="intro-lead">
                The Code Munk is built around one simple idea:
                technology should solve problems, not create more of them.
              </p>

              <p>
                We work at the intersection of design and development,
                helping businesses transform ideas into useful,
                beautiful and reliable digital experiences.
              </p>

              <p>
                From focused landing pages and business websites to
                complete web interfaces and API-powered applications,
                our goal remains the same — create digital products
                that look good, feel intuitive and perform exceptionally.
              </p>

              <div className="intro-highlight">
                <div className="highlight-icon">
                  <i className="bi bi-quote"></i>
                </div>

                <div>
                  <strong>
                    Good technology disappears behind a great experience.
                  </strong>

                  <span>
                    — The Code Munk philosophy
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================
          STORY IMAGE
      ========================================= */}
      <section className="about-story-visual">

        <div className="story-image"></div>

        <div className="story-overlay"></div>

        <div className="container-custom story-visual-content">

          <div className="story-big-number">
            01
          </div>

          <div className="story-visual-copy">
            <span>FROM IDEA TO EXPERIENCE</span>

            <h2>
              Every project
              <br />
              starts with a
              <em> question.</em>
            </h2>

            <p>
              What problem are we solving?
              Who are we solving it for?
              And how can technology make the experience better?
            </p>
          </div>

        </div>

      </section>


      {/* =========================================
          STATS
      ========================================= */}
      <section className="about-stats">

        <div className="container-custom">

          <div className="stats-heading">
            <span>THE NUMBERS</span>
            <p>
              Experience is measured by what we create,
              what we learn and the value we deliver.
            </p>
          </div>

          <div className="about-stats-grid">

            <div className="about-stat">
              <strong>2<span>+</span></strong>
              <small>YEARS</small>
              <p>Hands-on development experience</p>
            </div>

            <div className="about-stat">
              <strong>10<span>+</span></strong>
              <small>PROJECTS</small>
              <p>Digital products and interfaces</p>
            </div>

            <div className="about-stat">
              <strong>15<span>+</span></strong>
              <small>INTEGRATIONS</small>
              <p>REST API and connected experiences</p>
            </div>

            <div className="about-stat">
              <strong>100<span>%</span></strong>
              <small>RESPONSIVE</small>
              <p>Mobile-first development approach</p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          APPROACH
      ========================================= */}
      <section className="section-padding approach-section">

        <div className="container-custom">

          <div className="approach-heading">

            <div>
              <div className="section-label">
                <span></span>
                HOW WE WORK
              </div>

              <h2 className="section-title">
                From first thought
                <br />
                to <span className="gradient-text">final product.</span>
              </h2>
            </div>

            <p>
              A simple, transparent process helps us keep every
              project focused, collaborative and moving forward.
            </p>

          </div>


          <div className="approach-timeline">

            {approach.map((item, index) => (
              <div
                className="approach-item"
                key={item.number}
              >

                <div className="approach-number">
                  {item.number}
                </div>

                <div className="approach-line"></div>

                <div className="approach-content">

                  <span>
                    STEP {item.number}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </div>

                <i className="bi bi-arrow-up-right"></i>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          CAPABILITIES
      ========================================= */}
      <section className="section-padding capabilities-section">

        <div className="container-custom">

          <div className="capabilities-top">

            <div>
              <div className="section-label">
                <span></span>
                WHAT WE DO
              </div>

              <h2 className="section-title">
                Technology with
                <br />
                <span className="gradient-text">
                  a human touch.
                </span>
              </h2>
            </div>

            <p>
              We bring design, development and technology together
              to create digital products that are useful today and
              ready for tomorrow.
            </p>

          </div>


          <div className="capabilities-grid">

            {capabilities.map((item, index) => (
              <div
                className="capability-card"
                key={item.title}
              >

                <div className="capability-top">
                  <span>0{index + 1}</span>

                  <div className="capability-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <div className="capability-arrow">
                  <i className="bi bi-arrow-up-right"></i>
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          VALUES
      ========================================= */}
      <section className="section-padding values-section">

        <div className="container-custom">

          <div className="values-heading">

            <div>
              <div className="section-label">
                <span></span>
                WHAT DRIVES US
              </div>

              <h2 className="section-title">
                Built on
                <br />
                <span className="gradient-text">
                  strong values.
                </span>
              </h2>
            </div>

            <p>
              Our principles shape how we think, communicate,
              design and build.
            </p>

          </div>


          <div className="values-grid">

            {values.map((item) => (
              <article
                className="value-card"
                key={item.number}
              >

                <div className="value-card-top">

                  <span className="value-number">
                    {item.number}
                  </span>

                  <div className="value-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <div className="value-card-line"></div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          WHY US
      ========================================= */}
      <section className="section-padding why-about-section">

        <div className="container-custom">

          <div className="why-about-grid">

            <div className="why-about-left">

              <div className="section-label">
                <span></span>
                WHY THE CODE MUNK
              </div>

              <h2>
                Not just another
                <span className="gradient-text">
                  {" "}development team.
                </span>
              </h2>

              <p>
                We care about the details that users notice and
                the technical decisions that users don't.
              </p>

              <Link
                to="/services"
                className="btn-primary-custom"
              >
                Explore Our Services
                <i className="bi bi-arrow-up-right"></i>
              </Link>

            </div>


            <div className="why-about-right">

              <div className="why-point">
                <span>01</span>

                <div>
                  <h3>Design-minded development</h3>
                  <p>
                    We don't treat design and development as
                    separate worlds. Good code should produce
                    a great experience.
                  </p>
                </div>
              </div>


              <div className="why-point">
                <span>02</span>

                <div>
                  <h3>Built around real users</h3>
                  <p>
                    Every interaction, layout and component is
                    considered from the perspective of the people
                    actually using the product.
                  </p>
                </div>
              </div>


              <div className="why-point">
                <span>03</span>

                <div>
                  <h3>Focused on performance</h3>
                  <p>
                    Responsive layouts, clean code and optimized
                    experiences are part of the process from day one.
                  </p>
                </div>
              </div>


              <div className="why-point">
                <span>04</span>

                <div>
                  <h3>Made to evolve</h3>
                  <p>
                    We build reusable foundations so your digital
                    product can grow without becoming difficult to maintain.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}
      <section className="about-cta">

        <div className="about-cta-grid"></div>
        <div className="about-cta-glow"></div>

        <div className="container-custom">

          <div className="about-cta-inner">

            <div className="section-label">
              <span></span>
              HAVE AN IDEA?
            </div>

            <h2>
              Let's turn your
              <br />
              idea into
              <span className="gradient-text">
                {" "}something real.
              </span>
            </h2>

            <p>
              Whether you have a complete project brief or just
              the first idea, let's start a conversation.
            </p>

            <Link
              to="/contact"
              className="btn-primary-custom"
            >
              Start a Conversation
              <i className="bi bi-arrow-up-right"></i>
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default About;