import EventCard from './EventCard';
import techImg from '../assets/OIP.jpg';
import culturalImg from '../assets/cultural.webp';
import sportsImg from '../assets/download.webp';

export default function Events() {
  // Array containing all your event details
  const eventsData = [
    {
      id: 1,
      image: techImg,
      tagClass: 'tag-tech',
      tagName: 'Technical',
      title: 'Tech Fest 2026',
      meta: 'October 15, 2026 \u00a0 Auditorium',
      desc: 'Explore innovation and showcase your technical skills.'
    },
    {
      id: 2,
      image: culturalImg,
      tagClass: 'tag-culture',
      tagName: 'Culture',
      title: 'Cultural Day',
      meta: 'October 20, 2026 \u00a0 Main Hall',
      desc: 'Celebrate music, dance and art performances.'
    },
    {
      id: 3,
      image: sportsImg,
      tagClass: 'tag-sports',
      tagName: 'Sports',
      title: 'Inter-College Sports Meet',
      meta: 'October 28, 2026 \u00a0 Sports Ground',
      desc: 'Compete, collaborate and showcase sportsmanship.'
    }
  ];

  return (
    <section id="events" className="events">
      <div className="section-head">
        <div>
          <h2>Upcoming Events</h2>
          <p className="section-sub">Don't miss out on the latest campus activities.</p>
        </div>
        <a href="#schedule" className="view-link">View Schedule →</a>
      </div>

      <div className="card-grid">
        {eventsData.map((event) => (
          <EventCard 
            key={event.id}
            image={event.image}
            tagClass={event.tagClass}
            tagName={event.tagName}
            title={event.title}
            meta={event.meta}
            desc={event.desc}
          />
        ))}
      </div>
    </section>
  );
}