import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import HourlyForecast from "./HourlyForecast";

const API_KEY = "decc092c5b55feda6934813533f356d3";

const WeatherStats = ({ city }: { city: string }) => {
  const { t, i18n } = useTranslation();

  const [forecast, setForecast] = useState<any[]>([]);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const cityToUse = city || "Tashkent";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityToUse}&units=metric&appid=${API_KEY}`
        );

        const data = await res.json();

        if (!data.list) return;

        const daily = data.list.filter((_: any, i: number) => i % 8 === 0);

        setForecast(daily);

      } catch (err) {
        console.error("Ошибка:", err);
      }
    };

    fetchWeather();
  }, [cityToUse]);


  const getDay = (dt: number) => {
    const dayIndex = new Date(dt * 1000).getDay();

    const map = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    return i18n.t(`days.${map[dayIndex]}`);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-500 to-indigo-700">

      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl text-white text-center mb-12">
          {t("weatherStatsTitle")}
        </h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

            {forecast.map((day, i) => {
              const date = new Date(day.dt * 1000)
                .toISOString()
                .split("T")[0];

              return (
                <div
                  key={i}
                  onClick={() => setSelectedDay(date)}
                  className={`
                    w-32 sm:w-36 md:w-40
                    bg-white/20 
                    text-white 
                    p-4 
                    rounded-2xl 
                    text-center 
                    cursor-pointer
                    transition
                    hover:scale-105
                    ${selectedDay === date ? "border-2 border-yellow-300" : ""}
                  `}
                >

             
                  <p>{getDay(day.dt)}</p>

                  <p className="text-2xl font-bold mt-2">
                    {Math.round(day.main.temp)}°
                  </p>

                  <p className="text-sm opacity-80">
                    {day.weather[0].main}
                  </p>

                </div>
              );
            })}

          </div>
        </div>

      </div>

      {selectedDay && (
        <HourlyForecast
          city={cityToUse}
          selectedDate={selectedDay}
        />
      )}

    </section>
  );
};

export default WeatherStats;