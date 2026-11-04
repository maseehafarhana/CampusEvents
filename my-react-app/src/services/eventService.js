const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

async function requestJson(url, options) {
  const response = await fetch(url, options);

  if (!response.ok) {
    let message = `Request failed with status ${response.status}.`;
    try {
      const details = await response.json();
      if (details.message) {
        message = details.message;
      }
    } catch {
      // Use the status-based message when the response has no JSON body.
    }
    throw new Error(message);
  }

  return response.status === 204 ? null : response.json();
}

export function getEvents() {
  return requestJson(`${API_URL}/events`);
}

export function createEvent(eventData) {
  return requestJson(`${API_URL}/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData)
  });
}

export function updateEvent(eventId, eventData) {
  return requestJson(`${API_URL}/events/${encodeURIComponent(eventId)}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData)
  });
}

export function deleteEvent(eventId) {
  return requestJson(`${API_URL}/events/${encodeURIComponent(eventId)}`, {
    method: "DELETE"
  });
}

export async function createRegistration(registrationData) {
  return requestJson(`${API_URL}/registrations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registrationData)
  });
}

export const eventService = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  createRegistration
};