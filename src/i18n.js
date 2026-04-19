import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",

   
    lng: localStorage.getItem("i18nextLng") || "en",

    resources: {
      en: {
        translation: {
          home: "Home",
          forecast: "Forecast",
          chart: "Chart",
          map: "Map",
          info: "Info",

          search: "Search",
          enterCity: "Enter city...",
          enterCityError: "Enter city",
          cityNotFound: "City not found",

          addFavorite: "Add favorite",
          analytics: "Weather Analytics",

          temperature: "Temperature",
          humidity: "Humidity",
          wind: "Wind",

          aboutTitle: "About CloudChaser ☁️",
          aboutText: "Modern weather platform for real-time forecasts.",
          close: "Close",

          title: "Weather App",

          heroTitle: "Weather around the world",
          heroText: "We provide real-time weather forecast for any city",

          accurateTitle: "Accurate Weather Forecast",
          accurateText:
            "Our platform provides real-time weather information from reliable sources. You can check temperature, wind speed and weather conditions anywhere in the world.",
          learnMore: "Learn More",

          liveWeatherTitle: "Live Weather",
          liveWeatherText: "Current temperature and conditions",

          chartsTitle: "Weather Charts",
          chartsText: "Temperature, humidity and wind analytics",

          mapTitle: "Global Map",
          mapText: "Cloud, rain and temperature layers",

          forecastTitle: "Weekly Forecast",
          forecastText: "7-day weather predictions",

          weatherStatsTitle: "Weather Stats",

          globalMapTitle: "Global Weather Map",
          weatherCenter: "Weather Center",
          mapPopupText: "Real-time weather station",

          clouds: "Clouds",
          rain: "Rain",
          temperature: "Temperature",

          "callUs": "Call Us",

          days: {
            mon: "Mon",
            tue: "Tue",
            wed: "Wed",
            thu: "Thu",
            fri: "Fri",
            sat: "Sat",
            sun: "Sun",
          },
        },
      },

      ru: {
        translation: {
          home: "Главная",
          forecast: "Прогноз",
          chart: "График",
          map: "Карта",
          info: "Инфо",

          search: "Поиск",
          enterCity: "Введите город...",
          enterCityError: "Введите город",
          cityNotFound: "Город не найден",

          addFavorite: "В избранное",
          analytics: "Аналитика погоды",

          temperature: "Температура",
          humidity: "Влажность",
          wind: "Ветер",

          aboutTitle: "О CloudChaser ☁️",
          aboutText:
            "Современная платформа погоды с прогнозами в реальном времени.",
          close: "Закрыть",

          title: "Приложение погоды",

          heroTitle: "Погода по всему миру",
          heroText:
            "Мы предоставляем прогноз погоды в реальном времени для любого города",

          accurateTitle: "Точный прогноз погоды",
          accurateText:
            "Наша платформа предоставляет актуальную информацию о погоде из надежных источников. Вы можете проверить температуру, скорость ветра и погодные условия в любой точке мира.",
          learnMore: "Подробнее",

          liveWeatherTitle: "Живая погода",
          liveWeatherText: "Текущая температура и условия",

          chartsTitle: "Графики погоды",
          chartsText: "Температура, влажность и ветер",

          mapTitle: "Карта мира",
          mapText: "Облака, дождь и температура",

          forecastTitle: "Недельный прогноз",
          forecastText: "Прогноз погоды на 7 дней",

          weatherStatsTitle: "Статистика погоды",

          globalMapTitle: "Карта погоды мира",
          weatherCenter: "Метеоцентр",
          mapPopupText: "Станция погоды в реальном времени",

          clouds: "Облака",
          rain: "Дождь",
          temperature: "Температура",

          "callUs": "Позвонить нам",

          days: {
            mon: "Пн",
            tue: "Вт",
            wed: "Ср",
            thu: "Чт",
            fri: "Пт",
            sat: "Сб",
            sun: "Вс",
          },
        },
      },

      uz: {
        translation: {
          home: "Bosh sahifa",
          forecast: "Prognoz",
          chart: "Grafik",
          map: "Xarita",
          info: "Ma'lumot",

          search: "Qidirish",
          enterCity: "Shahar kiriting...",
          enterCityError: "Shahar kiriting",
          cityNotFound: "Shahar topilmadi",

          addFavorite: "Sevimlilarga qo'shish",
          analytics: "Ob-havo tahlili",

          temperature: "Harorat",
          humidity: "Namlik",
          wind: "Shamol",

          aboutTitle: "CloudChaser haqida ☁️",
          aboutText: "Real vaqt ob-havo prognoz platformasi.",
          close: "Yopish",

          title: "Ob-havo ilovasi",

          heroTitle: "Butun dunyo ob-havosi",
          heroText: "Har qanday shahar uchun real vaqt ob-havo prognozi",

          accurateTitle: "Aniq ob-havo prognozi",
          accurateText:
            "Bizning platforma ishonchli manbalardan real vaqt ob-havo ma'lumotlarini taqdim etadi. Har qanday joydagi harorat, shamol tezligi va ob-havo holatini tekshirishingiz mumkin.",
          learnMore: "Batafsil",

          liveWeatherTitle: "Jonli ob-havo",
          liveWeatherText: "Hozirgi harorat va holat",

          chartsTitle: "Ob-havo grafiklari",
          chartsText: "Harorat, namlik va shamol tahlili",

          mapTitle: "Jahon xaritasi",
          mapText: "Bulut, yomg'ir va harorat qatlamlari",

          forecastTitle: "Haftalik prognoz",
          forecastText: "7 kunlik ob-havo prognozi",

          weatherStatsTitle: "Ob-havo statistikasi",

          globalMapTitle: "Jahon ob-havo xaritasi",
          weatherCenter: "Ob-havo markazi",
          mapPopupText: "Real vaqt ob-havo stansiyasi",

          clouds: "Bulut",
          rain: "Yomg'ir",
          temperature: "Harorat",

          "callUs": "Biz bilan bog'laning",

          days: {
            mon: "Du",
            tue: "Se",
            wed: "Ch",
            thu: "Pa",
            fri: "Ju",
            sat: "Sha",
            sun: "Yak",
          },
        },
      },
    },
  });

export default i18n;