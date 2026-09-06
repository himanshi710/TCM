import { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "Digital Healthcare",
    category: "Healthcare",
    type: "Web Development",
    year: "2026",
    description:
      "A modern healthcare-focused digital experience designed to make information easier to discover and services easier to access.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=90",
    tags: ["React", "Responsive UI", "API"],
  },
  {
    number: "02",
    title: "Technology Platform",
    category: "Technology",
    type: "Web Application",
    year: "2026",
    description:
      "A technology-driven interface combining structured information, modern visuals and a scalable frontend experience.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=90",
    tags: ["React.js", "JavaScript", "REST API"],
  },
  {
    number: "03",
    title: "Creative Studio",
    category: "Creative",
    type: "Brand Experience",
    year: "2026",
    description:
      "A bold digital identity created for a creative-focused brand with immersive layouts and strong visual storytelling.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1600&q=90",
    tags: ["UI / UX", "Branding", "Frontend"],
  },
  {
    number: "04",
    title: "Digital Workspace",
    category: "SaaS",
    type: "Product Interface",
    year: "2026",
    description:
      "A clean productivity experience focused on usability, information hierarchy and efficient digital workflows.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=90",
    tags: ["Dashboard", "Responsive", "UX"],
  },
  {
    number: "05",
    title: "Mobile Experience",
    category: "Mobile App",
    type: "Application UI",
    year: "2026",
    description:
      "A mobile-first experience designed around simple navigation, accessible interactions and a consistent visual system.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=90",
    tags: ["Mobile UI", "React Native", "API"],
  },
  {
    number: "06",
    title: "Brand Experience",
    category: "Branding",
    type: "Digital Experience",
    year: "2026",
    description:
      "A distinctive digital presence combining brand personality, editorial layouts and conversion-focused experiences.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=90",
    tags: ["Creative", "UI Design", "Development"],
  },
];

const categories = [
  "All",
  "Healthcare",
  "Technology",
  "Creative",
  "SaaS",
  "Mobile App",
  "Branding",
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const featuredProject = projects[0];

  return (
    <div className="projects-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="projects-hero">

        <div className="projects-hero-bg"></div>
        <div className="projects-hero-grid"></div>
        <div className="projects-hero-glow"></div>

        <div className="container-custom projects-hero-inner">

          <div className="projects-hero-content">

            <div className="projects-kicker">
              <span></span>
              OUR WORK
            </div>

            <h1>
              Ideas made
              <span className="gradient-text">
                {" "}visible.
              </span>
            </h1>

            <p>
              We turn ideas, business goals and creative
              thinking into digital experiences people can
              actually use and remember.
            </p>

            <div className="projects-hero-meta">

              <div>
                <strong>06</strong>
                <span>SELECTED PROJECTS</span>
              </div>

              <div>
                <strong>03+</strong>
                <span>CORE CATEGORIES</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>NEW IDEAS</span>
              </div>

            </div>

          </div>

        </div>

        <div className="projects-scroll">
          <span>SCROLL TO EXPLORE</span>
          <i className="bi bi-arrow-down"></i>
        </div>

      </section>


      {/* =========================================
          FEATURED PROJECT
      ========================================= */}

      <section className="section-padding featured-project-section">

        <div className="container-custom">

          <div className="projects-section-top">

            <div>

              <div className="section-label">
                <span></span>
                FEATURED WORK
              </div>

              <h2 className="section-title">
                One project.
                <br />
                <span className="gradient-text">
                  One story.
                </span>
              </h2>

            </div>

            <span className="project-index">
              01 / 06
            </span>

          </div>


          <Link
            to="/contact"
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
                  FEATURED PROJECT
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
                VIEW PROJECT
                <i className="bi bi-arrow-up-right"></i>
              </span>

            </div>

          </Link>

        </div>

      </section>


      {/* =========================================
          ALL PROJECTS
      ========================================= */}

      <section className="section-padding projects-list">

        <div className="container-custom">

          <div className="projects-page-heading">

            <div>

              <div className="section-label">
                <span></span>
                SELECTED PROJECTS
              </div>

              <h2 className="section-title">
                Work that speaks
                <br />
                <span className="gradient-text">
                  for itself.
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

              <Link
                to="/contact"
                className="full-project-card"
                key={project.number}
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


                <div className="full-project-info">

                  <div>

                    <span>
                      {project.type}
                    </span>

                    <h3>
                      {project.title}
                    </h3>

                  </div>

                  <div className="project-info-arrow">
                    <i className="bi bi-arrow-up-right"></i>
                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          PROJECT PHILOSOPHY
      ========================================= */}

      <section className="projects-philosophy">

        <div className="container-custom">

          <div className="philosophy-grid">

            <div className="philosophy-number">
              06
            </div>

            <div className="philosophy-content">

              <div className="section-label">
                <span></span>
                OUR APPROACH
              </div>

              <h2>
                Good design gets
                <br />
                attention.
                <span className="gradient-text">
                  {" "}Great experiences
                  <br />
                  get remembered.
                </span>
              </h2>

              <p>
                We don't build digital products simply to
                make them look good. We think about the
                people using them, the businesses behind
                them and the experience connecting both.
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
                <strong>CLARITY</strong>
                <p>
                  Simple interfaces with a clear purpose.
                </p>
              </div>

              <div>
                <span>02</span>
                <strong>CRAFT</strong>
                <p>
                  Attention to detail in every interaction.
                </p>
              </div>

              <div>
                <span>03</span>
                <strong>PERFORMANCE</strong>
                <p>
                  Fast and responsive digital experiences.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="projects-cta">

        <div className="projects-cta-grid"></div>
        <div className="projects-cta-glow"></div>

        <div className="container-custom">

          <div className="projects-cta-inner">

            <span>
              HAVE AN IDEA?
            </span>

            <h2>
              Your project could
              <br />
              be the next
              <span className="gradient-text">
                {" "}story.
              </span>
            </h2>

            <p>
              Tell us what you're building, what you're
              trying to solve and where you want to go.
              Let's create something worth showing.
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