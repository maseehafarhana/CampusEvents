import brandLogo from '../assets/saec.jpg';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <a href="#home" className="brand">
          <img src={brandLogo} alt="Campus Events logo" className="brand-logo" />
          <span className="brand-name">Campus Events</span>
        </a>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#register" className="btn btn-primary">Register</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}