import { getWeather } from "../apiService";
import AddLesson from "../components/AddLesson"
import NavBar from "../components/NavBar"

import { useState, useEffect } from "react";
import WeatherDisplay from "../components/WeatherDisplay";



const SkiLesson = () => {

  
  
  return (
      <div>
        <NavBar></NavBar>
        <AddLesson />
        
      </div>
    )
  }
  
  export default SkiLesson