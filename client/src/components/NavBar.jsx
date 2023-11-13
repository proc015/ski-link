import { Link } from "react-router-dom";
import logo from "../images/SkiLink_logo.png";

const NavBar = () => {
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
          <Link to="/ski-lessons">Ski Lessons</Link>
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
      </ul>
    </div>
  );
};

export default NavBar;
