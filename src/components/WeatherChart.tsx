import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";
import { useTranslation } from "react-i18next";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const API_KEY = "decc092c5b55feda6934813533f356d3";

const WeatherChart = ({ city }: { city: string }) => {

  const { t } = useTranslation();

  const [labels, setLabels] = useState<string[]>([]);
  const [temps, setTemps] = useState<number[]>([]);
  const [humidity, setHumidity] = useState<number[]>([]);
  const [wind, setWind] = useState<number[]>([]);
  const [mode, setMode] = useState<"temp" | "humidity" | "wind">("temp");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);

        const geoRes = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
        );

        const geoData = await geoRes.json();
        if (!geoData[0]) return;

        const { lat, lon } = geoData[0];

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );

        const data = await res.json();
        if (!data?.list) return;

        const daily = data.list.filter((_: any, i: number) => i % 8 === 0);

        setLabels(
          daily.map((day: any) =>
            new Date(day.dt * 1000).toLocaleDateString("en-US", {
              weekday: "short"
            })
          )
        );

        setTemps(daily.map((d: any) => d.main.temp));
        setHumidity(daily.map((d: any) => d.main.humidity));
        setWind(daily.map((d: any) => d.wind.speed));

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (city) fetchWeather();
  }, [city]);

  const getData = () => {
    if (mode === "temp") return temps;
    if (mode === "humidity") return humidity;
    return wind;
  };

  const data = {
    labels,
    datasets: [
      {
        label:
          mode === "temp"
            ? t("temperature")
            : mode === "humidity"
            ? t("humidity")
            : t("wind"),

        data: getData(),
        borderColor: "#fff",
        backgroundColor: "rgba(255,255,255,0.2)",
        borderWidth: 3,
        tension: 0.4
      }
    ]
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">

        <h2 className="text-xl sm:text-3xl md:text-5xl text-white font-bold text-center mb-6 sm:mb-10">
          {t("analytics")}
        </h2>

    
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-10">

          <button
            onClick={() => setMode("temp")}
            className="px-3 sm:px-5 py-2 rounded-full bg-white text-black text-xs sm:text-sm"
          >
            🌡 {t("temperature")}
          </button>

          <button
            onClick={() => setMode("humidity")}
            className="px-3 sm:px-5 py-2 rounded-full bg-white text-black text-xs sm:text-sm"
          >
            💧 {t("humidity")}
          </button>

          <button
            onClick={() => setMode("wind")}
            className="px-3 sm:px-5 py-2 rounded-full bg-white text-black text-xs sm:text-sm"
          >
            🌬 {t("wind")}
          </button>

        </div>

   
        <div className="bg-black/30 rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-10 shadow-2xl overflow-x-auto">

          <div className="min-w-[420px] sm:min-w-0">

            {loading ? (
              <p className="text-center text-gray-300">Loading...</p>
            ) : (
              <Line data={data} />
            )}

          </div>

        </div>

      </div>

    </section>
  );
};

export default WeatherChart;