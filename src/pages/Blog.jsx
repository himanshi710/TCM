import { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const posts = [
  {
    id: 1,
    date: "06 SEP 2026",
    category: "DEVELOPMENT",
    read: "6 MIN READ",
    title: "A website is not just a design. It is a digital system.",
    excerpt:
      "A strong website connects structure, interface, performance and business goals. At The Code Munk, we look beyond the visual layer and build frontend experiences that are made to work.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1800&q=90",
    featured: true,
  },
  {
    id: 2,
    date: "28 AUG 2026",
    category: "REACT",
    read: "5 MIN READ",
    title: "Why we build interfaces with React components",
    excerpt:
      "Reusable components are more than a development pattern. They create consistency, reduce repetition and make a growing interface easier to improve.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1500&q=90",
  },
  {
    id: 3,
    date: "21 AUG 2026",
    category: "UI / UX",
    read: "4 MIN READ",
    title: "Good UI starts before the first line of CSS",
    excerpt:
      "Before colors, shadows and animations, a useful interface needs hierarchy, purpose and a clear path for the person using it.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1500&q=90",
  },
  {
    id: 4,
    date: "14 AUG 2026",
    category: "API",
    read: "5 MIN READ",
    title: "What happens when a frontend meets a real API",
    excerpt:
      "Connecting a React interface to real data changes the way a website behaves. Here's how we think about API-ready frontend experiences.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1500&q=90",
  },
  {
    id: 5,
    date: "07 AUG 2026",
    category: "PERFORMANCE",
    read: "4 MIN READ",
    title: "A beautiful website still needs to feel fast",
    excerpt:
      "Animations and visual details should never come at the cost of usability. Performance is part of the experience, not something added at the end.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1500&q=90",
  },
  {
    id: 6,
    date: "30 JUL 2026",
    category: "FRONTEND",
    read: "6 MIN READ",
    title: "Responsive design means more than shrinking a layout",
    excerpt:
      "A genuinely responsive website adapts its hierarchy, spacing, navigation and interactions to the way people use different screens.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1500&q=90",
  },
  {
    id: 7,
    date: "22 JUL 2026",
    category: "DESIGN",
    read: "5 MIN READ",
    title: "How visual hierarchy makes websites easier to understand",
    excerpt:
      "Typography, spacing, contrast and composition can guide attention without forcing users to think about where they should look next.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1500&q=90",
  },
  {
    id: 8,
    date: "10 JUL 2026",
    category: "WORKFLOW",
    read: "4 MIN READ",
    title: "From idea to interface: how we approach a new project",
    excerpt:
      "Every project begins with questions. Understanding the business, audience and purpose helps us decide what the frontend actually needs.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1500&q=90",
  },
];

const categories = [
  "ALL",
  "DEVELOPMENT",
  "REACT",
  "UI / UX",
  "API",
  "PERFORMANCE",
  "DESIGN",
  "WORKFLOW",
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredPosts =
    activeCategory === "ALL"
      ? posts
      : posts.filter(
          (post) => post.category === activeCategory
        );

  const featuredPost = posts[0];

  return (
    <div className="blog-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="inner-page-hero blog-hero">

        <div className="blog-hero-grid"></div>
        <div className="blog-hero-glow"></div>

        <div className="inner-hero-overlay"></div>

        <div className="container-custom inner-hero-content">

          <div className="blog-hero-top">

            <span className="page-kicker">
              <span></span>
              THE CODE MUNK / JOURNAL
            </span>

            <span className="blog-hero-index">
              08 — 2026
            </span>

          </div>

          <h1>
            We build.
            <span> We learn.</span>
          </h1>

          <p>
            Practical thoughts from our frontend workspace —
            React development, UI / UX, responsive interfaces,
            API integration and the details that make digital
            experiences better.
          </p>

          <div className="blog-hero-bottom">

            <div className="blog-scroll">
              <span className="scroll-line"></span>
              SCROLL TO EXPLORE
            </div>

            <div className="blog-hero-meta">
              <span>REACT</span>
              <span>UI / UX</span>
              <span>FRONTEND</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="section-padding blog-intro">

        <div className="container-custom">

          <div className="blog-intro-grid">

            <div>

              <div className="section-label">
                <span></span>
                INSIDE THE CODE MUNK
              </div>

              <h2 className="section-title">
                Code is only
                <br />
                <span className="gradient-text">
                  one part.
                </span>
              </h2>

            </div>

            <div className="blog-intro-copy">

              <p>
                We work on websites and digital interfaces for
                real businesses. Every project teaches us something
                about users, design, technology and the way people
                interact with the web.
              </p>

              <p>
                This journal is where we turn those observations
                into practical ideas — without unnecessary
                technical noise.
              </p>

              <div className="blog-intro-line"></div>

              <span>
                BUILD · LEARN · REFINE
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED
      ===================================================== */}

      <section className="blog-featured-section">

        <div className="container-custom">

          <div className="blog-section-heading">

            <div>

              <div className="section-label">
                <span></span>
                FEATURED INSIGHT
              </div>

              <h2 className="section-title">
                Ideas from
                <br />
                <span className="gradient-text">
                  the real work.
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
                src={featuredPost.image}
                alt={featuredPost.title}
              />

              <div className="featured-image-overlay"></div>

              <span className="featured-tag">
                {featuredPost.category}
              </span>

              <div className="featured-image-number">
                01
              </div>

            </div>


            <div className="featured-blog-content">

              <div className="featured-date">
                {featuredPost.date}
              </div>

              <h3>
                {featuredPost.title}
              </h3>

              <p>
                {featuredPost.excerpt}
              </p>

              <div className="featured-footer">

                <span>
                  {featuredPost.read}
                </span>

                <Link
                  to="/contact"
                  className="blog-read-button"
                >
                  Discuss an Idea
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>

            </div>

          </article>

        </div>

      </section>


      {/* =====================================================
          CATEGORY BAR
      ===================================================== */}

      <section className="blog-category-section">

        <div className="container-custom">

          <div className="blog-category-inner">

            <span className="category-title">
              EXPLORE THE JOURNAL
            </span>

            <div className="category-list">

              {categories.map((category) => (

                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={
                    activeCategory === category
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


      {/* =====================================================
          ARTICLES
      ===================================================== */}

      <section className="section-padding blog-articles">

        <div className="container-custom">

          <div className="blog-section-heading articles-heading">

            <div>

              <div className="section-label">
                <span></span>
                FROM OUR WORKSPACE
              </div>

              <h2 className="section-title">
                Things we're
                <br />
                <span className="gradient-text">
                  thinking about.
                </span>
              </h2>

            </div>

            <p>
              Frontend lessons, design decisions and
              practical observations from projects we build.
            </p>

          </div>


          <div className="blog-grid">

            {filteredPosts
              .filter((post) => !post.featured)
              .map((post, index) => (

                <article
                  className="blog-card"
                  key={post.id}
                >

                  <div className="blog-card-image">

                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                    />

                    <div className="blog-card-overlay"></div>

                    <span className="blog-card-category">
                      {post.category}
                    </span>

                    <span className="blog-card-number">
                      {String(post.id).padStart(2, "0")}
                    </span>

                    <div className="blog-card-arrow">
                      <i className="bi bi-arrow-up-right"></i>
                    </div>

                  </div>


                  <div className="blog-card-content">

                    <div className="blog-card-meta">
                      <span>{post.date}</span>
                      <span>{post.read}</span>
                    </div>

                    <h3>
                      {post.title}
                    </h3>

                    <p>
                      {post.excerpt}
                    </p>

                    <Link to="/contact">
                      Discuss This
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>

                  </div>

                </article>

              ))}

          </div>

          {filteredPosts.filter(
            (post) => !post.featured
          ).length === 0 && (

            <div className="blog-empty">
              <i className="bi bi-journal-code"></i>

              <h3>
                More stories are coming.
              </h3>

              <p>
                We're currently working on new ideas
                for this category.
              </p>
            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          INSIGHT STATS
      ===================================================== */}

      <section className="blog-stats-section">

        <div className="container-custom">

          <div className="blog-stats-grid">

            <div className="blog-stat">
              <strong>08</strong>
              <span>INSIGHTS</span>
              <p>
                Practical ideas from our workspace.
              </p>
            </div>

            <div className="blog-stat">
              <strong>07</strong>
              <span>TOPICS</span>
              <p>
                Development, design, React and more.
              </p>
            </div>

            <div className="blog-stat">
              <strong>∞</strong>
              <span>CURIOSITY</span>
              <p>
                Always learning something new.
              </p>
            </div>

            <div className="blog-stat">
              <strong>01</strong>
              <span>MISSION</span>
              <p>
                Build digital experiences that work.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NEWSLETTER
      ===================================================== */}

      <section className="blog-newsletter">

        <div className="blog-newsletter-orb orb-one"></div>
        <div className="blog-newsletter-orb orb-two"></div>

        <div className="container-custom">

          <div className="newsletter-inner">

            <div className="newsletter-label">
              <span></span>
              THE DIGITAL SIGNAL
            </div>

            <h2>
              Useful ideas.
              <br />
              <span>Nothing unnecessary.</span>
            </h2>

            <p>
              Get occasional insights about React,
              frontend development, UI / UX and building
              better digital experiences.
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
              No noise. No unnecessary emails.
            </small>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="blog-final-cta">

        <div className="container-custom">

          <div className="blog-final-inner">

            <div>

              <span className="section-label">
                <span></span>
                HAVE SOMETHING TO BUILD?
              </span>

              <h2>
                Let's turn
                <span>
                  {" "}your idea into something real.
                </span>
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