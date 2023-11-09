import Weather from "./Weather";

const WeatherDisplay = ({ weather }) => {
  
  const noonForecasts = weather.filter(item => item.dt_txt.includes("12:00:00"));

  return (
    <div className="weather-map">
      {noonForecasts.length ? (
        noonForecasts.map((item, index) => {
          return <Weather key={index} item={item} />;
        })
      ) : (
        <p>No weather data to show at this time</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
