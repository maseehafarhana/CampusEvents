import { Link, useParams } from "react-router-dom";
import culturalImage from "../../assets/cultural.webp";
import sportsImage from "../../assets/download.webp";
import techImage from "../../assets/saec.jpg";
import designImage from "../../assets/OIP.jpg";

export default function EventDetailsPage({ events, loading }) {
  const { eventId } = useParams();
  const event = events.find(item => String(item.id) === eventId);

  if (loading) {
    return <p className="events-section" role="status">Loading event...</p>;
  }

  if (!event) {
    return (
      <section className="events-section">
        <h1>Event not found</h1>
        <Link to="/events">Browse all events</Link>
      </section>
    );
  }

  const category = String(event.category ?? "GENERAL").toUpperCase();
  const eventImages = {
    CULTURE: culturalImage,
    TECH: techImage,
    SPORTS: sportsImage,
    DESIGN: designImage,
  };
  const eventImage = event.image || eventImages[category] || culturalImage;

  return (
    <section className="events-section event-detail-page">
      <Link className="back-to-events" to="/events">
        ← Back to events
      </Link>
      <div className="event-detail-card">
        <div className="event-detail-image">
          <img
            src={eventImage}
            alt={`${event.name ?? event.title} campus event`}
            onError={imageElement => {
              if (imageElement.currentTarget.src !== culturalImage) {
                imageElement.currentTarget.src = culturalImage;
              }
            }}
          />
          <span>{event.category}</span>
        </div>
        <div className="event-detail-content">
          <p className="eyebrow">{event.category}</p>
          <h1>{event.name ?? event.title}</h1>
          <p className="event-detail-description">{event.description}</p>
          <div className="event-detail-meta">
            <div>
              <span>Date and time</span>
              <strong>{event.date}</strong>
            </div>
            <div>
              <span>Location</span>
              <strong>{event.venue}</strong>
            </div>
          </div>
          <div className="event-actions">
            <Link className="btn-primary" to={`/register/${event.id}`}>
              Register for this event
            </Link>
            <Link className="browse-events-button" to="/events">
              Browse other events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}