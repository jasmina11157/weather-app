import { useState } from "react";
import { useTranslation } from "react-i18next";

import Header from "./components/Header";
import WeatherSection from "./components/WeatherSection";
import WeatherInfo from "./components/WeatherInfo";
import WeatherChart from "./components/WeatherChart";
import WeatherStats from "./components/WeatherStats";
import LanguageSwitcher from "./components/LanguageSwitcher";
import WeatherMap from "./components/WeatherMap";
import Footer from "./components/Footer";
import SearchWeather from "./components/SearchWeather";


function App() {
  const { t } = useTranslation();

  const [selectedCity, setSelectedCity] = useState("Samarkand");

  return (
    <div className="w-full">

      <div
        id="home"
        className="w-full h-screen bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: `url('/sky.png')` }}
      >

      

        <Header initialUser={null} />

        <div className="h-full flex items-center px-10 text-white relative z-10">
          <div className="max-w-lg">

            <h1 className="text-6xl font-bold mb-4">
              {t("heroTitle")}
            </h1>

            <p className="mb-6 mt-6 text-lg">
              {t("heroText")}
            </p>

        
            <SearchWeather onCitySelect={setSelectedCity} />

          </div>
        </div>

      </div>

      <div className="w-full">

        <div id="forecast">
          <WeatherSection />
        </div>

        <div id="info">
          <WeatherInfo />
        </div>

        <div id="stats">
          <WeatherStats city={selectedCity} />
        </div>

        <div id="map">
          <WeatherMap />
        </div>

        <div id="chart">
          <WeatherChart city={selectedCity} />
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default App;