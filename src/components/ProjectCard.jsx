import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({
  number,
  title,
  category,
  image,
}) => {
  return (
    <article className="project-card">

      {/* Image */}
      <div className="project-image-wrap">

        <img
          src={image}
          alt={title}
          className="project-image"
        />

        <div className="project-image-overlay"></div>

        {/* Grid */}
        <div className="project-image-grid"></div>

        {/* Number */}
        <span className="project-number">
          {number}
        </span>

        {/* Category */}
        <span className="project-floating-category">
          {category}
        </span>

        {/* View button */}
        <Link
          to="/contact"
          className="project-arrow"
          aria-label={`View ${title}`}
        >
          <i className="bi bi-arrow-up-right"></i>
        </Link>

      </div>


      {/* Information */}
      <div className="project-info">

        <div className="project-title-wrap">

          <span className="project-category">
            {category}
          </span>

          <h3>{title}</h3>

        </div>

        <div className="project-info-right">

          <span className="project-line"></span>

          <Link
            to="/contact"
            className="project-view-link"
          >
            View project
            <i className="bi bi-arrow-up-right"></i>
          </Link>

        </div>

      </div>

      {/* Bottom accent */}
      <div className="project-card-accent"></div>

    </article>
  );
};

export default ProjectCard;