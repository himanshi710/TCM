import { Link } from "react-router-dom";
import "./Careers.css";

const jobs = [
  {
    number: "01",
    title: "Frontend Developer",
    type: "FULL TIME",
    location: "Remote / India",
    experience: "1–3 YEARS",
    icon: "bi-code-slash",
    description:
      "Build responsive, scalable and polished web experiences using modern frontend technologies.",
    skills: ["React.js", "JavaScript", "CSS3"],
  },
  {
    number: "02",
    title: "UI / UX Designer",
    type: "FULL TIME",
    location: "Remote / India",
    experience: "1–3 YEARS",
    icon: "bi-bezier2",
    description:
      "Design intuitive digital experiences with strong visual systems, thoughtful interactions and clean interfaces.",
    skills: ["Figma", "UI Design", "UX"],
  },
  {
    number: "03",
    title: "React Developer",
    type: "FREELANCE",
    location: "Remote",
    experience: "PROJECT BASED",
    icon: "bi-filetype-jsx",
    description:
      "Work with us on selected projects and transform designs into high-quality React interfaces.",
    skills: ["React", "API", "Responsive UI"],
  },
];

const benefits = [
  {
    number: "01",
    icon: "bi-laptop",
    title: "Remote Friendly",
    text:
      "Work from where you are most productive while staying connected with the team.",
  },
  {
    number: "02",
    icon: "bi-lightbulb",
    title: "Creative Freedom",
    text:
      "Bring your ideas to the table, experiment with new approaches and solve problems your way.",
  },
  {
    number: "03",
    icon: "bi-graph-up-arrow",
    title: "Keep Growing",
    text:
      "Work on real projects that continuously push your design and technical skills forward.",
  },
  {
    number: "04",
    icon: "bi-people",
    title: "Small Team",
    text:
      "Collaborate closely with people who care about the details and the final experience.",
  },
];

const process = [
  {
    number: "01",
    title: "Apply",
    text: "Send us your profile, portfolio or a quick introduction.",
  },
  {
    number: "02",
    title: "Connect",
    text: "We'll have a conversation about your skills and interests.",
  },
  {
    number: "03",
    title: "Create",
    text: "Depending on the role, we'll explore your approach to a small challenge.",
  },
  {
    number: "04",
    title: "Join",
    text: "If we're a good match, let's start building something together.",
  },
];

const Careers = () => {
  return (
    <div className="careers-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="careers-hero">

        <div className="careers-hero-bg"></div>
        <div className="careers-hero-grid"></div>
        <div className="careers-hero-glow"></div>

        <div className="container-custom careers-hero-inner">

          <div className="careers-hero-content">

            <div className="careers-kicker">
              <span></span>
              JOIN THE TEAM
            </div>

            <h1>
              Build the
              <span className="gradient-text">
                {" "}future with us.
              </span>
            </h1>

            <p>
              We are looking for curious minds who love
              technology, design and solving interesting
              problems through digital experiences.
            </p>

            <div className="careers-hero-actions">

              <a
                href="#open-positions"
                className="btn-primary-custom"
              >
                View Open Roles
                <i className="bi bi-arrow-down"></i>
              </a>

              <Link
                to="/contact"
                className="btn-outline-custom"
              >
                Introduce Yourself
                <i className="bi bi-arrow-up-right"></i>
              </Link>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div className="careers-hero-visual">

            <div className="career-visual-circle circle-one"></div>
            <div className="career-visual-circle circle-two"></div>
            <div className="career-visual-circle circle-three"></div>

            <div className="career-visual-center">

              <i className="bi bi-stars"></i>

              <span>
                CREATE
                <br />
                TOGETHER
              </span>

            </div>

            <div className="career-floating-card career-card-one">
              <i className="bi bi-code-slash"></i>
              <span>BUILD</span>
            </div>

            <div className="career-floating-card career-card-two">
              <i className="bi bi-lightbulb"></i>
              <span>THINK</span>
            </div>

            <div className="career-floating-card career-card-three">
              <i className="bi bi-rocket-takeoff"></i>
              <span>GROW</span>
            </div>

          </div>

        </div>


        <div className="careers-hero-bottom">

          <div className="container-custom">

            <span>
              PEOPLE × IDEAS × TECHNOLOGY
            </span>

            <div></div>

            <i className="bi bi-arrow-down"></i>

          </div>

        </div>

      </section>


      {/* =========================================
          INTRO
      ========================================= */}

      <section className="section-padding careers-intro">

        <div className="container-custom">

          <div className="careers-intro-grid">

            <div>

              <div className="section-label">
                <span></span>
                LIFE AT THE CODE MUNK
              </div>

              <h2 className="section-title">
                Do meaningful
                <br />
                <span className="gradient-text">
                  digital work.
                </span>
              </h2>

            </div>

            <div className="careers-intro-copy">

              <p>
                We believe great work comes from people who
                have the freedom to think, experiment and
                create.
              </p>

              <p>
                We're a small digital team focused on building
                useful, beautiful and technically strong
                experiences for real businesses and users.
              </p>

            </div>

          </div>


          <div className="career-stats">

            <div>
              <strong>01</strong>
              <span>SMALL TEAM</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>REMOTE FRIENDLY</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>IDEAS WELCOME</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>CURIOSITY</span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          BENEFITS
      ========================================= */}

      <section className="careers-benefits">

        <div className="container-custom">

          <div className="benefits-heading">

            <div>

              <div className="section-label">
                <span></span>
                WHY JOIN US
              </div>

              <h2 className="section-title">
                More than
                <br />
                <span className="gradient-text">
                  just a job.
                </span>
              </h2>

            </div>

            <p>
              We want people to do their best work,
              keep learning and enjoy the process of
              building things together.
            </p>

          </div>


          <div className="career-benefits-grid">

            {benefits.map((benefit) => (

              <article
                className="career-benefit-card"
                key={benefit.number}
              >

                <div className="career-benefit-top">

                  <span>
                    {benefit.number}
                  </span>

                  <i className={`bi ${benefit.icon}`}></i>

                </div>

                <h3>
                  {benefit.title}
                </h3>

                <p>
                  {benefit.text}
                </p>

                <div className="career-benefit-line"></div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          OPEN POSITIONS
      ========================================= */}

      <section
        className="section-padding careers-positions"
        id="open-positions"
      >

        <div className="container-custom">

          <div className="positions-heading">

            <div>

              <div className="section-label">
                <span></span>
                OPEN POSITIONS
              </div>

              <h2 className="section-title">
                Find your
                <br />
                <span className="gradient-text">
                  next challenge.
                </span>
              </h2>

            </div>

            <div className="positions-count">

              <strong>
                03
              </strong>

              <span>
                OPEN ROLES
              </span>

            </div>

          </div>


          <div className="jobs-list">

            {jobs.map((job) => (

              <div
                className="job-card"
                key={job.number}
              >

                <div className="job-number">
                  {job.number}
                </div>


                <div className="job-icon">
                  <i className={`bi ${job.icon}`}></i>
                </div>


                <div className="job-main">

                  <div className="job-title-row">

                    <h3>
                      {job.title}
                    </h3>

                    <span>
                      {job.type}
                    </span>

                  </div>

                  <p>
                    {job.description}
                  </p>

                  <div className="job-meta">

                    <span>
                      <i className="bi bi-geo-alt"></i>
                      {job.location}
                    </span>

                    <span>
                      <i className="bi bi-clock"></i>
                      {job.experience}
                    </span>

                  </div>

                  <div className="job-skills">

                    {job.skills.map((skill) => (
                      <span key={skill}>
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>


                <Link
                  to="/contact"
                  className="job-apply"
                >
                  <span>
                    APPLY
                  </span>

                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          PROCESS
      ========================================= */}

      <section className="careers-process">

        <div className="container-custom">

          <div className="process-heading">

            <div>

              <div className="section-label">
                <span></span>
                HOW WE HIRE
              </div>

              <h2 className="section-title">
                Simple process.
                <br />
                <span className="gradient-text">
                  No unnecessary layers.
                </span>
              </h2>

            </div>

            <p>
              We keep conversations simple and focus on
              your skills, your thinking and your potential.
            </p>

          </div>


          <div className="career-process-grid">

            {process.map((item) => (

              <div
                className="career-process-card"
                key={item.number}
              >

                <div className="process-number">
                  {item.number}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                <i className="bi bi-arrow-up-right"></i>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          TALENT CTA
      ========================================= */}

      <section className="careers-talent">

        <div className="container-custom">

          <div className="careers-talent-box">

            <div>

              <span>
                DON'T SEE YOUR ROLE?
              </span>

              <h2>
                We might still
                <br />
                need
                <span className="gradient-text">
                  {" "}you.
                </span>
              </h2>

              <p>
                If you are talented, curious and excited
                about digital work, send us your profile.
                The right opportunity might not be listed yet.
              </p>

            </div>

            <Link
              to="/contact"
              className="btn-primary-custom"
            >
              Introduce Yourself
              <i className="bi bi-arrow-up-right"></i>
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================
          FINAL CTA
      ========================================= */}

      <section className="careers-cta">

        <div className="careers-cta-grid"></div>
        <div className="careers-cta-glow"></div>

        <div className="container-custom">

          <div className="careers-cta-inner">

            <span>
              YOUR NEXT CHAPTER
            </span>

            <h2>
              Come build
              <br />
              something
              <span className="gradient-text">
                {" "}great.
              </span>
            </h2>

            <p>
              Great products start with great people.
              Let's see what we can create together.
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

export default Careers;