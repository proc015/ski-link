import moment from "moment";

const Weather = ({ item }) => {
    
    const temperatureFahrenheit = (item.main.temp - 273.15) * 9/5 + 32;
    const weatherId = item.weather[0].id;
    const weatherIcon = item.weather[0].icon;
    const weatherDesc = item.weather[0].description;

    const dayIcon = weatherIcon.endsWith('n') ? weatherIcon.replace('n', 'd') : weatherIcon;

  
    return (
      <div className="weather-card-container" >
        <img src={`http://openweathermap.org/img/wn/${dayIcon}.png`} alt="Weather icon" />
        <p id='temperature'> {temperatureFahrenheit.toFixed(0)}°F</p>
        <p id='description'> {weatherDesc}</p>
       
        <p id='date'> {moment(item.dt_txt.split(" ")[0]).format('MMMM Do, YYYY')}</p> 
      </div>
    );
  };
  
  export default Weather;
  