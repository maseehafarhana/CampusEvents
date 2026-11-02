import { useState } from "react";

export default function RegistrationForm({ eventName, events = [] }) {
  const [submitted, setSubmitted] = useState(false);
  const [registration, setRegistration] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setRegistration({
      name: formData.get("name"),
      email: formData.get("email"),
      department: formData.get("department"),
      event: formData.get("event"),
      attendance: formData.get("attendance") === "online" ? "Online" : "In person"
    });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="registration-success" role="status">
        <div className="success-icon" aria-hidden="true">✓</div>
        <h2>Registration confirmed!</h2>
        <p>Your seat has been reserved successfully.</p>
        <dl>
          <div><dt>Name</dt><dd>{registration.name}</dd></div>
          <div><dt>Email</dt><dd>{registration.email}</dd></div>
          <div><dt>Department</dt><dd>{registration.department}</dd></div>
          <div><dt>Event</dt><dd>{registration.event || eventName}</dd></div>
          <div><dt>Attendance</dt><dd>{registration.attendance}</dd></div>
        </dl>
        <button
          type="button"
          className="form-submit-button"
          onClick={() => {
            setSubmitted(false);
            setRegistration(null);
          }}
        >
          Register another person
        </button>
      </div>
    );
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="registration-name">Student name <span>*</span></label>
        <input
          id="registration-name"
          name="name"
          placeholder="Enter your full name"
          autoComplete="name"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="registration-email">Email address <span>*</span></label>
        <input
          id="registration-email"
          name="email"
          type="email"
          placeholder="student@example.com"
          autoComplete="email"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="registration-department">Department <span>*</span></label>
        <select id="registration-department" name="department" defaultValue="" required>
          <option value="" disabled>Select your department</option>
          <option>Computer Science</option>
          <option>Information Technology</option>
          <option>Electronics</option>
          <option>Mechanical</option>
          <option>Civil</option>
          <option>Other</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="registration-year">Year of study</label>
        <input
          id="registration-year"
          name="year"
          type="number"
          min="1"
          max="4"
          placeholder="Example: 2"
        />
      </div>

      <div className="form-field">
        <label htmlFor="registration-password">Create a demo password (optional)</label>
        <input
          id="registration-password"
          name="password"
          type="password"
          placeholder="Password input example"
        />
        <small>This is a teaching example only; no password is saved or sent.</small>
      </div>

      <fieldset className="attendance-field">
        <legend>How will you attend?</legend>
        <label>
          <input type="radio" name="attendance" value="in-person" defaultChecked />
          In person
        </label>
        <label>
          <input type="radio" name="attendance" value="online" />
          Online
        </label>
      </fieldset>

      <div className="form-field event-field">
        <label htmlFor="registration-event">Choose an event <span>*</span></label>
        <select
          id="registration-event"
          name="event"
          defaultValue={eventName || ""}
          required
        >
          <option value="" disabled>Select a campus event</option>
          {events.map(event => {
            const name = event.name ?? event.title;
            return <option key={event.id} value={name}>{name}</option>;
          })}
        </select>
      </div>

      <label className="support-checkbox full-width">
        <input type="checkbox" name="accessibilitySupport" />
        I would like the team to contact me about accessibility support
      </label>

      <div className="form-field full-width">
        <label htmlFor="registration-message">Message (optional)</label>
        <textarea
          id="registration-message"
          name="message"
          rows="5"
          placeholder="Any questions or notes for the event team?"
        />
      </div>

      <div className="registration-actions full-width">
        <button className="form-submit-button" type="submit">
          Submit Registration
        </button>
        <button className="form-reset-button" type="reset">
          Reset Form
        </button>
      </div>
    </form>
  );
}