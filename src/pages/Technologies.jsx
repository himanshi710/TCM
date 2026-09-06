import { Link } from "react-router-dom";
import "./Technologies.css";

const technologies = [
  {
    icon: "bi-filetype-js",
    title: "JavaScript",
    type: "LANGUAGE",
    level: "CORE",
    text: "Modern JavaScript for interactive, dynamic and scalable digital experiences.",
    tags: ["ES6+", "Async", "DOM", "Logic"],
  },
  {
    icon: "bi-filetype-jsx",
    title: "React.js",
    type: "FRONTEND",
    level: "PRIMARY",
    text: "Component-driven interfaces built for performance, flexibility and maintainability.",
    tags: ["Components", "Hooks", "State", "SPA"],
  },
  {
    icon: "bi-filetype-html",
    title: "HTML5",
    type: "WEB",
    level: "CORE",
    text: "Semantic and accessible structures that provide a strong foundation for modern websites.",
    tags: ["Semantic", "SEO", "Accessibility", "Structure"],
  },
  {
    icon: "bi-filetype-css",
    title: "CSS3",
    type: "STYLING",
    level: "CORE",
    text: "Responsive layouts, animations and polished visual systems designed for every screen.",
    tags: ["Flexbox", "Grid", "Animation", "Responsive"],
  },
  {
    icon: "bi-bootstrap",
    title: "Bootstrap",
    type: "FRAMEWORK",
    level: "UI SYSTEM",
    text: "Reliable responsive components and layout systems for efficient product development.",
    tags: ["Grid", "Components", "Utilities", "Responsive"],
  },
  {
    icon: "bi-git",
    title: "Git",
    type: "VERSION CONTROL",
    level: "WORKFLOW",
    text: "Reliable version control for organized development and collaborative project workflows.",
    tags: ["Branches", "Commits", "Merge", "Workflow"],
  },
  {
    icon: "bi-braces",
    title: "REST API",
    type: "INTEGRATION",
    level: "DATA",
    text: "Clean API integrations that connect interfaces with dynamic and data-driven systems.",
    tags: ["JSON", "Axios", "CRUD", "Integration"],
  },
  {
    icon: "bi-phone",
    title: "Responsive UI",
    type: "EXPERIENCE",
    level: "EVERYWHERE",
    text: "Interfaces that adapt naturally across mobile, tablet, laptop and large desktop screens.",
    tags: ["Mobile", "Tablet", "Desktop", "UX"],
  },
];

const workflow = [
  {
    number: "01",
    icon: "bi-lightbulb",
    title: "Understand",
    text: "Goals, users and business requirements.",
  },
  {
    number: "02",
    icon: "bi-bezier2",
    title: "Design",
    text: "Structure, visual language and interactions.",
  },
  {
    number: "03",
    icon: "bi-code-slash",
    title: "Build",
    text: "Reusable components and clean code.",
  },
  {
    number: "04",
    icon: "bi-speedometer2",
    title: "Optimize",
    text: "Performance, responsiveness and quality.",
  },
];

const Technologies = () => {
  return (
    <div className="technologies-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="technologies-hero">

        <div className="technologies-hero-bg"></div>
        <div className="technologies-hero-grid"></div>
        <div className="technologies-hero-glow"></div>

        <div className="container-custom technologies-hero-inner">

          <div className="technologies-hero-content">

            <div className="technologies-kicker">
              <span></span>
              OUR STACK
            </div>

            <h1>
              Technology
              <span className="gradient-text">
                {" "}that works.
              </span>
            </h1>

            <p>
              We choose practical, modern technologies that help
              us create digital products that are fast, scalable,
              responsive and ready for the future.
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

          </div>


          {/* HERO TECH VISUAL */}

          <div className="tech-orbit">

            <div className="tech-orbit-ring orbit-ring-one"></div>
            <div className="tech-orbit-ring orbit-ring-two"></div>
            <div className="tech-orbit-ring orbit-ring-three"></div>

            <div className="tech-orbit-center">
              <span>&lt;/&gt;</span>
              <small>CODE</small>
            </div>

            <div className="orbit-tech orbit-tech-one">
              <i className="bi bi-filetype-jsx"></i>
              <span>React</span>
            </div>

            <div className="orbit-tech orbit-tech-two">
              <i className="bi bi-filetype-js"></i>
              <span>JS</span>
            </div>

            <div className="orbit-tech orbit-tech-three">
              <i className="bi bi-filetype-css"></i>
              <span>CSS</span>
            </div>

            <div className="orbit-tech orbit-tech-four">
              <i className="bi bi-git"></i>
              <span>Git</span>
            </div>

          </div>

        </div>


        <div className="technologies-hero-bottom">

          <div className="container-custom">

            <span>
              ENGINEERED FOR DIGITAL
            </span>

            <div></div>

            <i className="bi bi-arrow-down"></i>

          </div>

        </div>

      </section>


      {/* =========================================
          STACK INTRO
      ========================================= */}

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

              <span>
                08 TECHNOLOGIES
              </span>

              <p>
                The right technology is not about using
                everything available. It's about choosing
                what makes the product better, faster and
                easier to maintain.
              </p>

            </div>

          </div>


          {/* =========================================
              TECHNOLOGY CARDS
          ========================================= */}

          <div className="technology-cards">

            {technologies.map((tech, index) => (

              <article
                className="technology-card"
                key={tech.title}
              >

                <div className="technology-card-top">

                  <span className="technology-number">
                    0{index + 1}
                  </span>

                  <span className="technology-level">
                    {tech.level}
                  </span>

                </div>


                <div className="technology-icon">
                  <i className={`bi ${tech.icon}`}></i>
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
                    {String(index + 1).padStart(2, "0")}
                    {" "} / 08
                  </span>

                  <i className="bi bi-arrow-up-right"></i>

                </div>


                <div className="technology-card-glow"></div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          TECH PHILOSOPHY
      ========================================= */}

      <section className="technology-philosophy">

        <div className="container-custom">

          <div className="technology-philosophy-grid">

            <div className="philosophy-label">

              <span>
                01
              </span>

              <div></div>

              <small>
                OUR
                <br />
                PHILOSOPHY
              </small>

            </div>


            <div className="philosophy-main">

              <div className="section-label">
                <span></span>
                HOW WE CHOOSE
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
                We don't choose a technology simply because
                it is popular. We look at the product, the
                users, the performance requirements and the
                long-term needs before deciding how to build.
              </p>

            </div>


            <div className="philosophy-points">

              <div>
                <span>01</span>
                <strong>PERFORMANCE</strong>
                <p>
                  Fast interfaces and efficient experiences.
                </p>
              </div>

              <div>
                <span>02</span>
                <strong>SCALABILITY</strong>
                <p>
                  Architecture that can grow with the product.
                </p>
              </div>

              <div>
                <span>03</span>
                <strong>MAINTAINABILITY</strong>
                <p>
                  Clean and understandable code structures.
                </p>
              </div>

              <div>
                <span>04</span>
                <strong>FLEXIBILITY</strong>
                <p>
                  Systems ready for future improvements.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          WORKFLOW
      ========================================= */}

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
              We combine it with strategy, design and
              continuous refinement to create better products.
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


      {/* =========================================
          TECH MARQUEE
      ========================================= */}

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

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="technology-cta">

        <div className="technology-cta-grid"></div>
        <div className="technology-cta-glow"></div>

        <div className="container-custom">

          <div className="technology-cta-inner">

            <span>
              READY TO BUILD?
            </span>

            <h2>
              Let's turn technology
              <br />
              into
              <span className="gradient-text">
                {" "}impact.
              </span>
            </h2>

            <p>
              Have an idea that needs the right technology
              behind it? Let's talk about the product,
              the challenge and the possibilities.
            </p>

            <Link
              to="/contact"
              className="btn-primary-custom"
            >
              Start a Project
              <i className="bi bi-arrow-up-right"></i>
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Technologies;