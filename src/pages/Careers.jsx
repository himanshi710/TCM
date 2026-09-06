
import { Link } from "react-router-dom";
import "./Careers.css";

const jobs = [
  {
    number: "01",
    title: "Frontend Developer",
    type: "FULL TIME",
    location: "REMOTE / INDIA",
    experience: "1–3 YEARS",
    icon: "bi-code-slash",
    description:
      "Build responsive production-ready websites and interfaces using React.js, JavaScript and modern CSS. You will work closely with design and project requirements to turn ideas into polished digital experiences.",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3"],
    responsibilities: [
      "Develop responsive React interfaces",
      "Convert designs into reusable components",
      "Integrate REST APIs",
      "Optimize frontend performance",
    ],
  },
  {
    number: "02",
    title: "UI / UX Designer",
    type: "FULL TIME",
    location: "REMOTE / INDIA",
    experience: "1–3 YEARS",
    icon: "bi-bezier2",
    description:
      "Create clean, intuitive and conversion-focused interfaces for websites and digital products. You will shape layouts, user flows and visual systems from concept to final design.",
    skills: ["Figma", "UI Design", "UX", "Prototyping"],
    responsibilities: [
      "Create website and product interfaces",
      "Build wireframes and prototypes",
      "Develop reusable visual systems",
      "Work with developers during implementation",
    ],
  },
  {
    number: "03",
    title: "React Developer",
    type: "FREELANCE",
    location: "REMOTE",
    experience: "PROJECT BASED",
    icon: "bi-filetype-jsx",
    description:
      "Join selected client projects and help transform approved designs into clean, responsive React applications with reusable components and reliable API integrations.",
    skills: ["React", "JavaScript", "REST API", "Git"],
    responsibilities: [
      "Develop reusable React components",
      "Connect frontend with APIs",
      "Fix UI and responsive issues",
      "Maintain clean Git workflows",
    ],
  },
];

const benefits = [
  {
    number: "01",
    icon: "bi-bullseye",
    title: "Real Client Work",
    text:
      "Work on actual websites, interfaces and digital products instead of repetitive practice projects.",
  },
  {
    number: "02",
    icon: "bi-phone",
    title: "Remote First",
    text:
      "Our work is designed around remote collaboration, clear communication and outcome-focused delivery.",
  },
  {
    number: "03",
    icon: "bi-lightning-charge",
    title: "Learn by Building",
    text:
      "Improve your skills by solving real frontend, design, API and performance challenges.",
  },
  {
    number: "04",
    icon: "bi-people",
    title: "Close Collaboration",
    text:
      "Work directly with the people involved in design, development and project decisions.",
  },
];

const values = [
  {
    number: "01",
    title: "Quality over shortcuts",
    text:
      "We care about clean implementation, responsive behaviour and details that users actually notice.",
  },
  {
    number: "02",
    title: "Own your work",
    text:
      "Take responsibility for your decisions, communicate early and solve problems instead of hiding them.",
  },
  {
    number: "03",
    title: "Keep improving",
    text:
      "Technology changes quickly. We expect curiosity and a willingness to learn better ways of building.",
  },
  {
    number: "04",
    title: "Build for people",
    text:
      "Good technology is useful technology. Every design and development decision should serve the user.",
  },
];

const process = [
  {
    number: "01",
    title: "Apply",
    text:
      "Share your resume, portfolio, GitHub or a short introduction about what you build.",
  },
  {
    number: "02",
    title: "Conversation",
    text:
      "We discuss your experience, strengths, interests and the kind of work you want to do.",
  },
  {
    number: "03",
    title: "Practical Task",
    text:
      "For selected roles, we may share a small practical challenge relevant to the position.",
  },
  {
    number: "04",
    title: "Decision",
    text:
      "If the role and working style are a good match, we discuss the opportunity and next steps.",
  },
];

const Careers = () => {
  return (
    <div className="careers-page">

      {/* HERO */}
      <section className="careers-hero">

        <div className="careers-hero-bg"></div>
        <div className="careers-hero-grid"></div>
        <div className="careers-hero-glow"></div>

        <div className="container-custom careers-hero-inner">

          <div className="careers-hero-content">

            <div className="careers-kicker">
              <span></span>
              CAREERS / THE CODE MUNK
            </div>

            <h1>
              Build digital
              <span className="gradient-text">
                {" "}work that matters.
              </span>
            </h1>

            <p>
              We are building a small, focused digital team around
              frontend development, design and technology. If you
              enjoy turning ideas into useful digital experiences,
              there may be a place for you here.
            </p>

            <div className="careers-hero-actions">

              <a
                href="#open-positions"
                className="btn-primary-custom"
              >
                Explore Open Roles
                <i className="bi bi-arrow-down"></i>
              </a>

              <Link
                to="/contact"
                className="btn-outline-custom"
              >
                Send Your Profile
                <i className="bi bi-arrow-up-right"></i>
              </Link>

            </div>

            <div className="careers-trust-row">

              <span>
                <i className="bi bi-check2"></i>
                REAL PROJECTS
              </span>

              <span>
                <i className="bi bi-check2"></i>
                REMOTE FRIENDLY
              </span>

              <span>
                <i className="bi bi-check2"></i>
                FRONTEND FOCUSED
              </span>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div className="careers-hero-visual">

            <div className="career-visual-circle circle-one"></div>
            <div className="career-visual-circle circle-two"></div>
            <div className="career-visual-circle circle-three"></div>

            <div className="career-visual-center">

              <div className="career-center-icon">
                <i className="bi bi-code-square"></i>
              </div>

              <span>
                BUILD
                <br />
                SOMETHING
                <br />
                REAL
              </span>

            </div>

            <div className="career-floating-card career-card-one">
              <i className="bi bi-code-slash"></i>
              <span>DEVELOP</span>
            </div>

            <div className="career-floating-card career-card-two">
              <i className="bi bi-palette"></i>
              <span>DESIGN</span>
            </div>

            <div className="career-floating-card career-card-three">
              <i className="bi bi-rocket-takeoff"></i>
              <span>DELIVER</span>
            </div>

          </div>

        </div>


        <div className="careers-hero-bottom">

          <div className="container-custom">

            <span>
              PEOPLE × DESIGN × CODE
            </span>

            <div></div>

            <span className="career-scroll-text">
              SCROLL TO EXPLORE
            </span>

            <i className="bi bi-arrow-down"></i>

          </div>

        </div>

      </section>


      {/* INTRO */}

      <section className="section-padding careers-intro">

        <div className="container-custom">

          <div className="careers-intro-grid">

            <div>

              <div className="section-label">
                <span></span>
                LIFE AT THE CODE MUNK
              </div>

              <h2 className="section-title">
                Small team.
                <br />
                <span className="gradient-text">
                  Real responsibility.
                </span>
              </h2>

            </div>

            <div className="careers-intro-copy">

              <p>
                The Code Munk is focused on building modern
                websites, responsive interfaces and API-connected
                digital experiences for real businesses.
              </p>

              <p>
                That means every person has an opportunity to
                contribute. You won't simply receive a task and
                disappear into a process. You'll understand the
                problem, make decisions and see your work go live.
              </p>

              <div className="career-intro-note">
                <i className="bi bi-arrow-up-right"></i>

                <span>
                  We value people who think beyond their assigned
                  task and care about the final experience.
                </span>
              </div>

            </div>

          </div>


          <div className="career-stats">

            <div>
              <strong>01</strong>
              <span>SMALL TEAM</span>
            </div>

            <div>
              <strong>10+</strong>
              <span>DIGITAL PROJECTS</span>
            </div>

            <div>
              <strong>15+</strong>
              <span>API INTEGRATIONS</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>RESPONSIVE FIRST</span>
            </div>

          </div>

        </div>

      </section>


      {/* BENEFITS */}

      <section className="careers-benefits">

        <div className="container-custom">

          <div className="benefits-heading">

            <div>

              <div className="section-label">
                <span></span>
                WHY WORK WITH US
              </div>

              <h2 className="section-title">
                Build skills.
                <br />
                <span className="gradient-text">
                  Build confidence.
                </span>
              </h2>

            </div>

            <p>
              We want talented people to grow through meaningful
              work, practical challenges and close collaboration.
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


      {/* VALUES */}

      <section className="section-padding careers-values">

        <div className="container-custom">

          <div className="values-heading">

            <div>

              <div className="section-label">
                <span></span>
                WHAT WE VALUE
              </div>

              <h2 className="section-title">
                How we
                <br />
                <span className="gradient-text">
                  work together.
                </span>
              </h2>

            </div>

            <p>
              Skills matter. But the way you think, communicate
              and take ownership matters just as much.
            </p>

          </div>


          <div className="career-values-grid">

            {values.map((value) => (

              <article
                className="career-value-card"
                key={value.number}
              >

                <span className="career-value-number">
                  {value.number}
                </span>

                <h3>
                  {value.title}
                </h3>

                <p>
                  {value.text}
                </p>

                <span className="career-value-arrow">
                  <i className="bi bi-arrow-up-right"></i>
                </span>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* OPEN POSITIONS */}

      <section
        className="section-padding careers-positions"
        id="open-positions"
      >

        <div className="container-custom">

          <div className="positions-heading">

            <div>

              <div className="section-label">
                <span></span>
                CURRENT OPPORTUNITIES
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

              <article
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

                    <div>
                      <span className="job-role-label">
                        OPEN POSITION
                      </span>

                      <h3>
                        {job.title}
                      </h3>
                    </div>

                    <span className="job-type">
                      {job.type}
                    </span>

                  </div>

                  <p className="job-description">
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

                  <div className="job-responsibilities">

                    <span>
                      WHAT YOU'LL WORK ON
                    </span>

                    <div>
                      {job.responsibilities.map((item) => (
                        <p key={item}>
                          <i className="bi bi-arrow-up-right"></i>
                          {item}
                        </p>
                      ))}
                    </div>

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

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* WHAT WE LOOK FOR */}

      <section className="careers-looking">

        <div className="container-custom">

          <div className="looking-box">

            <div className="looking-number">
              04
            </div>

            <div className="looking-content">

              <span>
                MORE IMPORTANT THAN A PERFECT RESUME
              </span>

              <h2>
                Show us how
                <br />
                you
                <span className="gradient-text">
                  {" "}think.
                </span>
              </h2>

              <p>
                We appreciate strong fundamentals, curiosity and
                people who can explain their decisions. A portfolio,
                GitHub profile, live project or even a thoughtful
                introduction can tell us more than a long list of
                keywords.
              </p>

            </div>

            <div className="looking-points">

              <div>
                <i className="bi bi-check2"></i>
                <span>Strong fundamentals</span>
              </div>

              <div>
                <i className="bi bi-check2"></i>
                <span>Problem-solving mindset</span>
              </div>

              <div>
                <i className="bi bi-check2"></i>
                <span>Attention to detail</span>
              </div>

              <div>
                <i className="bi bi-check2"></i>
                <span>Clear communication</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* PROCESS */}

      <section className="careers-process">

        <div className="container-custom">

          <div className="process-heading">

            <div>

              <div className="section-label">
                <span></span>
                OUR HIRING PROCESS
              </div>

              <h2 className="section-title">
                Simple process.
                <br />
                <span className="gradient-text">
                  Clear conversations.
                </span>
              </h2>

            </div>

            <p>
              No unnecessary layers. We want to understand what
              you can do, how you think and whether we can work
              well together.
            </p>

          </div>


          <div className="career-process-grid">

            {process.map((item) => (

              <div
                className="career-process-card"
                key={item.number}
              >

                <div className="process-card-top">

                  <span className="process-number">
                    {item.number}
                  </span>

                  <i className="bi bi-arrow-up-right"></i>

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* TALENT CTA */}

      <section className="careers-talent">

        <div className="container-custom">

          <div className="careers-talent-box">

            <div className="talent-content">

              <span>
                NO PERFECT ROLE? NO PROBLEM.
              </span>

              <h2>
                Have something
                <br />
                interesting to
                <span className="gradient-text">
                  {" "}bring?
                </span>
              </h2>

              <p>
                If your role isn't listed but you think your skills
                could add value to The Code Munk, introduce yourself.
                Tell us what you build, what you're good at and what
                kind of work you want to do.
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


      {/* FINAL CTA */}

      <section className="careers-cta">

        <div className="careers-cta-grid"></div>
        <div className="careers-cta-glow"></div>

        <div className="container-custom">

          <div className="careers-cta-inner">

            <span>
              YOUR NEXT CHAPTER
            </span>

            <h2>
              Don't just
              <br />
              write code.
              <br />
              <span className="gradient-text">
                Build something.
              </span>
            </h2>

            <p>
              Bring your skills, curiosity and ideas.
              Let's create digital experiences that people
              actually enjoy using.
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

