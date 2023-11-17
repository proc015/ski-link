import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ReviewList from './components/ReviewList';

import homeImage from "./images/homepage_img.png";
import Client from './pages/Client';
import Dashboard from './pages/Dashboard';
import Instructor from './pages/Instructor';
import Login from './pages/Login';
import Review from './pages/Review';
import SkiLesson from './pages/SkiLesson';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/client' element={<Client />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/instructor' element={<Instructor />} />
          <Route path='/login' element={<Login />} />
          <Route path='/review' element={<Review />} />
          <Route path='/skilesson' element={<SkiLesson />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;