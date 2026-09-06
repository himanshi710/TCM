
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "Soni's Life Care",
    category: "Healthcare",
    type: "Business Website",
    year: "2026",
    description:
      "A professional healthcare website created to present services, build patient trust and make important information easy to discover across desktop and mobile devices.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=90",
    tags: ["React.js", "Responsive UI", "SEO"],
    website: "https://sonislifecare.in/",
    highlights: [
      "Responsive healthcare interface",
      "Clear service presentation",
      "Mobile-first experience",
      "Conversion-focused sections",
    ],
  },
  {
    number: "02",
    title: "The Code Munk",
    category: "Technology",
    type: "Digital Studio Website",
    year: "2026",
    description:
      "The Code Munk's own digital presence, designed around modern frontend development, premium visual storytelling and a structured service experience.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=90",
    tags: ["React.js", "JavaScript", "CSS3", "Bootstrap"],
    website: "https://thecodemunk.in/",
    highlights: [
      "React-based architecture",
      "Premium dark interface",
      "Responsive navigation",
      "Reusable UI components",
    ],
  },
  {
    number: "03",
    title: "Art Dwarka",
    category: "Creative",
    type: "Creative Website",
    year: "2026",
    description:
      "A visually-led website experience focused on presenting creative work through strong imagery, clean layouts and an engaging browsing experience.",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1600&q=90",
    tags: ["React", "UI Design", "Responsive"],
    website: "https://artdwarka.com/",
    highlights: [
      "Visual-first layouts",
      "Responsive gallery experience",
      "Structured content hierarchy",
      "Modern interaction patterns",
    ],
  },
  {
    number: "04",
    title: "Mr Makeover Salons",
    category: "Business",
    type: "Business Website",
    year: "2026",
    description:
      "A modern salon-focused digital experience built to showcase services, establish brand presence and make the customer journey simple.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=90",
    tags: ["React.js", "UI / UX", "Responsive UI"],
    website: "https://mrmakeoversalons.in/",
    highlights: [
      "Service-focused structure",
      "Mobile-friendly interface",
      "Visual brand presentation",
      "Simple customer journey",
    ],
  },
  {
    number: "05",
    title: "TribsP Network",
    category: "Organization",
    type: "Organization Website",
    year: "2026",
    description:
      "A structured digital platform created to communicate the organization's purpose, information and activities through a clear and accessible web experience.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=90",
    tags: ["React.js", "Frontend", "Responsive"],
    website: "https://tribspnetwork.org/",
    highlights: [
      "Information architecture",
      "Responsive frontend",
      "Accessible content structure",
      "Clear navigation experience",
    ],
  },
];

const categories = [
  "All",
  "Healthcare",
  "Technology",
  "Creative",
  "Business",
  "Organization",
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
        (project) => project.category === activeCategory
      );

  const featuredProject = projects[1];

  return (
    <div className="projects-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="projects-hero">

        <div className="projects-hero-bg"></div>
        <div className="projects-hero-grid"></div>
        <div className="projects-hero-glow"></div>

        <div className="container-custom projects-hero-inner">

          <div className="projects-hero-content">

            <div className="projects-kicker">
              <span></span>
              SELECTED WORK / REACT & FRONTEND
            </div>

            <h1>
              We build
              <span className="gradient-text">
                {" "}what people use.
              </span>
            </h1>

            <p>
              From business websites to modern digital interfaces,
              we use React, JavaScript and thoughtful frontend
              engineering to turn ideas into real experiences.
            </p>

            <div className="projects-hero-meta">

              <div>
                <strong>05</strong>
                <span>LIVE PROJECTS</span>
              </div>

              <div>
                <strong>01</strong>
                <span>CORE STACK</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>RESPONSIVE FIRST</span>
              </div>

            </div>

          </div>

          <div className="projects-hero-code">

            <div className="code-window">

              <div className="code-window-top">
                <span></span>
                <span></span>
                <span></span>

                <small>
                  project.jsx
                </small>
              </div>

              <div className="code-window-body">

                <div>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-cyan">project</span>{" "}
                  =
                </div>

                <div className="code-indent">
                  {"{"}
                </div>

                <div className="code-indent-2">
                  <span className="code-key">stack:</span>{" "}
                  <span className="code-string">
                    "React.js"
                  </span>
                </div>

                <div className="code-indent-2">
                  <span className="code-key">ui:</span>{" "}
                  <span className="code-string">
                    "Responsive"
                  </span>
                </div>

                <div className="code-indent-2">
                  <span className="code-key">api:</span>{" "}
                  <span className="code-string">
                    "Ready"
                  </span>
                </div>

                <div className="code-indent">
                  {"}"}
                </div>

                <div className="code-comment">
                  // built for real users
                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="projects-scroll">
          <span>SCROLL TO EXPLORE</span>
          <i className="bi bi-arrow-down"></i>
        </div>

      </section>


      {/* =====================================================
          FEATURED PROJECT
      ===================================================== */}

      <section className="section-padding featured-project-section">

        <div className="container-custom">

          <div className="projects-section-top">

            <div>

              <div className="section-label">
                <span></span>
                FEATURED PROJECT
              </div>

              <h2 className="section-title">
                Built by us.
                <br />
                <span className="gradient-text">
                  Used as our identity.
                </span>
              </h2>

            </div>

            <span className="project-index">
              02 / 05
            </span>

          </div>


          <a
            href={featuredProject.website}
            target="_blank"
            rel="noreferrer"
            className="featured-project"
          >

            <div className="featured-project-image">

              <img
                src={featuredProject.image}
                alt={featuredProject.title}
              />

              <div className="featured-project-overlay"></div>

              <div className="featured-project-top">

                <span>
                  THE CODE MUNK
                </span>

                <span>
                  {featuredProject.year}
                </span>

              </div>

              <div className="featured-project-arrow">
                <i className="bi bi-arrow-up-right"></i>
              </div>

              <div className="featured-project-content">

                <span>
                  {featuredProject.category}
                </span>

                <h3>
                  {featuredProject.title}
                </h3>

                <p>
                  {featuredProject.description}
                </p>

              </div>

            </div>


            <div className="featured-project-bottom">

              <div>

                {featuredProject.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}

              </div>

              <span>
                VISIT WEBSITE
                <i className="bi bi-arrow-up-right"></i>
              </span>

            </div>

          </a>

        </div>

      </section>


      {/* =====================================================
          PROJECT LIST
      ===================================================== */}

      <section className="section-padding projects-list">

        <div className="container-custom">

          <div className="projects-page-heading">

            <div>

              <div className="section-label">
                <span></span>
                OUR PROJECTS
              </div>

              <h2 className="section-title">
                Real work.
                <br />
                <span className="gradient-text">
                  Real experiences.
                </span>
              </h2>

            </div>

            <div className="projects-count-box">

              <strong>
                {String(filteredProjects.length).padStart(2, "0")}
              </strong>

              <span>
                PROJECTS
              </span>

            </div>

          </div>


          {/* FILTERS */}

          <div className="project-filters">

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>

            ))}

          </div>


          {/* PROJECT GRID */}

          <div className="all-projects-grid">

            {filteredProjects.map((project) => (

              <article
                className="full-project-card"
                key={project.number}
              >

                <a
                  href={project.website}
                  target="_blank"
                  rel="noreferrer"
                  className="full-project-image-link"
                >

                  <div className="full-project-image">

                    <img
                      src={project.image}
                      alt={project.title}
                    />

                    <div className="full-project-overlay"></div>

                    <div className="full-project-top">

                      <span>
                        {project.number}
                      </span>

                      <span>
                        {project.year}
                      </span>

                    </div>

                    <div className="full-project-open">
                      <i className="bi bi-arrow-up-right"></i>
                    </div>

                    <div className="full-project-category">
                      {project.category}
                    </div>

                  </div>

                </a>


                <div className="full-project-info">

                  <div className="project-info-main">

                    <span>
                      {project.type}
                    </span>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                    <div className="project-card-tags">

                      {project.tags.map((tag) => (
                        <span key={tag}>
                          {tag}
                        </span>
                      ))}

                    </div>

                  </div>

                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="project-info-arrow"
                    aria-label={`Visit ${project.title}`}
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </a>

                </div>


                <div className="project-highlights">

                  <span>
                    WHAT WE BUILT
                  </span>

                  <div>

                    {project.highlights.map((item) => (
                      <p key={item}>
                        <i className="bi bi-check2"></i>
                        {item}
                      </p>
                    ))}

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          REACT STACK
      ===================================================== */}

      <section className="projects-stack">

        <div className="container-custom">

          <div className="stack-heading">

            <div>

              <div className="section-label">
                <span></span>
                OUR FRONTEND STACK
              </div>

              <h2>
                Simple tools.
                <br />
                <span className="gradient-text">
                  Strong execution.
                </span>
              </h2>

            </div>

            <p>
              We focus on practical technologies that help us
              create maintainable, responsive and scalable
              frontend experiences.
            </p>

          </div>


          <div className="react-stack-grid">

            <div className="react-stack-card featured-stack">

              <div className="stack-icon">
                <i className="bi bi-filetype-jsx"></i>
              </div>

              <span>01 / PRIMARY</span>

              <h3>
                React.js
              </h3>

              <p>
                Component-driven frontend development for
                interactive and maintainable interfaces.
              </p>

            </div>


            <div className="react-stack-card">

              <div className="stack-icon">
                <i className="bi bi-filetype-js"></i>
              </div>

              <span>02 / CORE</span>

              <h3>
                JavaScript
              </h3>

              <p>
                Modern ES6+ JavaScript for application logic,
                interactions and dynamic experiences.
              </p>

            </div>


            <div className="react-stack-card">

              <div className="stack-icon">
                <i className="bi bi-braces"></i>
              </div>

              <span>03 / STRUCTURE</span>

              <h3>
                HTML5
              </h3>

              <p>
                Semantic structure designed for accessibility,
                SEO and reliable browser experiences.
              </p>

            </div>


            <div className="react-stack-card">

              <div className="stack-icon">
                <i className="bi bi-palette"></i>
              </div>

              <span>04 / VISUAL</span>

              <h3>
                CSS3
              </h3>

              <p>
                Responsive layouts, animations, grids and
                polished visual systems.
              </p>

            </div>


            <div className="react-stack-card">

              <div className="stack-icon">
                <i className="bi bi-bootstrap"></i>
              </div>

              <span>05 / UI SYSTEM</span>

              <h3>
                Bootstrap
              </h3>

              <p>
                Flexible responsive utilities and components
                for efficient interface development.
              </p>

            </div>


            <div className="react-stack-card">

              <div className="stack-icon">
                <i className="bi bi-cloud-arrow-down"></i>
              </div>

              <span>06 / INTEGRATION</span>

              <h3>
                REST API
              </h3>

              <p>
                Connecting frontend experiences with structured
                data and real application workflows.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="projects-philosophy">

        <div className="container-custom">

          <div className="philosophy-grid">

            <div className="philosophy-number">
              06
            </div>

            <div className="philosophy-content">

              <div className="section-label">
                <span></span>
                HOW WE BUILD
              </div>

              <h2>
                Good websites look
                <br />
                good.
                <span className="gradient-text">
                  {" "}Great websites
                  <br />
                  work better.
                </span>
              </h2>

              <p>
                Every project starts with understanding the
                purpose behind the website. From structure and
                responsive layouts to API integration and final
                refinement, we focus on creating experiences
                that are useful, fast and easy to navigate.
              </p>

              <Link
                to="/services"
                className="btn-outline-custom"
              >
                Explore Our Services
                <i className="bi bi-arrow-up-right"></i>
              </Link>

            </div>


            <div className="philosophy-side">

              <div>
                <span>01</span>

                <strong>
                  THINK
                </strong>

                <p>
                  Understand the business and user problem.
                </p>
              </div>

              <div>
                <span>02</span>

                <strong>
                  DESIGN
                </strong>

                <p>
                  Create a clear and purposeful interface.
                </p>
              </div>

              <div>
                <span>03</span>

                <strong>
                  DEVELOP
                </strong>

                <p>
                  Build responsive React components and flows.
                </p>
              </div>

              <div>
                <span>04</span>

                <strong>
                  REFINE
                </strong>

                <p>
                  Test, optimize and polish the final experience.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="projects-cta">

        <div className="projects-cta-grid"></div>
        <div className="projects-cta-glow"></div>

        <div className="container-custom">

          <div className="projects-cta-inner">

            <span>
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let's build your
              <br />
              next digital
              <span className="gradient-text">
                {" "}experience.
              </span>
            </h2>

            <p>
              Have a website idea, existing design or business
              that needs a better digital presence? Tell us what
              you're building and we'll take it from there.
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

export default Projects;

