
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="navbar">
        <div className="navbar-logo">
            Insert logo
        </div>
        <ul className="navbar-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ski-lessons">Ski Lessons</Link></li>
            <li><Link to="/instructor">Instructor</Link></li>
            <li><Link to="/client">Client</Link></li>
        </ul>

      
    </div>
  )
}

export default NavBar
