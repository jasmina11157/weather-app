import { useState } from "react";
import { useTranslation } from "react-i18next";
import LearnMoreModal from "./LearnMoreModal";

const WeatherInfo = () => {

  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  return (
    <section className="w-full py-24 bg-gradient-to-b from-blue-50 to-blue-100 overflow-hidden">

      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-6">

          <h2 className="text-5xl font-extrabold text-blue-900 mb-4">
            {t("accurateTitle")}
          </h2>

          <p className="text-gray-700 text-lg">
            {t("accurateText")}
          </p>

          <button
            onClick={() => setOpen(true)}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600"
          >
            {t("learnMore")}
          </button>

        </div>

        <div className="flex justify-center">
          <img
            className="w-80 h-80 rounded-3xl object-cover"
            src="./weather.jpg"
            alt="weather"
          />
        </div>

      </div>

      <LearnMoreModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />

    </section>
  );
};

export default WeatherInfo;