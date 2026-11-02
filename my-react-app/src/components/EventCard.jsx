export default function EventCard({ image, tagClass, tagName, title, meta, desc }) {
  return (
    <article className="card">
      <div className="card-banner">
        <img src={image} alt={`${title} Banner`} />
        <span className="card-label">{tagName}</span>
      </div>
      <div className="card-body">
        <span className={`tag ${tagClass}`}>{tagName}</span>
        <h3>{title}</h3>
        <p className="meta">{meta}</p>
        <p className="desc">{desc}</p>
        <a href="#register" className="btn btn-primary btn-sm">View Details</a>
      </div>
    </article>
  );
}