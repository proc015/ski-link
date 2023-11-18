import Weather from "./Weather";

interface WeatherItem {
  main: {
    temp: number;
  };
  weather: {
    id: number;
    description: string;
  }[];
  dt_txt: string;
}

interface WeatherDisplayProps {
  weather: WeatherItem[]
}


const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  const noonForecasts = weather.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="weather-display-container">
      {noonForecasts.length ? (
        noonForecasts.map((item, index) => {
          return <Weather key={index} item={item} />;
        })
      ) : (
        <p> </p>
      )}
    </div>
  );
};

export default WeatherDisplay;