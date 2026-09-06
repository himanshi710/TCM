import "./SectionTitle.css";

const SectionTitle = ({
  label,
  title,
  description,
  align = "left",
}) => {
  return (
    <div
      className={`section-heading section-heading-${align}`}
    >
      {label && (
        <div className="section-heading-label">
          <span className="section-heading-line"></span>
          <span className="section-heading-label-text">
            {label}
          </span>
        </div>
      )}

      {title && (
        <h2
          className="section-heading-title"
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
      )}

      {description && (
        <p className="section-heading-description">
          {description}
        </p>
      )}

      <div className="section-heading-decoration">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default SectionTitle;