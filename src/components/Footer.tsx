import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center">

        <h2 className="text-2xl font-bold mb-6 md:mb-0">
          WeatherApp
        </h2>

        <div className="flex gap-8 text-gray-300">
          <a href="#">{t("home")}</a>
          <a href="#forecast">{t("forecast")}</a>
          <a href="mailto:davronovaj11@gmail.com">Gmail</a>
          <a href="tel:+998904676622">{t("callUs")}</a>
        </div>

        <p className="text-gray-400 mt-6 md:mt-0">
          © 2026 WeatherApp
        </p>

      </div>
    </footer>
  );
};

export default Footer;