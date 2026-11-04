const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";
let localRegistrations = [];

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