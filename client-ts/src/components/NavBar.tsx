import { Link } from "react-router-dom";
import logo from "../images/SkiLink_logo.png";

const NavBar = () => {

  function handleLogout() {
    localStorage.removeItem('email')
    window.location.reload();
  }

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={logo} alt="SkiLink Logo" height={50} width={163}></img>
      </div>
      <ul className="navbar-menu">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/skilesson">Ski Lessons</Link>
        </span>
        <span>
          <Link to="/reviews">Reviews</Link>
        </span>
        <span>
          <Link to="/instructor">Instructor</Link>
        </span>
        <span>
          <Link to="/login">Login</Link>
        </span>
        <span onClick={handleLogout} id="log-out-navbar">
          <Link to="/">Logout</Link>
        </span>
      </ul>
    </div>
  )
}

export default NavBar
