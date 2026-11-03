let events = [
  {
    id: 1,
    name: "Tech Fest 2026",
    category: "TECH",
    description: "Explore innovation and showcase your technical skills.",
    venue: "Auditorium",
    date: "2026-10-15",
  },
  {
    id: 2,
    name: "Cultural Day",
    category: "CULTURE",
    description: "Celebrate music, dance and art performances.",
    venue: "Main Hall",
    date: "2026-10-20",
  },
  {
    id: 3,
    name: "Inter-College Sports Meet",
    category: "SPORTS",
    description: "Compete, collaborate and showcase sportsmanship.",
    venue: "Sports Ground",
    date: "2026-10-28",
  },
  {
    id: 4,
    name: "Web Design Showcase",
    category: "DESIGN",
    description: "Present creative websites and learn modern UI design.",
    venue: "Design Studio",
    date: "2026-11-05",
  },
];

export function getEvents() {
  return Promise.resolve([...events]);
}

export function createEvent(eventData) {
  const savedEvent = {
    ...eventData,
    id: events.length ? Math.max(...events.map(event => Number(event.id))) + 1 : 1,
  };

  events = [...events, savedEvent];
  return Promise.resolve(savedEvent);
}

export function deleteEvent(eventId) {
  events = events.filter(event => String(event.id) !== String(eventId));
  return Promise.resolve();
}

export function updateEvent(eventId, eventData) {
  let updatedEvent = null;
  events = events.map(event => {
    if (String(event.id) === String(eventId)) {
      updatedEvent = { ...event, ...eventData, id: event.id };
      return updatedEvent;
    }
    return event;
  });
  return updatedEvent
    ? Promise.resolve(updatedEvent)
    : Promise.reject(new Error("Event not found."));
}

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";
let localRegistrations = [];

export async function createRegistration(registrationData) {
  try {
    const response = await fetch(`${API_URL}/registrations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registrationData)
    });

    if (!response.ok) {
      throw new Error(`Registration failed with status ${response.status}.`);
    }

    return response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      const savedRegistration = {
        ...registrationData,
        id: localRegistrations.length + 1,
        createdLocally: true
      };
      localRegistrations = [...localRegistrations, savedRegistration];
      return savedRegistration;
    }
    throw error;
  }
}

export const eventService = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  createRegistration
};