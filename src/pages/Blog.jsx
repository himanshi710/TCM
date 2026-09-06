import { Link } from "react-router-dom";
import "./Blog.css";

const posts = [
  {
    date: "06 SEP 2026",
    category: "DEVELOPMENT",
    title: "Why modern websites need more than good design",
    excerpt:
      "A beautiful interface is only the beginning. Modern websites need speed, accessibility, thoughtful interactions and a strong technical foundation.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=85",
    featured: true,
  },
  {
    date: "28 AUG 2026",
    category: "UI / UX",
    title: "Designing digital experiences people remember",
    excerpt:
      "Great experiences are built around clarity, emotion and the small details users notice without even realizing it.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=85",
  },
  {
    date: "14 AUG 2026",
    category: "TECHNOLOGY",
    title: "Building scalable React interfaces",
    excerpt:
      "From reusable components to clean architecture, discover the principles behind maintainable React applications.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
  },
  {
    date: "02 AUG 2026",
    category: "PERFORMANCE",
    title: "The hidden impact of website performance",
    excerpt:
      "Performance affects more than loading time. It influences user experience, engagement and how people perceive your brand.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
  },
  {
    date: "22 JUL 2026",
    category: "DESIGN",
    title: "Creating interfaces with visual hierarchy",
    excerpt:
      "Learn how spacing, typography, contrast and composition can guide users naturally through a digital experience.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    date: "10 JUL 2026",
    category: "REACT",
    title: "Why component thinking changes frontend development",
    excerpt:
      "A component-first mindset can make interfaces easier to scale, improve and maintain as products grow.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85",
  },
];

const categories = [
  "ALL",
  "DEVELOPMENT",
  "UI / UX",
  "TECHNOLOGY",
  "DESIGN",
  "PERFORMANCE",
  "REACT",
];

const Blog = () => {
  return (
    <div className="blog-page">

      {/* ================= HERO ================= */}

      <section className="inner-page-hero blog-hero">

        <div className="blog-hero-grid"></div>
        <div className="blog-hero-glow"></div>

        <div className="inner-hero-overlay"></div>

        <div className="container-custom inner-hero-content">

          <div className="blog-hero-top">
            <span className="page-kicker">
              <span></span>
              INSIGHTS / JOURNAL
            </span>

            <span className="blog-hero-index">
              06 — 2026
            </span>
          </div>

          <h1>
            Ideas worth
            <span> sharing.</span>
          </h1>

          <p>
            Thoughts, experiments and practical ideas about design,
            development, technology and the future of digital experiences.
          </p>

          <div className="blog-hero-bottom">

            <div className="blog-scroll">
              <span className="scroll-line"></span>
              SCROLL TO EXPLORE
            </div>

            <div className="blog-hero-meta">
              <span>DESIGN</span>
              <span>DEVELOPMENT</span>
              <span>TECH</span>
            </div>

          </div>

        </div>
      </section>


      {/* ================= INTRO ================= */}

      <section className="section-padding blog-intro">

        <div className="container-custom">

          <div className="blog-intro-grid">

            <div>
              <div className="section-label">
                <span></span>
                THE DIGITAL DESK
              </div>

              <h2 className="section-title">
                We build.
                <br />
                <span className="gradient-text">
                  We learn.
                </span>
                <br />
                We share.
              </h2>
            </div>

            <div className="blog-intro-copy">

              <p>
                Technology moves quickly. Good ideas move even faster.
                Our journal is where we share the things we discover
                while designing and building digital products.
              </p>

              <p>
                From frontend development and React architecture to
                interface design and performance, these are practical
                insights from our digital workspace.
              </p>

              <div className="blog-intro-line"></div>

              <span>
                CURIOUS MINDS · BETTER PRODUCTS
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURED ARTICLE ================= */}

      <section className="blog-featured-section">

        <div className="container-custom">

          <div className="blog-section-heading">

            <div>
              <div className="section-label">
                <span></span>
                FEATURED STORY
              </div>

              <h2 className="section-title">
                Start with
                <br />
                <span className="gradient-text">
                  something great.
                </span>
              </h2>
            </div>

            <span className="blog-section-number">
              01 / FEATURED
            </span>

          </div>


          <article className="featured-blog-card">

            <div className="featured-blog-image">

              <img
                src={posts[0].image}
                alt={posts[0].title}
              />

              <div className="featured-image-overlay"></div>

              <span className="featured-tag">
                {posts[0].category}
              </span>

              <div className="featured-image-number">
                01
              </div>

            </div>


            <div className="featured-blog-content">

              <div className="featured-date">
                {posts[0].date}
              </div>

              <h3>
                {posts[0].title}
              </h3>

              <p>
                {posts[0].excerpt}
              </p>

              <div className="featured-footer">

                <span>
                  5 MIN READ
                </span>

                <Link
                  to="/contact"
                  className="blog-read-button"
                >
                  Read Article
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>

            </div>

          </article>

        </div>

      </section>


      {/* ================= CATEGORY BAR ================= */}

      <section className="blog-category-section">

        <div className="container-custom">

          <div className="blog-category-inner">

            <span className="category-title">
              EXPLORE TOPICS
            </span>

            <div className="category-list">

              {categories.map((category, index) => (
                <button
                  key={category}
                  className={
                    index === 0
                      ? "category-btn active"
                      : "category-btn"
                  }
                >
                  {category}
                </button>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= ARTICLES ================= */}

      <section className="section-padding blog-articles">

        <div className="container-custom">

          <div className="blog-section-heading articles-heading">

            <div>

              <div className="section-label">
                <span></span>
                LATEST ARTICLES
              </div>

              <h2 className="section-title">
                Fresh from
                <br />
                <span className="gradient-text">
                  our workspace.
                </span>
              </h2>

            </div>

            <p>
              Ideas, lessons and observations from
              the world of digital products.
            </p>

          </div>


          <div className="blog-grid">

            {posts.slice(1).map((post, index) => (

              <article
                className="blog-card"
                key={post.title}
              >

                <div className="blog-card-image">

                  <img
                    src={post.image}
                    alt={post.title}
                  />

                  <div className="blog-card-overlay"></div>

                  <span className="blog-card-category">
                    {post.category}
                  </span>

                  <span className="blog-card-number">
                    0{index + 2}
                  </span>

                  <div className="blog-card-arrow">
                    <i className="bi bi-arrow-up-right"></i>
                  </div>

                </div>


                <div className="blog-card-content">

                  <div className="blog-card-meta">
                    <span>{post.date}</span>
                    <span>5 MIN READ</span>
                  </div>

                  <h3>
                    {post.title}
                  </h3>

                  <p>
                    {post.excerpt}
                  </p>

                  <Link to="/contact">
                    Read Article
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ================= INSIGHT STATS ================= */}

      <section className="blog-stats-section">

        <div className="container-custom">

          <div className="blog-stats-grid">

            <div className="blog-stat">

              <strong>06</strong>

              <span>
                ARTICLES
              </span>

              <p>
                Ideas published and growing.
              </p>

            </div>


            <div className="blog-stat">

              <strong>03</strong>

              <span>
                CATEGORIES
              </span>

              <p>
                Design, technology and development.
              </p>

            </div>


            <div className="blog-stat">

              <strong>∞</strong>

              <span>
                CURIOSITY
              </span>

              <p>
                Always something new to explore.
              </p>

            </div>


            <div className="blog-stat">

              <strong>01</strong>

              <span>
                MISSION
              </span>

              <p>
                Build better digital experiences.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= NEWSLETTER ================= */}

      <section className="blog-newsletter">

        <div className="blog-newsletter-orb orb-one"></div>
        <div className="blog-newsletter-orb orb-two"></div>

        <div className="container-custom">

          <div className="newsletter-inner">

            <div className="newsletter-label">
              <span></span>
              STAY IN THE LOOP
            </div>

            <h2>
              Good ideas
              <br />
              <span>shouldn't stay hidden.</span>
            </h2>

            <p>
              Follow our latest thoughts on design,
              development and digital technology.
            </p>

            <div className="newsletter-form">

              <input
                type="email"
                placeholder="Your email address"
              />

              <button type="button">
                Subscribe
                <i className="bi bi-arrow-up-right"></i>
              </button>

            </div>

            <small>
              No spam. Just useful digital insights.
            </small>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="blog-final-cta">

        <div className="container-custom">

          <div className="blog-final-inner">

            <div>

              <span className="section-label">
                <span></span>
                HAVE AN IDEA?
              </span>

              <h2>
                Let's create
                <span> something worth talking about.</span>
              </h2>

            </div>

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

export default Blog;