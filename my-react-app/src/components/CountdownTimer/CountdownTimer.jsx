import { useState, useEffect } from "react";
export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const difference = new Date(targetDate) - new Date();
      if (difference > 0) {
        setHasStarted(false);
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setHasStarted(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  return (
    <div className="countdown-timer" style={{ fontSize: "0.9rem", color: "#555", marginTop: "8px" }}>
      {hasStarted ? (
        <strong>Event has started</strong>
      ) : (
        <>
          <span>Starts in: </span>
          <strong>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</strong>
        </>
      )}
    </div>
  );
}