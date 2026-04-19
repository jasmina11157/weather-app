import { useEffect, useState } from "react";

const API_KEY = "decc092c5b55feda6934813533f356d3";

interface HourlyForecastProps {
  city: string;
  selectedDate: string;
}

const HourlyForecast = ({ city, selectedDate }: HourlyForecastProps) => {
  const [hourly, setHourly] = useState<any[]>([]);

  useEffect(() => {
    const fetchHourly = async () => {
      if (!city) return;

      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
        );

        const data = await res.json();
        if (!data.list) return;

        const filtered = data.list
          .filter((item: { dt: number }) =>
            new Date(item.dt * 1000).toISOString().startsWith(selectedDate)
          )
          .slice(0, 8);

        setHourly(filtered);
      } catch (err) {
        console.error(err);
      }
    };

    fetchHourly();
  }, [city, selectedDate]);

  if (!hourly.length) return null;

  return (
    <section className="w-full py-12 mt-10">
      
      <div className="max-w-7xl mx-auto px-6">

        <h3 className="text-2xl md:text-4xl text-white font-bold mb-10 text-center">
          Hourly Forecast
        </h3>

       
        <div className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-6
        xl:grid-cols-8
        gap-5
        ">

          {hourly.map((hour, idx) => {

            const time = new Date(hour.dt * 1000).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });

            return (
              <div
                key={idx}
                className="
                bg-white/20
                backdrop-blur-md
                border border-white/20
                rounded-2xl
                p-5
                text-center
                text-white
                shadow-lg
                hover:scale-105
                hover:shadow-cyan-300/30
                transition
                duration-300
                cursor-pointer
                "
              >
                <p className="font-semibold mb-2 text-sm">
                  {time}
                </p>

                <img
                  src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                  alt={hour.weather[0].description}
                  className="mx-auto mb-2 w-14"
                />

                <p className="text-2xl md:text-3xl font-bold mb-1">
                  {Math.round(hour.main.temp)}°
                </p>

                <p className="text-xs flex justify-center gap-2 items-center opacity-80">
                  💧 {hour.main.humidity}%
                </p>

                <p className="text-xs flex justify-center gap-2 items-center opacity-80">
                  🌬 {hour.wind.speed} m/s
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};

export default HourlyForecast;