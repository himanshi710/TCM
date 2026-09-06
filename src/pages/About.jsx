
import { Link } from "react-router-dom";
import "./About.css";

const values = [
  {
    number: "01",
    icon: "bi-bullseye",
    title: "Business Before Code",
    text:
      "Before choosing a framework or writing components, we understand what the website needs to achieve — whether that means presenting a business clearly, generating enquiries or creating a better digital experience.",
  },
  {
    number: "02",
    icon: "bi-eye",
    title: "Clarity Over Clutter",
    text:
      "We believe premium design is not about adding more elements. It is about hierarchy, spacing, typography and interactions that make the important things easy to understand.",
  },
  {
    number: "03",
    icon: "bi-code-square",
    title: "Code That Can Grow",
    text:
      "Reusable React components, organised CSS and practical frontend architecture help keep projects easier to maintain, improve and extend as requirements change.",
  },
  {
    number: "04",
    icon: "bi-chat-square-text",
    title: "Transparent Collaboration",
    text:
      "We keep communication straightforward. Requirements, priorities, design decisions and development progress should be understandable throughout the project.",
  },
];

const capabilities = [
  {
    number: "01",
    icon: "bi-window-stack",
    title: "Business Websites",
    text:
      "Modern websites for companies, professionals and brands that need a credible online presence with clear content, responsive layouts and purposeful calls to action.",
    tags: ["Corporate", "Landing Pages", "Business"],
  },
  {
    number: "02",
    icon: "bi-bezier2",
    title: "UI / UX Design",
    text:
      "Interface design focused on information hierarchy, usability, visual consistency, responsive behaviour and an experience that feels intentional.",
    tags: ["Figma", "UI Systems", "UX"],
  },
  {
    number: "03",
    icon: "bi-braces",
    title: "React Development",
    text:
      "Component-based frontend development for interactive websites and web applications using modern JavaScript and React architecture.",
    tags: ["React.js", "JavaScript", "Components"],
  },
  {
    number: "04",
    icon: "bi-plug",
    title: "API Integration",
    text:
      "Frontend experiences connected with REST APIs for dynamic data, forms, dashboards, services and other application workflows.",
    tags: ["REST API", "Integration", "Data"],
  },
  {
    number: "05",
    icon: "bi-phone",
    title: "Responsive Frontend",
    text:
      "Layouts carefully adapted for desktop, tablet and mobile so users can access the same experience comfortably across different devices.",
    tags: ["Mobile First", "Bootstrap", "SCSS"],
  },
  {
    number: "06",
    icon: "bi-speedometer2",
    title: "Performance & Refinement",
    text:
      "Frontend improvements focused on cleaner implementation, responsive behaviour, efficient assets and smoother interactions.",
    tags: ["Optimization", "UX", "Frontend"],
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    icon: "bi-search",
    text:
      "We start with the business, audience, content, goals and technical requirements. The objective is to understand what the product actually needs before deciding how it should look.",
  },
  {
    number: "02",
    title: "Structure",
    icon: "bi-diagram-3",
    text:
      "We organise pages, sections, information hierarchy and user journeys so the experience has a clear foundation before visual details take over.",
  },
  {
    number: "03",
    title: "Design",
    icon: "bi-vector-pen",
    text:
      "The visual language is shaped through typography, spacing, colour, components and interaction patterns that match the purpose of the product.",
  },
  {
    number: "04",
    title: "Develop",
    icon: "bi-code-slash",
    text:
      "Approved direction is translated into reusable frontend components with responsive layouts, clean styling and required API integrations.",
  },
  {
    number: "05",
    title: "Test",
    icon: "bi-check2-circle",
    text:
      "We review the experience across screen sizes and refine layout, interaction, content presentation and frontend behaviour before delivery.",
  },
  {
    number: "06",
    title: "Improve",
    icon: "bi-arrow-repeat",
    text:
      "A digital product is not finished just because it is live. New content, changing requirements and user feedback can create opportunities for continued improvement.",
  },
];

const technologyGroups = [
  {
    title: "Frontend",
    items: ["React.js", "JavaScript ES6+", "HTML5", "CSS3"],
  },
  {
    title: "Styling",
    items: ["SCSS", "Bootstrap 5", "Responsive UI", "Mobile First"],
  },
  {
    title: "Integration",
    items: ["REST API", "API Integration", "State Management"],
  },
  {
    title: "Workflow",
    items: ["Git", "GitHub", "Bitbucket", "Jira", "npm"],
  },
];

const About = () => {
  return (
    <div className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-bg"></div>
        <div className="about-hero-grid"></div>
        <div className="about-hero-glow"></div>

        <div className="container-custom about-hero-inner">

          <div className="about-hero-content">

            <div className="about-kicker">
              <span></span>
              THE CODE MUNK / ABOUT
            </div>

            <h1>
              We build digital
              <br />
              experiences people
              <span className="gradient-text">
                {" "}can trust.
              </span>
            </h1>

            <p>
              The Code Munk is a frontend-focused digital studio
              creating modern websites, responsive interfaces and
              technology experiences for businesses and ideas that
              deserve a stronger digital presence.
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
                Our Story
                <i className="bi bi-arrow-down"></i>
              </a>

            </div>

            <div className="about-hero-trust">

              <div>
                <i className="bi bi-check2"></i>
                <span>React-focused development</span>
              </div>

              <div>
                <i className="bi bi-check2"></i>
                <span>Responsive-first thinking</span>
              </div>

              <div>
                <i className="bi bi-check2"></i>
                <span>Clear communication</span>
              </div>

            </div>

          </div>


          {/* HERO VISUAL */}

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

              <span>OUR APPROACH</span>

              <strong>
                THINK.
                <br />
                DESIGN.
                <br />
                BUILD.
              </strong>

              <small>
                With purpose.
              </small>

            </div>

            <div className="about-side-meta">
              <span>01</span>
              <div></div>
              <span>DIGITAL STUDIO</span>
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


      {/* =====================================================
          STORY
      ===================================================== */}

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

              <span className="content-eyebrow">
                DESIGN × DEVELOPMENT
              </span>

              <h2>
                Technology should make
                <span className="gradient-text">
                  {" "}businesses clearer.
                </span>
              </h2>

              <p className="intro-lead">
                The Code Munk brings design thinking and frontend
                development together to create digital experiences
                that are visually strong without losing sight of
                usability and business objectives.
              </p>

              <p>
                Our work covers business websites, landing pages,
                responsive interfaces and React-based experiences.
                We also work with REST APIs when a frontend needs
                to communicate with real application data or services.
              </p>

              <p>
                Rather than treating every project as a fixed template,
                we look at the content, audience, purpose and technical
                requirements first. That helps us decide what the
                experience actually needs — and what it does not.
              </p>

              <div className="intro-highlight">

                <div className="highlight-icon">
                  <i className="bi bi-quote"></i>
                </div>

                <div>
                  <strong>
                    The best interface is not the one with the most
                    features. It is the one that makes the right
                    things feel obvious.
                  </strong>

                  <span>
                    — The Code Munk design principle
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VISUAL STATEMENT
      ===================================================== */}

      <section className="about-story-visual">

        <div className="story-image"></div>
        <div className="story-overlay"></div>

        <div className="container-custom story-visual-content">

          <div className="story-big-number">
            01
          </div>

          <div className="story-visual-copy">

            <span>
              THE QUESTION BEFORE THE SOLUTION
            </span>

            <h2>
              Every strong
              <br />
              product starts
              <br />
              with a <em>reason.</em>
            </h2>

            <p>
              What should the user understand?
              What should they do next?
              And what should the business achieve?
            </p>

          </div>

          <div className="story-floating-note">
            <span>OUR FOCUS</span>
            <strong>
              Useful.
              <br />
              Clear.
              <br />
              Reliable.
            </strong>
          </div>

        </div>

      </section>


      {/* =====================================================
          EXPERIENCE / NUMBERS
      ===================================================== */}

      <section className="about-stats">

        <div className="container-custom">

          <div className="stats-heading">

            <div>
              <span>EXPERIENCE & CAPABILITY</span>

              <h2>
                Built through
                <br />
                <strong>real project work.</strong>
              </h2>
            </div>

            <p>
              Numbers give context. The work behind them matters more.
              Our focus remains on building useful interfaces,
              learning through implementation and improving with every
              project.
            </p>

          </div>


          <div className="about-stats-grid">

            <div className="about-stat">

              <strong>
                2<span>+</span>
              </strong>

              <small>
                YEARS
              </small>

              <p>
                Hands-on frontend development experience
              </p>

            </div>


            <div className="about-stat">

              <strong>
                10<span>+</span>
              </strong>

              <small>
                PROJECTS
              </small>

              <p>
                Websites, interfaces and digital experiences
              </p>

            </div>


            <div className="about-stat">

              <strong>
                15<span>+</span>
              </strong>

              <small>
                API INTEGRATIONS
              </small>

              <p>
                Connected frontend experiences and data workflows
              </p>

            </div>


            <div className="about-stat">

              <strong>
                100<span>%</span>
              </strong>

              <small>
                RESPONSIVE
              </small>

              <p>
                Mobile-first approach across screen sizes
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRUST / WHAT CLIENTS CAN EXPECT
      ===================================================== */}

      <section className="about-trust-section section-padding">

        <div className="container-custom">

          <div className="trust-heading">

            <div>
              <div className="section-label">
                <span></span>
                WHAT YOU CAN EXPECT
              </div>

              <h2 className="section-title">
                No mystery behind
                <br />
                <span className="gradient-text">
                  the process.
                </span>
              </h2>
            </div>

            <p>
              A good working relationship is built on clarity.
              These are the principles we bring into the project
              from the beginning.
            </p>

          </div>


          <div className="trust-grid">

            <div className="trust-card">

              <span>01</span>

              <i className="bi bi-chat-square-text"></i>

              <h3>Clear Communication</h3>

              <p>
                Requirements and decisions stay visible so the
                project does not disappear into technical jargon.
              </p>

            </div>


            <div className="trust-card">

              <span>02</span>

              <i className="bi bi-layout-text-window"></i>

              <h3>Purposeful Design</h3>

              <p>
                Visual decisions are connected to content,
                hierarchy, usability and the audience.
              </p>

            </div>


            <div className="trust-card">

              <span>03</span>

              <i className="bi bi-code-square"></i>

              <h3>Maintainable Frontend</h3>

              <p>
                We favour reusable components and organised
                implementation over unnecessary complexity.
              </p>

            </div>


            <div className="trust-card">

              <span>04</span>

              <i className="bi bi-check2-circle"></i>

              <h3>Honest Scope</h3>

              <p>
                We focus on what the project actually needs instead
                of adding technology simply because it sounds impressive.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section className="section-padding approach-section">

        <div className="container-custom">

          <div className="approach-heading">

            <div>

              <div className="section-label">
                <span></span>
                OUR WORKFLOW
              </div>

              <h2 className="section-title">
                From first thought
                <br />
                to <span className="gradient-text">live experience.</span>
              </h2>

            </div>

            <p>
              The process is structured enough to keep the project
              moving and flexible enough to adapt when we learn
              something new.
            </p>

          </div>


          <div className="approach-timeline">

            {approach.map((item) => (
              <div
                className="approach-item"
                key={item.number}
              >

                <div className="approach-number">
                  {item.number}
                </div>

                <div className="approach-line"></div>

                <div className="approach-content">

                  <div className="approach-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                  <span>
                    PHASE {item.number}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

                <i className="bi bi-arrow-up-right approach-arrow"></i>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="section-padding capabilities-section">

        <div className="container-custom">

          <div className="capabilities-top">

            <div>

              <div className="section-label">
                <span></span>
                OUR CAPABILITIES
              </div>

              <h2 className="section-title">
                What we can
                <br />
                <span className="gradient-text">
                  actually build.
                </span>
              </h2>

            </div>

            <p>
              A focused set of services covering the most important
              parts of a modern frontend experience — from structure
              and interface design to development and integration.
            </p>

          </div>


          <div className="capabilities-grid">

            {capabilities.map((item) => (
              <article
                className="capability-card"
                key={item.number}
              >

                <div className="capability-top">

                  <span>
                    {item.number}
                  </span>

                  <div className="capability-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                <div className="capability-tags">

                  {item.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>

                <div className="capability-arrow">
                  <i className="bi bi-arrow-up-right"></i>
                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY TRANSPARENCY
      ===================================================== */}

      <section className="about-stack">

        <div className="container-custom">

          <div className="stack-grid">

            <div className="stack-intro">

              <div className="section-label">
                <span></span>
                OUR TECHNOLOGY
              </div>

              <h2>
                The tools are
                <span className="gradient-text">
                  {" "}practical.
                </span>
              </h2>

              <p>
                We choose technology based on the requirements of
                the experience rather than using a complicated stack
                just for the sake of it.
              </p>

              <div className="stack-note">
                <i className="bi bi-info-circle"></i>

                <span>
                  Our primary strength is frontend development,
                  interface implementation and API-connected
                  digital experiences.
                </span>
              </div>

            </div>


            <div className="technology-groups">

              {technologyGroups.map((group, index) => (
                <div
                  className="technology-group"
                  key={group.title}
                >

                  <div className="technology-group-number">
                    0{index + 1}
                  </div>

                  <div>

                    <h3>
                      {group.title}
                    </h3>

                    <div className="technology-items">

                      {group.items.map((item) => (
                        <span key={item}>
                          {item}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="section-padding values-section">

        <div className="container-custom">

          <div className="values-heading">

            <div>

              <div className="section-label">
                <span></span>
                WHAT DRIVES US
              </div>

              <h2 className="section-title">
                Principles behind
                <br />
                <span className="gradient-text">
                  the work.
                </span>
              </h2>

            </div>

            <p>
              These principles influence the way we approach
              requirements, design decisions, code and collaboration.
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

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                <div className="value-card-line"></div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ-LIKE TRUST SECTION
      ===================================================== */}

      <section className="about-reassurance">

        <div className="container-custom">

          <div className="reassurance-grid">

            <div>

              <span className="reassurance-label">
                BEFORE WE START
              </span>

              <h2>
                You don't need
                <br />
                a perfect brief.
              </h2>

            </div>


            <div className="reassurance-content">

              <div className="reassurance-item">

                <span>01</span>

                <div>
                  <h3>
                    Have only an idea?
                  </h3>

                  <p>
                    That's enough to start the conversation.
                    We can help turn the idea into a clearer
                    digital direction.
                  </p>
                </div>

              </div>


              <div className="reassurance-item">

                <span>02</span>

                <div>
                  <h3>
                    Already have a design?
                  </h3>

                  <p>
                    We can focus on translating the approved
                    interface into responsive frontend code
                    and integrations.
                  </p>
                </div>

              </div>


              <div className="reassurance-item">

                <span>03</span>

                <div>
                  <h3>
                    Already have a website?
                  </h3>

                  <p>
                    We can work around redesign, responsive
                    improvements, frontend refinement and
                    performance-focused updates.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="about-cta">

        <div className="about-cta-grid"></div>
        <div className="about-cta-glow"></div>

        <div className="container-custom">

          <div className="about-cta-inner">

            <span className="about-cta-number">
              06 / 06
            </span>

            <div className="section-label">
              <span></span>
              LET'S BUILD SOMETHING USEFUL
            </div>

            <h2>
              Have an idea?
              <br />
              Let's give it a
              <span className="gradient-text">
                {" "}digital shape.
              </span>
            </h2>

            <p>
              Share what you're building, what you want to improve
              or simply where you want to go next. We can start
              from there.
            </p>

            <div className="about-cta-actions">

              <Link
                to="/contact"
                className="btn-primary-custom"
              >
                Start a Conversation
                <i className="bi bi-arrow-up-right"></i>
              </Link>

              <a
                href="mailto:hello@thecodemunk.in"
                className="about-email-link"
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

export default About;

