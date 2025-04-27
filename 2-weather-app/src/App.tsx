import React, { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import { WeatherData } from "./types/weather";
import axios from "axios";

const API_KEY = "79dc3c1b1d8c7e51b1abde3640fe86f4";

const App = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (city: string) => {
    try {
      setError(null);
      const response = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      setError("City not found, Please try again.");
      setWeather(null);
    }
  };

  return (
    <>
      <div>
        <h1>Weather App</h1>
        <WeatherForm onSearch={fetchWeather} />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {weather && <WeatherDisplay data={weather} />}
      </div>
    </>
  );
};

export default App;
