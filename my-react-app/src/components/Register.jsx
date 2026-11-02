export default function Register() {
  return (
    <section id="register" className="register">
      <div className="register-box">
        <h2 className="section-title">Event Registration</h2>
        <form>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                autoComplete="tel"
              />
            </div>

            <div className="form-group">
              <label htmlFor="event">Choose an Event *</label>
              <select id="event" name="event" defaultValue="" required>
                <option value="" disabled>Select an event</option>
                <option>Tech Fest 2026</option>
                <option>Cultural Day</option>
                <option>Sports Meet</option>
              </select>
            </div>
          </div>

          <label className="checkbox-row">
            <input type="checkbox" name="agreement" required />
            I agree to the event rules and regulations.
          </label>

          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    </section>
  );
}