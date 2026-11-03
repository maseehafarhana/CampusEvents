import { useState } from "react";
import Input from "../Common/Input/input";
import Select from "../Common/Select/select";
import Textarea from "../Common/Textarea/textarea";
import Button from "../Common/Button/button";
import { createRegistration } from "../../services/eventService";

export default function RegistrationForm({ eventName, events = [] }) {
  const [submitted, setSubmitted] = useState(false);
  const [registration, setRegistration] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const registrationData = {
      name: formData.get("name"),
      email: formData.get("email"),
      department: formData.get("department"),
      year: formData.get("year"),
      event: formData.get("event"),
      attendance: formData.get("attendance") === "online" ? "Online" : "In person",
      accessibilitySupport: formData.get("accessibilitySupport") === "on",
      message: formData.get("message"),
      createdAt: new Date().toISOString()
    };

    setSubmitting(true);
    setSubmitError("");
    try {
      const savedRegistration = await createRegistration(registrationData);
      setRegistration(savedRegistration);
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error.message || "Could not send your registration to the server."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="registration-success" role="status">
        <h2>Registration complete!</h2>
        <p>
          Thank you for registering for the event. A confirmation email has been sent to <strong>{registration.email}</strong>.
        </p>
        <p>Here are the details you submitted:</p>
        <ul>
          <li><strong>Student:</strong> {registration.name}</li>
          <li><strong>Email:</strong> {registration.email}</li>
          <li><strong>Department:</strong> {registration.department}</li>
          <li><strong>Event:</strong> {registration.event || eventName}</li>
          <li><strong>Attendance:</strong> {registration.attendance}</li>
        </ul>
      </div>
    );
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="registration-name">Student name <span>*</span></label>
        <Input
          id="registration-name"
          name="name"
          placeholder="Enter your full name"
          autoComplete="name"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="registration-email">Email address <span>*</span></label>
        <Input
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
        <Select id="registration-department" name="department" defaultValue="" required>
          <option value="" disabled>Select your department</option>
          <option>Computer Science</option>
          <option>Information Technology</option>
          <option>Electronics</option>
          <option>Mechanical</option>
          <option>Civil</option>
          <option>Other</option>
        </Select>
      </div>

      <div className="form-field">
        <label htmlFor="registration-year">Year of study</label>
        <Input
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
        <Input
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
        <Select
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
        </Select>
      </div>

      <label className="support-checkbox full-width">
        <input type="checkbox" name="accessibilitySupport" />
        I would like the team to contact me about accessibility support
      </label>

      <div className="form-field full-width">
        <label htmlFor="registration-message">Message (optional)</label>
        <Textarea
          id="registration-message"
          name="message"
          rows="5"
          placeholder="Any questions or notes for the event team?"
        />
      </div>

      <div className="registration-actions full-width">
        <Button className="form-submit-button" type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "Submit Registration"}
        </Button>
        <Button className="form-reset-button" type="reset">
          Reset Form
        </Button>
      </div>
      {submitError && <p className="form-error full-width" role="alert">{submitError}</p>}
    </form>
  );
}