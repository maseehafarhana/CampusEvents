import { useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../../context/FavoritesContext";
import culturalImage from "../../assets/cultural.webp";
import sportsImage from "../../assets/download.webp";
import techImage from "../../assets/saec.jpg";
import designImage from "../../assets/OIP.jpg";
import Button from "../Common/Button/button";

function EventCard({ event, onRemove, onEdit }) {
  const [actionError, setActionError] = useState("");
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.has(String(event.id));
  const category = String(event.category ?? "GENERAL").toUpperCase();
  const imageByCategory = {
    CULTURE: culturalImage,
    TECH: techImage,
    SPORTS: sportsImage,
    DESIGN: designImage,
  };
  const eventImage = event.image || imageByCategory[category] || culturalImage;

  async function handleRemove() {
    setActionError("");
    try {
      await onRemove(event.id);
    } catch (error) {
      setActionError(error.message || "Could not remove the event.");
    }
  }

  return (
    <article className="event-card">
      <div className="event-banner">
        <img
          src={eventImage}
          alt={`${event.name ?? event.title} campus event`}
          onError={eventImageElement => {
            if (eventImageElement.currentTarget.src !== culturalImage) {
              eventImageElement.currentTarget.src = culturalImage;
            }
          }}
        />
        <span>{event.category}</span>
        <Button
          type="button"
          className={isFavorite ? "favorite-icon active" : "favorite-icon"}
          onClick={() => toggleFavorite(event.id)}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? "♥" : "♡"}
        </Button>
      </div>

      <div className="event-details">
        <span className="category">
          {event.category}
        </span>

        <h2>{event.name ?? event.title}</h2>
        <p>{event.description}</p>

        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Venue:</strong> {event.venue}</p>
        {actionError && <p className="form-error" role="alert">{actionError}</p>}

        <div className="event-actions">
          <Link className="view-event-button" to={`/events/${event.id}`}>
            View event
          </Link>
          <Link className="btn-primary" to={`/register/${event.id}`}>
            Register
          </Link>
          <Button
            type="button"
            className="btn-edit"
            onClick={() => onEdit?.(event)}
          >
            Edit
          </Button>
          <Button
            className="btn-remove"
            onClick={handleRemove}
          >
            Remove Event
          </Button>
        </div>
      </div>
    </article>
  );
}
export default EventCard