import { Link } from "react-router-dom";
import eventImage from "../../assets/cultural.webp";
import heroImage from "../../assets/hero.png";

export default function HomePage() {
  return (
    <section className="hero" id="home">
      <div className="hero-promo">
        <img
          className="hero-promo-art"
          src={heroImage}
          alt=""
          aria-hidden="true"
        />

        <div className="hero-copy">
          <p className="eyebrow">YOUR CAMPUS, YOUR COMMUNITY</p>
          <h1>
            Make Your Campus
            <br />
            <span>Experience Count.</span>
          </h1>
          <p className="hero-description">
            Discover exciting events, meet new people, and make the most of your
            college life.
          </p>
          <div className="hero-actions">
            <Link to="/events" className="hero-button">
              Explore Events
            </Link>
            <Link to="/events" className="hero-button hero-button-secondary">
              Register for an Event
            </Link>
          </div>
        </div>

        <div className="hero-event-card">
          <img src={eventImage} alt="Students attending a campus event" />
          <div className="hero-event-overlay">
            <span>Campus events</span>
            <strong>Find your people.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}