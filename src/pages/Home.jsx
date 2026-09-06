
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";

import "./Home.css";

const services = [
  {
    number: "01",
    icon: "bi-window-stack",
    title: "Web Development",
    description:
      "Modern, responsive and high-performance websites built with clean and scalable frontend technology.",
    tags: ["React.js", "JavaScript", "HTML5", "CSS3"],
  },
  {
    number: "02",
    icon: "bi-bezier2",
    title: "UI / UX Design",
    description:
      "Beautiful interfaces designed around usability, visual hierarchy and memorable digital experiences.",
    tags: ["Figma", "UI Design", "UX", "Prototype"],
  },
  {
    number: "03",
    icon: "bi-phone",
    title: "App Development",
    description:
      "Responsive mobile-first experiences with smooth interactions and API-driven functionality.",
    tags: ["React Native", "Mobile UI", "API"],
  },
];

const projects = [
  {
    number: "01",
    title: "Digital Healthcare",
    category: "Healthcare Website",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "Modern Technology",
    category: "Technology Platform",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    title: "Creative Digital",
    category: "Creative Platform",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85",
  },
];

const Home = () => {
  return (
    <div className="home-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="home-hero">

        <div className="hero-grid"></div>

        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="container-custom home-hero-container">

          <div className="home-hero-content">

            <div className="hero-kicker">
              <span></span>
              DIGITAL PRODUCTS • WEB • TECHNOLOGY
            </div>

            <h1>
              We turn ideas into
              <span className="gradient-text">
                {" "}digital reality.
              </span>
            </h1>

            <p>
              The Code Munk creates modern websites, digital
              experiences and technology solutions that help
              brands move forward.
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
                Let's Talk
                <i className="bi bi-arrow-right"></i>
              </Link>

            </div>

          </div>

          {/* Hero Visual */}

          <div className="hero-visual">

            <div className="hero-orbit orbit-one"></div>
            <div className="hero-orbit orbit-two"></div>
            <div className="hero-orbit orbit-three"></div>

            <div className="hero-code-card">

              <div className="code-card-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="code-content">
                <span className="code-purple">
                  const
                </span>{" "}
                <span className="code-white">
                  future
                </span>{" "}
                = {"{"}
                <br />

                <span className="code-space">
                  &nbsp;&nbsp;
                </span>

                <span className="code-cyan">
                  design
                </span>
                :{" "}
                <span className="code-green">
                  "beautiful"
                </span>
                ,
                <br />

                <span className="code-space">
                  &nbsp;&nbsp;
                </span>

                <span className="code-cyan">
                  technology
                </span>
                :{" "}
                <span className="code-green">
                  "powerful"
                </span>
                ,
                <br />

                <span className="code-space">
                  &nbsp;&nbsp;
                </span>

                <span className="code-cyan">
                  experience
                </span>
                :{" "}
                <span className="code-green">
                  "memorable"
                </span>
                <br />

                {"}"};
              </div>

            </div>

            <div className="hero-floating-card card-one">
              <i className="bi bi-code-slash"></i>
              <span>Clean Code</span>
            </div>

            <div className="hero-floating-card card-two">
              <i className="bi bi-lightning-charge"></i>
              <span>Fast & Responsive</span>
            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="container-custom">

          <div className="hero-stats">

            <div className="hero-stat">
              <strong>2+</strong>
              <span>Years Experience</span>
            </div>

            <div className="hero-stat">
              <strong>10+</strong>
              <span>Digital Projects</span>
            </div>

            <div className="hero-stat">
              <strong>15+</strong>
              <span>API Integrations</span>
            </div>

            <div className="hero-stat">
              <strong>100%</strong>
              <span>Responsive Approach</span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          TECH STRIP
      ========================= */}

      <section className="tech-strip">

        <div className="container-custom">

          <div className="tech-strip-inner">

            <span>TECHNOLOGIES WE USE</span>

            <div className="tech-list">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>SCSS</span>
              <span>Bootstrap</span>
              <span>REST API</span>
              <span>GitHub</span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          SERVICES
      ========================= */}

      <section className="section-padding home-services">

        <div className="container-custom">

          <SectionTitle
            label="WHAT WE DO"
            title="Digital solutions built to <span>move.</span>"
            description="From strategy and design to development and launch, we create digital experiences that are fast, useful and built for real people."
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

            <p>
              Need something more specific?
            </p>

            <Link to="/services">
              View all services
              <i className="bi bi-arrow-up-right"></i>
            </Link>

          </div>

        </div>

      </section>


      {/* =========================
          PROJECTS
      ========================= */}

      <section className="section-padding home-projects">

        <div className="container-custom">

          <SectionTitle
            label="SELECTED WORK"
            title="Ideas we've turned into <span>reality.</span>"
            description="A selection of digital experiences, websites and interfaces built with purpose."
          />

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
              View All Projects
              <i className="bi bi-arrow-up-right"></i>
            </Link>

          </div>

        </div>

      </section>


      {/* =========================
          WHY US
      ========================= */}

      <section className="section-padding why-section">

        <div className="container-custom">

          <div className="why-grid">

            <div className="why-content">

              <div className="section-label">
                <span></span>
                WHY THE CODE MUNK
              </div>

              <h2>
                We don't just build
                <span className="gradient-text">
                  {" "}websites.
                </span>
              </h2>

              <p>
                We combine thoughtful design, clean development
                and modern technology to create products that
                actually work for businesses and their users.
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
                <div className="why-feature-icon">
                  <i className="bi bi-stars"></i>
                </div>

                <div>
                  <h3>Creative Thinking</h3>
                  <p>
                    We look beyond templates and create
                    experiences with a distinct identity.
                  </p>
                </div>
              </div>


              <div className="why-feature">
                <div className="why-feature-icon">
                  <i className="bi bi-code-square"></i>
                </div>

                <div>
                  <h3>Clean Development</h3>
                  <p>
                    Scalable, maintainable and responsive
                    frontend code built with modern standards.
                  </p>
                </div>
              </div>


              <div className="why-feature">
                <div className="why-feature-icon">
                  <i className="bi bi-speedometer2"></i>
                </div>

                <div>
                  <h3>Performance First</h3>
                  <p>
                    Fast loading experiences with responsive
                    layouts and optimized interactions.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="home-cta">

        <div className="cta-grid"></div>

        <div className="cta-glow"></div>

        <div className="container-custom">

          <div className="cta-inner">

            <div className="section-label">
              <span></span>
              HAVE A PROJECT IN MIND?
            </div>

            <h2>
              Let's build something
              <span className="gradient-text">
                {" "}great.
              </span>
            </h2>

            <p>
              Tell us about your idea and let's turn it into
              a digital experience people remember.
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

export default Home;

