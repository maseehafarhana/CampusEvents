import { NavLink } from "react-router-dom";
import { useFavorites } from "../../context/FavoritesContext";
import campusLogo from "../../assets/saec.jpg";

export default function Navbar() {
  const { favorites } = useFavorites();

  return (
    <header className="topbar">
      <nav className="navbar" aria-label="Main navigation">
        <NavLink className="logo" to="/" aria-label="CampusConnect home">
          <img className="logo-image" src={campusLogo} alt="" />
          CampusConnect
        </NavLink>

        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/register/2">Register</NavLink>
          <NavLink to="/events?favorites=1">Favorites ({favorites.size})</NavLink>
        </div>
      </nav>
    </header>
  );
}