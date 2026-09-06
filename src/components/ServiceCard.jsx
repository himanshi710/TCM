import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({
  number,
  icon,
  title,
  description,
  tags = [],
}) => {
  return (
    <article className="service-card">

      {/* Decorative background */}
      <div className="service-card-grid"></div>
      <div className="service-card-glow"></div>

      {/* Top */}
      <div className="service-card-top">

        <span className="service-number">
          {number}
        </span>

        <div className="service-icon-wrap">
          <div className="service-icon">
            <i className={`bi ${icon}`}></i>
          </div>

          <span className="service-icon-ring"></span>
        </div>

      </div>


      {/* Content */}
      <div className="service-card-content">

        <span className="service-small-label">
          DIGITAL SERVICE
        </span>

        <h3>{title}</h3>

        <p>{description}</p>


        {/* Tags */}
        {tags.length > 0 && (
          <div className="service-tags">
            {tags.map((tag, index) => (
              <span key={index}>
                {tag}
              </span>
            ))}
          </div>
        )}

      </div>


      {/* Footer */}
      <div className="service-card-footer">

        <Link
          to="/contact"
          className="service-card-link"
        >
          <span>Explore service</span>

          <span className="service-arrow">
            <i className="bi bi-arrow-up-right"></i>
          </span>
        </Link>

        <span className="service-footer-line"></span>

      </div>


      {/* Corner decoration */}
      <span className="service-corner service-corner-top"></span>
      <span className="service-corner service-corner-bottom"></span>

    </article>
  );
};

export default ServiceCard;