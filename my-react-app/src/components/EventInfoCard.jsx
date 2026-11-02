export default function EventInfoCard() {
  // 1. Define variables for name, venue, and fees
  const eventName = "React Workshop";
  const venue = "Main Auditorium";
  const baseFee = 250;
  const serviceFee = 25;

  // 3. Inline style object example
  const cardStyle = {
    border: "1px solid #cbd5e1",
    borderRadius: "10px",
    padding: "20px",
    maxWidth: "350px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"
  };

  return (
    // Use a fragment (<> ... </>) if needed to wrap elements
    <>
      <div className="event-info-card" style={cardStyle}>
        <h3>{eventName}</h3>
        <p>Venue: {venue}</p>
        <p>Base fee: ₹{baseFee}</p>
        <p>Service fee: ₹{serviceFee}</p>
        {/* Calculate total dynamically inside JSX without hard-coding */}
        <p><strong>Total: ₹{baseFee + serviceFee}</strong></p>
      </div>
    </>
  );
}