import { useEffect, useState } from "react";
import { getWeather } from "../api/weatherApi";

const getBackground = (weather: string) => {
  const w = weather.toLowerCase();

  if (w.includes("cloud")) return "from-blue-300 to-blue-500";
  if (w.includes("rain")) return "from-gray-500 to-blue-700";
  if (w.includes("clear")) return "from-orange-300 to-yellow-400";
  if (w.includes("snow")) return "from-sky-200 to-blue-300";
  return "from-gray-200 to-gray-400";
};

const getIcon = (weather: string) => {
  const w = weather.toLowerCase();

  if (w.includes("cloud")) return "☁️";
  if (w.includes("rain")) return "🌧️";
  if (w.includes("clear")) return "☀️";
  if (w.includes("snow")) return "❄️";
  return "🔥";
};

const WeatherSection = () => {
  const [cities, setCities] = useState<string[]>([]);
  const [weatherData, setWeatherData] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("citiesList");

    const initial = saved
      ? JSON.parse(saved)
      : ["Samarkand", "London", "Tokyo"];

    setCities(initial);
  }, []);

  useEffect(() => {
    if (!cities.length) return;

    localStorage.setItem("citiesList", JSON.stringify(cities));

    const loadWeather = async () => {
      const data = await Promise.all(
        cities.map((c) => getWeather(c))
      );
      setWeatherData(data);
    };

    loadWeather();
  }, [cities]);

  return (
    <section className="py-24 flex justify-center gap-8 flex-wrap px-4">

      {weatherData.map((weather, index) => (
        <div
          key={index}
          className={`w-full sm:w-72 p-6 sm:p-8 rounded-[35px] text-white bg-gradient-to-br ${getBackground(
            weather.weather[0].main
          )} shadow-2xl hover:scale-105 transition-all duration-300`}
        >

          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-center sm:text-left">
            {weather.name}
          </h2>

          <p className="text-5xl sm:text-6xl text-center mb-2">
            {getIcon(weather.weather[0].main)}
          </p>

          <p className="text-4xl sm:text-5xl font-bold text-center mt-2">
            {Math.round(weather.main.temp)}°
          </p>

          <p className="text-center mt-2 opacity-90 text-sm sm:text-base">
            {weather.weather[0].description}
          </p>

          <div className="flex justify-between mt-6 text-xs sm:text-sm">
            <span>💨 {weather.wind.speed}</span>
            <span>💧 {weather.main.humidity}%</span>
            <span>🌡 {Math.round(weather.main.feels_like)}°</span>
          </div>

        </div>
      ))}

    </section>
  );
};

export default WeatherSection;