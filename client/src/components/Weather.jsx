import moment from "moment";

import sunny from "../images/weather/sunny_800.png";
import fewclouds from "../images/weather/fewclouds_801.png";
import mostlycloudy from "../images/weather/mostlycloudy_802.png";
import cloudy from "../images/weather/cloudy_803.png";
import overcastclouds from "../images/weather/overcastclouds_804.png";
import tstorms from "../images/weather/tstorms_200_299.png";
import rain from "../images/weather/rain_300_599.png";
import snow from "../images/weather/snow_600_699.png";
import atmosphere from "../images/weather/atmosphere_700_799.png";

const Weather = ({ item }) => {
  const temperatureFahrenheit = ((item.main.temp - 273.15) * 9) / 5 + 32;
  const weatherId = item.weather[0].id;
  const weatherDesc = item.weather[0].description;

  const specificWeatherImage = {
    800: sunny,
    801: fewclouds,
    802: mostlycloudy,
    803: cloudy,
    804: overcastclouds,
  };

  const getWeatherImageURL = (weatherId) => {
    if (specificWeatherImage[weatherId]) {
      return specificWeatherImage[weatherId];
    }

    if (weatherId >= 200 && weatherId < 300) {
      return tstorms;
    }

    if (weatherId >= 300 && weatherId < 600) {
      return rain;
    }

    if (weatherId >= 600 && weatherId < 700) {
      return snow;
    }

    if (weatherId >= 700 && weatherId < 800) {
      return atmosphere;
    }
    
  };

  const weatherImageUrl = getWeatherImageURL(weatherId);

  return (
    <div className="weather-card-container">
      <img src={weatherImageUrl} alt="Weather Image" />
      <p id="temperature"> {temperatureFahrenheit.toFixed(0)}°F</p>
      <p id="description"> {weatherDesc}</p>
      <p id="date">
        {" "}
        {moment(item.dt_txt.split(" ")[0]).format("MMMM Do, YYYY")}
      </p>
    </div>
  );
};

export default Weather;
