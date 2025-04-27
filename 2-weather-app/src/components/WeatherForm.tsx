import { useState } from "react";

interface Props {
  onSearch: (city: string) => void;
}

const WeatherForm = ({ onSearch }: Props) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default WeatherForm;
