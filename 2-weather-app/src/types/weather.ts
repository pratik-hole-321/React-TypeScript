export interface WeatherData {
  name: string;
  main: {
    temp: string;
    feels_like: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}
