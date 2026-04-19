import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const API_KEY = "decc092c5b55feda6934813533f356d3";

const position: LatLngExpression = [41.3111, 69.2797];

const WeatherMap = () => {
  const { t } = useTranslation();
  const [layer, setLayer] = useState("clouds");

  const getLayer = () => {
    if (layer === "clouds")
      return `https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_KEY}`;

    if (layer === "rain")
      return `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`;

    if (layer === "temp")
      return `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`;

    return "";
  };

  return (
    <section className="w-full py-16 sm:py-20 bg-gradient-to-r from-blue-100 to-blue-200">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
          {t("globalMapTitle")}
        </h2>

   
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">

          <button
            onClick={() => setLayer("clouds")}
            className="px-3 sm:px-4 py-2 text-xs sm:text-sm bg-white rounded-xl shadow hover:scale-105 transition"
          >
            ☁️ {t("clouds")}
          </button>

          <button
            onClick={() => setLayer("rain")}
            className="px-3 sm:px-4 py-2 text-xs sm:text-sm bg-white rounded-xl shadow hover:scale-105 transition"
          >
            🌧 {t("rain")}
          </button>

          <button
            onClick={() => setLayer("temp")}
            className="px-3 sm:px-4 py-2 text-xs sm:text-sm bg-white rounded-xl shadow hover:scale-105 transition"
          >
            🌡 {t("temperature")}
          </button>

        </div>

      
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border">

          <MapContainer
            center={position}
            zoom={5}
            style={{ height: "300px", width: "100%" }}   
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <TileLayer url={getLayer()} opacity={0.7} />

            <Marker position={position}>
              <Popup>
                🌤 {t("weatherCenter")} <br />
                {t("mapPopupText")}
              </Popup>
            </Marker>

          </MapContainer>

        </div>

      </div>

    </section>
  );
};

export default WeatherMap;