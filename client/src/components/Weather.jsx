const Weather = ({ item }) => {
    
    const temperatureFahrenheit = (item.main.temp - 273.15) * 9/5 + 32;
    
    
    const weatherId = item.weather[0].id;
    const weatherIcon = item.weather[0].icon;
  
    return (
      <div>
        <p>Date: {item.dt_txt.split(" ")[0]}</p> 
        <p>Temperature (Fahrenheit): {temperatureFahrenheit.toFixed(0)}°F</p>
        <p>Weather ID: {weatherId}</p>
        <img src={`http://openweathermap.org/img/wn/${weatherIcon}.png`} alt="Weather icon" />
      </div>
    );
  };
  
  export default Weather;
  