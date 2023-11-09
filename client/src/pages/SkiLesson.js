import { getWeather } from "../apiService";
import AddLesson from "../components/AddLesson"
import NavBar from "../components/NavBar"

import { useState, useEffect } from "react";
import WeatherDisplay from "../components/WeatherDisplay";



const SkiLesson = () => {
  const [weather, setWeather] = useState([]);   

  useEffect(() => {
    getWeather().then((data) => {
      setWeather(data.list);
    });
  }, []);
  
  
  return (
      <div>
        <NavBar></NavBar>
        <AddLesson />
        <WeatherDisplay weather={weather} setWeather={setWeather} />
      </div>
    )
  }
  
  export default SkiLesson