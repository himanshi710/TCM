import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    number: "01",
    icon: "bi-window-stack",
    title: "Web Development",
    short:
      "High-performance websites and web applications designed around your business goals.",
    description:
      "We create modern digital experiences that combine clean interfaces, responsive layouts and scalable frontend architecture. From company websites to complex web applications, we focus on performance, usability and maintainability.",
    tags: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "REST API",
    ],
  },
  {
    number: "02",
    icon: "bi-bezier2",
    title: "UI / UX Design",
    short:
      "Thoughtful interfaces designed to make digital products clear, useful and memorable.",
    description:
      "We transform ideas into intuitive user journeys and visually strong interfaces. Every screen is designed with hierarchy, usability, consistency and the final user experience in mind.",
    tags: [
      "Figma",
      "Wireframes",
      "UI Design",
      "UX Research",
      "Prototype",
      "Design System",
    ],
  },
  {
    number: "03",
    icon: "bi-phone",
    title: "App Development",
    short:
      "Modern mobile-first experiences that feel smooth and consistent across devices.",
    description:
      "We build responsive application interfaces with a strong focus on usability and performance. Whether you are starting a new application or improving an existing experience, we create interfaces that work naturally across screen sizes.",
    tags: [
      "React Native",
      "Mobile UI",
      "Responsive",
      "API",
      "Components",
    ],
  },
  {
    number: "04",
    icon: "bi-cloud-arrow-up",
    title: "API Integration",
    short:
      "Reliable connections between your frontend, backend systems and third-party services.",
    description:
      "We integrate REST APIs and external services into digital products to create connected, dynamic and data-driven experiences.",
    tags: [
      "REST API",
      "JSON",
      "Axios",
      "API Integration",
      "Authentication",
    ],
  },
  {
    number: "05",
    icon: "bi-speedometer2",
    title: "Performance",
    short:
      "Faster websites and smoother experiences built for better usability and engagement.",
    description:
      "Performance is considered from the beginning. We optimize layouts, assets, components and interactions to create fast and efficient digital experiences.",
    tags: [
      "Optimization",
      "SEO",
      "Responsive",
      "Core Web Vitals",
      "Clean Code",
    ],
  },
  {
    number: "06",
    icon: "bi-arrow-repeat",
    title: "Maintenance",
    short:
      "Ongoing improvements, updates and technical support to keep your product evolving.",
    description:
      "Digital products need continuous attention. We help maintain, improve and update existing websites and interfaces so they remain secure, responsive and relevant.",
    tags: [
      "Updates",
      "Bug Fixes",
      "Support",
      "Security",
      "Improvements",
    ],
  },
];

const benefits = [
  {
    icon: "bi-layout-text-window-reverse",
    title: "Custom Experience",
    text:
      "We don't believe every business needs the same website. Every interface is shaped around its audience and goals.",
  },
  {
    icon: "bi-code-square",
    title: "Clean Architecture",
    text:
      "Reusable components, organized code and scalable frontend structures make products easier to maintain.",
  },
  {
    icon: "bi-phone",
    title: "Responsive by Default",
    text:
      "Every experience is designed to work naturally across mobile, tablet and desktop screens.",
  },
  {
    icon: "bi-lightning-charge",
    title: "Performance Focused",
    text:
      "Fast loading, efficient interactions and optimized interfaces are part of our development mindset.",
  },
];

const technologies = [
  "React.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SCSS",
  "Bootstrap",
  "REST API",
  "Git",
  "GitHub",
  "Figma",
];

const process = [
  {
    number: "01",
    icon: "bi-search",
    title: "Discover",
    text:
      "We understand your business, audience, goals and technical requirements before defining the direction.",
  },
  {
    number: "02",
    icon: "bi-pen",
    title: "Design",
    text:
      "We create the visual language, user journey and interface structure that will guide the experience.",
  },
  {
    number: "03",
    icon: "bi-code-slash",
    title: "Develop",
    text:
      "We transform the approved design into responsive, reusable and production-ready code.",
  },
  {
    number: "04",
    icon: "bi-rocket-takeoff",
    title: "Launch",
    text:
      "We test, optimize and prepare the final product for launch while keeping future improvements in mind.",
  },
];

const Services = () => {
  return (
    <div className="services-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="services-hero">

        <div className="services-hero-bg"></div>
        <div className="services-hero-grid"></div>
        <div className="services-hero-glow"></div>

        <div className="container-custom services-hero-inner">

          <div className="services-hero-content">

            <div className="services-kicker">
              <span></span>
              WHAT WE DO
            </div>

            <h1>
              Digital services
              <span className="gradient-text">
                {" "}that move.
              </span>
            </h1>

            <p>
              We combine design, development and technology
              to create digital products that are useful,
              scalable and built to perform.
            </p>

            <div className="services-hero-actions">

              <Link
                to="/contact"
                className="btn-primary-custom"
              >
                Start a Project
                <i className="bi bi-arrow-up-right"></i>
              </Link>

              <a
                href="#services-list"
                className="btn-outline-custom"
              >
                Explore Services
                <i className="bi bi-arrow-down"></i>
              </a>

            </div>

          </div>


          <div className="services-hero-visual">

            <div className="service-visual-ring ring-one"></div>
            <div className="service-visual-ring ring-two"></div>
            <div className="service-visual-ring ring-three"></div>

            <div className="service-visual-core">

              <span className="core-symbol">
                &lt;/&gt;
              </span>

              <span>
                DIGITAL
                <br />
                PRODUCTS
              </span>

            </div>

            <div className="visual-orbit-card visual-card-one">
              <i className="bi bi-code-slash"></i>
              <span>Development</span>
            </div>

            <div className="visual-orbit-card visual-card-two">
              <i className="bi bi-stars"></i>
              <span>Design</span>
            </div>

            <div className="visual-orbit-card visual-card-three">
              <i className="bi bi-lightning-charge"></i>
              <span>Performance</span>
            </div>

          </div>

        </div>


        <div className="services-hero-bottom">
          <div className="container-custom">

            <span>
              SCROLL TO EXPLORE
            </span>

            <i className="bi bi-arrow-down"></i>

          </div>
        </div>

      </section>


      {/* =========================================
          INTRO
      ========================================= */}

      <section
        className="section-padding services-intro-section"
        id="services-list"
      >

        <div className="container-custom">

          <div className="services-intro">

            <div>

              <div className="section-label">
                <span></span>
                OUR EXPERTISE
              </div>

              <h2 className="section-title">
                Everything you need
                <br />
                <span className="gradient-text">
                  to go digital.
                </span>
              </h2>

            </div>

            <div className="services-intro-copy">

              <span>
                DESIGN × DEVELOPMENT × TECHNOLOGY
              </span>

              <p>
                From the first idea to the final product,
                we bring strategy, creative thinking and
                technical execution together under one roof.
              </p>

            </div>

          </div>


          {/* SERVICES */}

          <div className="services-list-grid">

            {services.map((service) => (
              <article
                className="large-service-card"
                key={service.number}
              >

                <div className="large-service-top">

                  <span className="large-service-number">
                    {service.number}
                  </span>

                  <div className="large-service-icon">
                    <i className={`bi ${service.icon}`}></i>
                  </div>

                </div>


                <div className="large-service-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p className="service-short">
                    {service.short}
                  </p>

                  <p className="service-description">
                    {service.description}
                  </p>

                </div>


                <div className="service-tags">

                  {service.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>


                <div className="large-service-footer">

                  <span>
                    EXPLORE SERVICE
                  </span>

                  <div>
                    <i className="bi bi-arrow-up-right"></i>
                  </div>

                </div>

                <div className="large-service-glow"></div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          BENEFITS
      ========================================= */}

      <section className="section-padding benefits-section">

        <div className="container-custom">

          <div className="benefits-heading">

            <div>

              <div className="section-label">
                <span></span>
                WHY OUR SERVICES
              </div>

              <h2 className="section-title">
                More than
                <br />
                <span className="gradient-text">
                  just development.
                </span>
              </h2>

            </div>

            <p>
              Great digital products need more than code.
              They need clarity, consistency, performance
              and an understanding of the people using them.
            </p>

          </div>


          <div className="benefits-grid">

            {benefits.map((benefit, index) => (
              <div
                className="benefit-card"
                key={benefit.title}
              >

                <div className="benefit-number">
                  0{index + 1}
                </div>

                <div className="benefit-icon">
                  <i className={`bi ${benefit.icon}`}></i>
                </div>

                <h3>
                  {benefit.title}
                </h3>

                <p>
                  {benefit.text}
                </p>

                <div className="benefit-line"></div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          TECHNOLOGY STRIP
      ========================================= */}

      <section className="services-tech">

        <div className="container-custom">

          <div className="services-tech-inner">

            <span className="services-tech-label">
              TECHNOLOGY WE WORK WITH
            </span>

            <div className="services-tech-list">

              {technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          PROCESS
      ========================================= */}

      <section className="section-padding service-process">

        <div className="container-custom">

          <div className="process-header">

            <div>

              <div className="section-label">
                <span></span>
                OUR PROCESS
              </div>

              <h2 className="section-title">
                Simple process.
                <br />
                <span className="gradient-text">
                  Strong results.
                </span>
              </h2>

            </div>

            <p>
              We keep our process straightforward so that
              every project has a clear direction from start
              to finish.
            </p>

          </div>


          <div className="process-grid">

            {process.map((item) => (
              <div
                className="service-process-card"
                key={item.number}
              >

                <div className="process-card-top">

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

                <div className="process-card-arrow">
                  <i className="bi bi-arrow-up-right"></i>
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="services-cta">

        <div className="services-cta-grid"></div>
        <div className="services-cta-glow"></div>

        <div className="container-custom">

          <div className="services-cta-inner">

            <span className="services-cta-label">
              READY TO BUILD?
            </span>

            <h2>
              Let's create
              <br />
              something
              <span className="gradient-text">
                {" "}meaningful.
              </span>
            </h2>

            <p>
              Have a website, application or digital idea
              in mind? Tell us what you're building and
              let's figure out the best way forward.
            </p>

            <Link
              to="/contact"
              className="btn-primary-custom"
            >
              Start Your Project
              <i className="bi bi-arrow-up-right"></i>
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Services;