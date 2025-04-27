import { JSX } from "react";
import { WeatherData } from "../types/weather";

interface Props {
  data: WeatherData;
}

const WeatherDisplay = ({ data }: Props): JSX.Element => {
  return (
    <div>
      <h2>Weather in {data.name}</h2>
      <p>Tempurature : {data.main.temp}</p>
      <p>Feels Like : {data.main.feels_like}</p>
      <p>Humidity : {data.main.humidity}</p>
      <p>Description : {data.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="Weather icon"
      />
    </div>
  );
};

export default WeatherDisplay;
