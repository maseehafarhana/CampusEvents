const schedule = [
  {
    name: 'Tech Fest 2026',
    date: 'Oct 15, 2026',
    venue: 'Auditorium',
    category: 'Technical'
  },
  {
    name: 'Cultural Day',
    date: 'Oct 20, 2026',
    venue: 'Main Hall',
    category: 'Cultural'
  },
  {
    name: 'Sports Meet',
    date: 'Oct 28, 2026',
    venue: 'Sports Ground',
    category: 'Sports'
  }
];

export default function Schedule() {
  return (
    <section id="schedule" className="schedule">
      <h2 className="section-title">Event Schedule</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Event Name</th>
              <th scope="col">Date</th>
              <th scope="col">Venue</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((event) => (
              <tr key={event.name}>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.venue}</td>
                <td>{event.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}