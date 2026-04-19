import { useState } from "react";
import { useTranslation } from "react-i18next";

const API_KEY = "decc092c5b55feda6934813533f356d3";

const SearchWeather = ({ onCitySelect }: { onCitySelect: (city: string) => void }) => {
  const { t } = useTranslation();

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [cities, setCities] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    if (!city.trim()) {
      setError(t("enterCityError"));
      return;
    }

    try {
      setError("");
      setLoading(true);

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await res.json();

      if (data.cod !== 200) throw new Error();

      setWeather(data);
      setCities([]);

      onCitySelect(data.name);

    } catch {
      setError(t("cityNotFound"));
    } finally {
      setLoading(false);
    }
  };

  const fetchCities = async (q: string) => {
    const res = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=5&appid=${API_KEY}`
    );

    const data = await res.json();
    setCities(data);
  };

  const addFavorite = () => {
    if (!weather) return;

    const saved = localStorage.getItem("citiesList");
    let list = saved ? JSON.parse(saved) : ["Samarkand", "London", "Tokyo"];

    const index = Math.floor(Math.random() * list.length);
    list[index] = weather.name;

    localStorage.setItem("citiesList", JSON.stringify(list));

    onCitySelect(weather.name);
  };

  return (
    <div className="flex flex-col gap-6 mt-6">

      <div className="relative w-full md:w-96">

        <div className="flex gap-3">

          <input
            className="w-full px-5 py-4 rounded-2xl bg-white/30 backdrop-blur-md outline-none"
            placeholder={t("enterCity")}
            value={city}
            onChange={(e) => {
              const v = e.target.value;
              setCity(v);

              if (v.length > 2) fetchCities(v);
              else setCities([]);
            }}
          />

          <button
            onClick={getWeather}
            className="px-5 py-4 bg-blue-500 text-white rounded-2xl"
          >
            {loading ? "..." : t("search")}
          </button>

        </div>

        {cities.length > 0 && (
          <div className="absolute w-full mt-2 bg-white/90 rounded-xl shadow-xl z-50">
            {cities.map((c, i) => (
              <div
                key={i}
                onClick={() => {
                  setCity(c.name);
                  setCities([]);
                  onCitySelect(c.name);
                }}
                className="px-4 py-3 cursor-pointer hover:bg-blue-100"
              >
                🌍 {c.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {weather && (
        <div className="p-6 bg-white/30 rounded-2xl">

          <h2 className="text-2xl font-bold">🌍 {weather.name}</h2>

          <p>{weather.weather[0].description}</p>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <div>🌡 {weather.main.temp}°C</div>
            <div>💧 {weather.main.humidity}%</div>
          </div>

          <button
            onClick={addFavorite}
            className="mt-4 px-4 py-2 bg-yellow-400 rounded-xl"
          >
            ⭐ {t("addFavorite")}
          </button>

        </div>
      )}

    </div>
  );
};

export default SearchWeather;