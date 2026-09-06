import { Link } from "react-router-dom";
import "./Technologies.css";

const technologies = [
  {
    icon: "bi-filetype-js",
    title: "JavaScript",
    type: "LANGUAGE",
    level: "CORE",
    code: "JS / ES6+",
    text: "The logic layer behind interactive experiences, dynamic interfaces and API-driven applications.",
    tags: ["ES6+", "Async", "DOM", "Logic"],
    accent: "js",
  },
  {
    icon: "bi-filetype-jsx",
    title: "React.js",
    type: "FRONTEND",
    level: "PRIMARY",
    code: "REACT / UI",
    text: "Component-driven frontend architecture for reusable, maintainable and high-quality digital products.",
    tags: ["Components", "Hooks", "State", "SPA"],
    accent: "react",
  },
  {
    icon: "bi-filetype-html",
    title: "HTML5",
    type: "WEB FOUNDATION",
    level: "CORE",
    code: "HTML / SEMANTIC",
    text: "Semantic markup that creates accessible, structured and search-friendly foundations for every interface.",
    tags: ["Semantic", "SEO", "Accessibility", "Structure"],
    accent: "html",
  },
  {
    icon: "bi-filetype-css",
    title: "CSS3",
    type: "VISUAL SYSTEM",
    level: "CORE",
    code: "CSS / UI",
    text: "Precision styling, responsive layouts, transitions and visual systems crafted for every screen size.",
    tags: ["Flexbox", "Grid", "Animation", "Responsive"],
    accent: "css",
  },
  {
    icon: "bi-bootstrap",
    title: "Bootstrap",
    type: "UI FRAMEWORK",
    level: "UI SYSTEM",
    code: "BOOTSTRAP 5",
    text: "A practical responsive framework for building consistent layouts and interfaces efficiently.",
    tags: ["Grid", "Components", "Utilities", "Responsive"],
    accent: "bootstrap",
  },
  {
    icon: "bi-git",
    title: "Git",
    type: "VERSION CONTROL",
    level: "WORKFLOW",
    code: "GIT / VCS",
    text: "Structured version control that keeps development organized, traceable and easier to collaborate on.",
    tags: ["Branches", "Commits", "Merge", "Workflow"],
    accent: "git",
  },
  {
    icon: "bi-braces",
    title: "REST API",
    type: "INTEGRATION",
    level: "DATA",
    code: "API / JSON",
    text: "Connecting frontend experiences with real data, services and business systems through clean API integration.",
    tags: ["JSON", "Axios", "CRUD", "Integration"],
    accent: "api",
  },
  {
    icon: "bi-phone",
    title: "Responsive UI",
    type: "EXPERIENCE",
    level: "EVERYWHERE",
    code: "MOBILE / DESKTOP",
    text: "Interfaces engineered to feel natural across mobile, tablet, laptop and large desktop displays.",
    tags: ["Mobile", "Tablet", "Desktop", "UX"],
    accent: "responsive",
  },
];

const principles = [
  {
    number: "01",
    title: "PERFORMANCE",
    text: "Interfaces should feel fast, responsive and purposeful.",
    icon: "bi-lightning-charge",
  },
  {
    number: "02",
    title: "SCALABILITY",
    text: "The foundation should support future features and growth.",
    icon: "bi-diagram-3",
  },
  {
    number: "03",
    title: "MAINTAINABILITY",
    text: "Readable architecture makes future improvements easier.",
    icon: "bi-layers",
  },
  {
    number: "04",
    title: "FLEXIBILITY",
    text: "Technology should adapt as the product evolves.",
    icon: "bi-arrows-angle-expand",
  },
];

const workflow = [
  {
    number: "01",
    icon: "bi-lightbulb",
    title: "Understand",
    text: "We begin with the business goal, audience, content and technical requirements.",
  },
  {
    number: "02",
    icon: "bi-bezier2",
    title: "Structure",
    text: "We define information hierarchy, components, pages and interaction patterns.",
  },
  {
    number: "03",
    icon: "bi-code-slash",
    title: "Build",
    text: "We turn the structure into reusable components and clean frontend code.",
  },
  {
    number: "04",
    icon: "bi-speedometer2",
    title: "Refine",
    text: "We improve responsiveness, performance, consistency and overall experience.",
  },
];

const Technologies = () => {
  return (
    <div className="technologies-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="technologies-hero">

        <div className="technologies-hero-bg"></div>
        <div className="technologies-hero-grid"></div>
        <div className="technologies-hero-glow"></div>

        <div className="tech-hero-noise"></div>

        <div className="container-custom technologies-hero-inner">

          <div className="technologies-hero-content">

            <div className="technologies-kicker">
              <span></span>
              TECHNOLOGY / 01
            </div>

            <div className="hero-mini-label">
              DIGITAL ENGINEERING SYSTEM
            </div>

            <h1>
              Technology
              <span className="gradient-text">
                {" "}that works.
              </span>
            </h1>

            <p>
              We use practical, modern technologies to build
              digital experiences that are fast, responsive,
              maintainable and designed around real business goals.
            </p>

            <div className="technology-hero-actions">

              <Link
                to="/contact"
                className="btn-primary-custom"
              >
                Build With Us
                <i className="bi bi-arrow-up-right"></i>
              </Link>

              <a
                href="#technology-stack"
                className="btn-outline-custom"
              >
                Explore Stack
                <i className="bi bi-arrow-down"></i>
              </a>

            </div>

            <div className="hero-trust-row">

              <div>
                <i className="bi bi-check2-circle"></i>
                <span>MODERN STACK</span>
              </div>

              <div>
                <i className="bi bi-check2-circle"></i>
                <span>RESPONSIVE FIRST</span>
              </div>

              <div>
                <i className="bi bi-check2-circle"></i>
                <span>API READY</span>
              </div>

            </div>

          </div>


          {/* =================================================
              HERO TECH VISUAL
          ================================================= */}

          <div className="tech-orbit">

            <div className="orbit-status">
              <span></span>
              SYSTEM ONLINE
            </div>

            <div className="tech-orbit-ring orbit-ring-one"></div>
            <div className="tech-orbit-ring orbit-ring-two"></div>
            <div className="tech-orbit-ring orbit-ring-three"></div>

            <div className="orbit-cross orbit-cross-top"></div>
            <div className="orbit-cross orbit-cross-right"></div>
            <div className="orbit-cross orbit-cross-bottom"></div>
            <div className="orbit-cross orbit-cross-left"></div>

            <div className="tech-orbit-center">

              <div className="center-code">
                &lt;/&gt;
              </div>

              <small>THE CODE MUNK</small>

              <span className="center-status">
                ENGINEERING
              </span>

            </div>


            <div className="orbit-tech orbit-tech-one">
              <i className="bi bi-filetype-jsx"></i>
              <span>REACT</span>
            </div>

            <div className="orbit-tech orbit-tech-two">
              <i className="bi bi-filetype-js"></i>
              <span>JAVASCRIPT</span>
            </div>

            <div className="orbit-tech orbit-tech-three">
              <i className="bi bi-filetype-css"></i>
              <span>CSS3</span>
            </div>

            <div className="orbit-tech orbit-tech-four">
              <i className="bi bi-git"></i>
              <span>GIT</span>
            </div>

          </div>

        </div>


        <div className="technologies-hero-bottom">

          <div className="container-custom">

            <span>ENGINEERED FOR DIGITAL</span>

            <div></div>

            <span className="hero-scroll-number">
              01 — 08
            </span>

            <i className="bi bi-arrow-down"></i>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        className="section-padding technology-page-section"
        id="technology-stack"
      >

        <div className="container-custom">

          <div className="technology-intro">

            <div>

              <div className="section-label">
                <span></span>
                TECHNOLOGY STACK
              </div>

              <h2 className="section-title">
                Tools behind
                <br />
                <span className="gradient-text">
                  the experience.
                </span>
              </h2>

            </div>

            <div className="technology-intro-copy">

              <span>08 TECHNOLOGIES / 01 SYSTEM</span>

              <p>
                Great digital products are not created by
                collecting the most tools. They are created
                by choosing the right tools for the right
                problem and using them with discipline.
              </p>

              <div className="intro-line"></div>

              <small>
                OUR APPROACH
                <strong>Practical over complicated.</strong>
              </small>

            </div>

          </div>


          {/* =================================================
              TECHNOLOGY CARDS
          ================================================= */}

          <div className="technology-cards">

            {technologies.map((tech, index) => (

              <article
                className={`technology-card technology-${tech.accent}`}
                key={tech.title}
              >

                <div className="technology-card-number">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>
                    {tech.level}
                  </span>
                </div>


                <div className="technology-card-top">

                  <div className="technology-icon">
                    <i className={`bi ${tech.icon}`}></i>
                  </div>

                  <span className="technology-code">
                    {tech.code}
                  </span>

                </div>


                <span className="technology-type">
                  {tech.type}
                </span>


                <h3>
                  {tech.title}
                </h3>


                <p>
                  {tech.text}
                </p>


                <div className="technology-tags">

                  {tech.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>


                <div className="technology-card-footer">

                  <span>
                    CORE TECHNOLOGY
                  </span>

                  <i className="bi bi-arrow-up-right"></i>

                </div>


                <div className="technology-card-glow"></div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY PHILOSOPHY
      ===================================================== */}

      <section className="technology-philosophy">

        <div className="philosophy-bg-grid"></div>

        <div className="container-custom">

          <div className="technology-philosophy-grid">

            <div className="philosophy-label">

              <span>02</span>

              <div></div>

              <small>
                ENGINEERING
                <br />
                PRINCIPLES
              </small>

            </div>


            <div className="philosophy-main">

              <div className="section-label">
                <span></span>
                HOW WE THINK
              </div>

              <h2>
                Technology should
                <br />
                serve the
                <span className="gradient-text">
                  {" "}experience.
                </span>
              </h2>

              <p>
                Every technology decision should have a reason.
                We consider the product, users, performance,
                maintainability and future requirements before
                deciding how the interface should be built.
              </p>

              <div className="philosophy-signature">
                <span>THE CODE MUNK</span>
                <small>BUILD WITH INTENTION.</small>
              </div>

            </div>


            <div className="philosophy-points">

              {principles.map((item) => (

                <div
                  className="philosophy-point"
                  key={item.number}
                >

                  <div className="point-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                  <div className="point-content">

                    <div>
                      <span>{item.number}</span>
                      <strong>{item.title}</strong>
                    </div>

                    <p>
                      {item.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DEVELOPMENT STANDARD
      ===================================================== */}

      <section className="technology-standard">

        <div className="container-custom">

          <div className="standard-heading">

            <div>

              <div className="section-label">
                <span></span>
                DEVELOPMENT STANDARD
              </div>

              <h2>
                Beyond the
                <br />
                <span className="gradient-text">
                  technology.
                </span>
              </h2>

            </div>

            <p>
              The tools matter, but the way they are used
              matters more. Our frontend work focuses on
              clarity, consistency and real-world usability.
            </p>

          </div>


          <div className="standard-grid">

            <div className="standard-card">

              <span>01</span>

              <i className="bi bi-phone"></i>

              <h3>Responsive First</h3>

              <p>
                Interfaces are planned to work naturally
                across mobile, tablet and desktop screens.
              </p>

              <div className="standard-line"></div>

            </div>


            <div className="standard-card">

              <span>02</span>

              <i className="bi bi-boxes"></i>

              <h3>Reusable Components</h3>

              <p>
                Reusable UI patterns make products easier
                to scale, update and maintain.
              </p>

              <div className="standard-line"></div>

            </div>


            <div className="standard-card">

              <span>03</span>

              <i className="bi bi-speedometer2"></i>

              <h3>Performance Minded</h3>

              <p>
                We avoid unnecessary complexity and focus
                on smooth, efficient user experiences.
              </p>

              <div className="standard-line"></div>

            </div>


            <div className="standard-card">

              <span>04</span>

              <i className="bi bi-shield-check"></i>

              <h3>Clean Foundation</h3>

              <p>
                Structured code makes future changes
                easier and development more predictable.
              </p>

              <div className="standard-line"></div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WORKFLOW
      ===================================================== */}

      <section className="section-padding technology-workflow">

        <div className="container-custom">

          <div className="workflow-heading">

            <div>

              <div className="section-label">
                <span></span>
                OUR WORKFLOW
              </div>

              <h2 className="section-title">
                From idea
                <br />
                <span className="gradient-text">
                  to interface.
                </span>
              </h2>

            </div>

            <p>
              Technology is only one part of the process.
              We combine it with structure, design,
              development and refinement to create
              digital products with purpose.
            </p>

          </div>


          <div className="workflow-grid">

            {workflow.map((item) => (

              <div
                className="workflow-card"
                key={item.number}
              >

                <div className="workflow-top">

                  <span>
                    {item.number}
                  </span>

                  <i className={`bi ${item.icon}`}></i>

                </div>

                <div className="workflow-line"></div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                <div className="workflow-arrow">
                  <i className="bi bi-arrow-up-right"></i>
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <section className="technology-marquee">

        <div className="technology-marquee-track">

          <span>REACT.JS</span>
          <i>✦</i>

          <span>JAVASCRIPT</span>
          <i>✦</i>

          <span>HTML5</span>
          <i>✦</i>

          <span>CSS3</span>
          <i>✦</i>

          <span>BOOTSTRAP</span>
          <i>✦</i>

          <span>REST API</span>
          <i>✦</i>

          <span>GIT</span>
          <i>✦</i>

          <span>RESPONSIVE UI</span>
          <i>✦</i>

          <span>REACT.JS</span>
          <i>✦</i>

          <span>JAVASCRIPT</span>
          <i>✦</i>

          <span>HTML5</span>
          <i>✦</i>

          <span>CSS3</span>
          <i>✦</i>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="technology-cta">

        <div className="technology-cta-grid"></div>
        <div className="technology-cta-glow"></div>

        <div className="cta-orbit"></div>

        <div className="container-custom">

          <div className="technology-cta-inner">

            <div className="cta-index">
              <span>03</span>
              <div></div>
              READY TO BUILD?
            </div>

            <h2>
              Let's turn technology
              <br />
              into
              <span className="gradient-text">
                {" "}impact.
              </span>
            </h2>

            <p>
              Have an idea, a website or a digital product
              that needs a better frontend? Let's discuss
              the challenge and build something purposeful.
            </p>

            <Link
              to="/contact"
              className="btn-primary-custom cta-button"
            >
              Start a Project
              <i className="bi bi-arrow-up-right"></i>
            </Link>

            <div className="cta-meta">

              <span>REACT</span>
              <span>UI / UX</span>
              <span>API</span>
              <span>RESPONSIVE</span>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Technologies;