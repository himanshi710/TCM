
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";

import "./Home.css";

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: "01",
    icon: "bi-window-stack",
    title: "Web Development",
    description:
      "Business websites and digital platforms engineered with responsive layouts, reusable components, clean code and a strong focus on performance.",
    tags: ["React.js", "JavaScript", "HTML5", "CSS3"],
  },
  {
    number: "02",
    icon: "bi-bezier2",
    title: "UI / UX Design",
    description:
      "Interface systems that balance visual identity with usability — from page structure and typography to interaction patterns and responsive states.",
    tags: ["Figma", "UI Systems", "UX", "Prototype"],
  },
  {
    number: "03",
    icon: "bi-phone",
    title: "Web App Development",
    description:
      "Interactive frontend applications with reusable architecture, API integration, responsive behaviour and interfaces designed around real workflows.",
    tags: ["React", "REST API", "State", "Responsive"],
  },
];

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    number: "01",
    title: "Soni's Life Care",
    category: "Healthcare Website",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=90",
  },
  {
    number: "02",
    title: "The Code Munk",
    category: "Digital Studio",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=90",
  },
  {
    number: "03",
    title: "Art Dwarka",
    category: "Creative Platform",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=90",
  },
];

/* =========================================================
   TECHNOLOGIES
========================================================= */

const technologies = [
  "React.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SCSS",
  "Bootstrap",
  "REST API",
  "Git",
];

/* =========================================================
   PROCESS
========================================================= */

const process = [
  {
    number: "01",
    title: "Discover",
    icon: "bi-search",
    text:
      "We understand your business, audience, goals and the actual problem your digital product needs to solve.",
  },
  {
    number: "02",
    title: "Design",
    icon: "bi-bezier2",
    text:
      "We translate the direction into a clear interface system with structure, hierarchy, responsive layouts and interactions.",
  },
  {
    number: "03",
    title: "Develop",
    icon: "bi-code-slash",
    text:
      "We build the experience using modern frontend practices, reusable components and integrations that keep the product maintainable.",
  },
  {
    number: "04",
    title: "Launch",
    icon: "bi-rocket-takeoff",
    text:
      "After testing and refinement, the final experience is prepared for launch with performance and responsive behaviour in focus.",
  },
];

/* =========================================================
   HOME
========================================================= */

const Home = () => {
  return (
    <div className="home-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="home-hero">

        <div className="hero-grid"></div>

        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>
        <div className="hero-glow hero-glow-three"></div>

        <div className="container-custom home-hero-container">

          <div className="home-hero-content">

            <div className="hero-kicker">
              <span></span>
              THE CODE MUNK / DIGITAL STUDIO
            </div>

            <h1>
              Digital experiences
              <br />
              built with
              <span className="gradient-text">
                {" "}purpose.
              </span>
            </h1>

            <p className="hero-description">
              We design and develop modern websites, web applications
              and digital interfaces for businesses that want to look
              credible, communicate clearly and grow online.
            </p>

            <div className="hero-buttons">

              <Link
                to="/projects"
                className="btn-primary-custom"
              >
                Explore Our Work
                <i className="bi bi-arrow-up-right"></i>
              </Link>

              <Link
                to="/contact"
                className="btn-outline-custom"
              >
                Start a Project
                <i className="bi bi-arrow-right"></i>
              </Link>

            </div>

            <div className="hero-trust">

              <div className="hero-trust-item">
                <i className="bi bi-check2-circle"></i>
                <span>Responsive by design</span>
              </div>

              <div className="hero-trust-item">
                <i className="bi bi-check2-circle"></i>
                <span>Modern frontend stack</span>
              </div>

              <div className="hero-trust-item">
                <i className="bi bi-check2-circle"></i>
                <span>Built for real businesses</span>
              </div>

            </div>

          </div>

          {/* =================================================
              HERO VISUAL
          ================================================= */}

          <div className="hero-visual">

            <div className="hero-orbit orbit-one"></div>
            <div className="hero-orbit orbit-two"></div>
            <div className="hero-orbit orbit-three"></div>

            <div className="hero-visual-label label-top">
              <span>01</span>
              DIGITAL EXPERIENCE
            </div>

            <div className="hero-code-card">

              <div className="code-card-top">

                <div className="code-window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <small>thecodemunk / experience.js</small>

              </div>

              <div className="code-content">

                <div>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-white">experience</span>{" "}
                  = {"{"}
                </div>

                <div className="code-indent">
                  <span className="code-cyan">design</span>:{" "}
                  <span className="code-green">
                    "intentional"
                  </span>
                  ,
                </div>

                <div className="code-indent">
                  <span className="code-cyan">technology</span>:{" "}
                  <span className="code-green">
                    "modern"
                  </span>
                  ,
                </div>

                <div className="code-indent">
                  <span className="code-cyan">performance</span>:{" "}
                  <span className="code-green">
                    "fast"
                  </span>
                  ,
                </div>

                <div className="code-indent">
                  <span className="code-cyan">responsive</span>:{" "}
                  <span className="code-green">
                    true
                  </span>
                </div>

                <div>{"};"}</div>

              </div>

              <div className="code-card-bottom">

                <span>
                  <i className="bi bi-circle-fill"></i>
                  BUILD READY
                </span>

                <span>100%</span>

              </div>

            </div>

            <div className="hero-floating-card card-one">

              <div className="floating-icon">
                <i className="bi bi-code-square"></i>
              </div>

              <div>
                <strong>Clean Code</strong>
                <span>Scalable frontend</span>
              </div>

            </div>

            <div className="hero-floating-card card-two">

              <div className="floating-icon">
                <i className="bi bi-speedometer2"></i>
              </div>

              <div>
                <strong>Performance</strong>
                <span>Fast & responsive</span>
              </div>

            </div>

            <div className="hero-visual-badge">

              <span>CRAFTED</span>

              <strong>
                FOR
                <br />
                PEOPLE
              </strong>

            </div>

          </div>

        </div>

        {/* =================================================
            HERO STATS
        ================================================= */}

        <div className="container-custom">

          <div className="hero-stats">

            <div className="hero-stat">
              <strong>2+</strong>
              <span>Years of hands-on experience</span>
            </div>

            <div className="hero-stat">
              <strong>10+</strong>
              <span>Websites & digital interfaces</span>
            </div>

            <div className="hero-stat">
              <strong>15+</strong>
              <span>API integration experiences</span>
            </div>

            <div className="hero-stat">
              <strong>100%</strong>
              <span>Responsive-first approach</span>
            </div>

          </div>

        </div>

        <div className="hero-scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <i className="bi bi-arrow-down"></i>
        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY MARQUEE
      ===================================================== */}

      <section className="tech-strip">

        <div className="container-custom">

          <div className="tech-strip-inner">

            <div className="tech-strip-label">
              <span></span>
              TECHNOLOGY STACK
            </div>

            <div className="tech-list">

              {technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="section-padding home-intro">

        <div className="container-custom">

          <div className="intro-grid">

            <div className="intro-label">

              <div className="section-label">
                <span></span>
                WHO WE ARE
              </div>

              <span className="intro-index">
                01 / 06
              </span>

            </div>

            <div className="intro-content">

              <h2>
                A digital partner for
                <span className="gradient-text">
                  {" "}ambitious ideas.
                </span>
              </h2>

              <p>
                The Code Munk is a frontend-focused digital studio
                creating websites and technology experiences that
                connect strong visual design with practical development.
              </p>

              <p>
                From a first landing page to a complete React-based
                interface, our approach is simple: understand the
                objective, design with intention and build something
                that works beautifully across screens.
              </p>

              <Link
                to="/about"
                className="text-link-custom"
              >
                More about The Code Munk
                <i className="bi bi-arrow-up-right"></i>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="section-padding home-services">

        <div className="container-custom">

          <SectionTitle
            label="WHAT WE DO"
            title="From first idea to <span>finished experience.</span>"
            description="Focused digital services for businesses that need a stronger online presence, a better interface or a reliable frontend product."
          />

          <div className="services-grid">

            {services.map((service) => (
              <ServiceCard
                key={service.number}
                {...service}
              />
            ))}

          </div>

          <div className="services-bottom">

            <div className="services-note">
              <span className="services-note-dot"></span>
              <span>
                Need a custom combination of services?
              </span>
            </div>

            <Link to="/services">
              Explore all capabilities
              <i className="bi bi-arrow-up-right"></i>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED WORK
      ===================================================== */}

      <section className="section-padding home-projects">

        <div className="container-custom">

          <div className="projects-heading-row">

            <SectionTitle
              label="SELECTED WORK"
              title="Digital work with a <span>clear purpose.</span>"
              description="A glimpse into the kind of websites, interfaces and digital experiences we create."
            />

            <div className="projects-heading-meta">
              <span>03</span>
              <small>FEATURED PROJECTS</small>
            </div>

          </div>

          <div className="projects-grid">

            {projects.map((project) => (
              <ProjectCard
                key={project.number}
                {...project}
              />
            ))}

          </div>

          <div className="projects-button">

            <Link
              to="/projects"
              className="btn-outline-custom"
            >
              View Complete Portfolio
              <i className="bi bi-arrow-up-right"></i>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES / WHY US
      ===================================================== */}

      <section className="section-padding why-section">

        <div className="container-custom">

          <div className="why-grid">

            <div className="why-content">

              <div className="section-label">
                <span></span>
                THE DIFFERENCE
              </div>

              <span className="why-big-number">
                02
              </span>

              <h2>
                Good design gets
                <br />
                attention.
                <span className="gradient-text">
                  {" "}Good development
                  <br />
                  keeps it.
                </span>
              </h2>

              <p>
                A beautiful interface is only the beginning. We care
                about the details behind it — responsive behaviour,
                component structure, performance, accessibility and
                the experience a real user has on the page.
              </p>

              <Link
                to="/about"
                className="btn-primary-custom"
              >
                Discover Our Approach
                <i className="bi bi-arrow-up-right"></i>
              </Link>

            </div>


            <div className="why-features">

              <div className="why-feature">

                <div className="why-feature-number">
                  01
                </div>

                <div className="why-feature-icon">
                  <i className="bi bi-stars"></i>
                </div>

                <div>
                  <h3>Distinct Visual Identity</h3>

                  <p>
                    We avoid generic layouts and build interfaces
                    around the personality, audience and goals of
                    the brand.
                  </p>
                </div>

              </div>


              <div className="why-feature">

                <div className="why-feature-number">
                  02
                </div>

                <div className="why-feature-icon">
                  <i className="bi bi-code-square"></i>
                </div>

                <div>
                  <h3>Structured Development</h3>

                  <p>
                    Reusable React components, organised styling
                    and practical frontend architecture make the
                    product easier to evolve.
                  </p>
                </div>

              </div>


              <div className="why-feature">

                <div className="why-feature-number">
                  03
                </div>

                <div className="why-feature-icon">
                  <i className="bi bi-phone"></i>
                </div>

                <div>
                  <h3>Responsive Everywhere</h3>

                  <p>
                    Desktop, tablet or mobile — the experience is
                    designed to remain clear, usable and visually
                    consistent across screen sizes.
                  </p>
                </div>

              </div>


              <div className="why-feature">

                <div className="why-feature-number">
                  04
                </div>

                <div className="why-feature-icon">
                  <i className="bi bi-lightning-charge"></i>
                </div>

                <div>
                  <h3>Performance Mindset</h3>

                  <p>
                    We keep the frontend focused, lightweight and
                    purposeful so the visual experience does not
                    come at the cost of usability.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="section-padding home-process">

        <div className="container-custom">

          <SectionTitle
            label="HOW WE WORK"
            title="A clear process. <span>Better outcomes.</span>"
            description="Every project is different, but the way we approach the work stays structured, transparent and focused on the final experience."
          />

          <div className="process-grid">

            {process.map((item) => (
              <div
                className="process-card"
                key={item.number}
              >

                <div className="process-card-top">

                  <span>{item.number}</span>

                  <i className={`bi ${item.icon}`}></i>

                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <div className="process-card-line"></div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          TECH CAPABILITIES
      ===================================================== */}

      <section className="home-capabilities">

        <div className="container-custom">

          <div className="capabilities-grid">

            <div className="capabilities-heading">

              <div className="section-label">
                <span></span>
                BUILT WITH MODERN TOOLS
              </div>

              <h2>
                Technology should
                <span className="gradient-text">
                  {" "}support the idea.
                </span>
              </h2>

              <p>
                Our stack is centred around modern frontend
                development — giving us the flexibility to create
                everything from polished marketing websites to
                interactive application interfaces.
              </p>

            </div>

            <div className="capabilities-list">

              <div>
                <span>01</span>
                <strong>Frontend Development</strong>
                <small>React.js / JavaScript / HTML5 / CSS3</small>
              </div>

              <div>
                <span>02</span>
                <strong>Interface Systems</strong>
                <small>Responsive UI / SCSS / Bootstrap / Components</small>
              </div>

              <div>
                <span>03</span>
                <strong>API Integration</strong>
                <small>REST API / Data-driven interfaces / Integration</small>
              </div>

              <div>
                <span>04</span>
                <strong>Development Workflow</strong>
                <small>Git / GitHub / npm / Modern tooling</small>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="home-cta">

        <div className="cta-grid"></div>

        <div className="cta-glow"></div>

        <div className="cta-orbit"></div>

        <div className="container-custom">

          <div className="cta-inner">

            <span className="cta-number">
              06 / 06
            </span>

            <div className="section-label">
              <span></span>
              HAVE A PROJECT IN MIND?
            </div>

            <h2>
              Your idea deserves
              <br />
              a digital experience
              <span className="gradient-text">
                {" "}worth remembering.
              </span>
            </h2>

            <p>
              Tell us what you're building, where you're stuck or
              simply where you want to go. We'll help you find the
              right digital direction.
            </p>

            <div className="cta-actions">

              <Link
                to="/contact"
                className="btn-primary-custom"
              >
                Start a Conversation
                <i className="bi bi-arrow-up-right"></i>
              </Link>

              <a
                href="mailto:hello@thecodemunk.in"
                className="cta-email"
              >
                hello@thecodemunk.in
                <i className="bi bi-arrow-up-right"></i>
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;

