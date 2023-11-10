import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

import homeImage from './images/homepage_img.png'

function App() {
  return (
    <div className="full-app-container">
      <NavBar />
    
    <div className="home-body-container">
      <img id="home-image" src={homeImage} alt="SkiLink Logo" ></img>

      <div className="home-text-container">
        <h1> Ascend to new </h1>
        <p id="peaks"> peaks </p>
        <p id="home-tagline"> Your alpine journey starts here </p>

        <button id="home-booking">
          <Link to="/ski-lessons">Book Ski Lessons</Link>
        </button>
      </div>
      </div>
      <Footer />

      
      



    </div>
  );
}

export default App;
