import { useTranslation } from "react-i18next";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const LearnMoreModal = ({ isOpen, onClose }: Props) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl p-10 max-w-xl shadow-2xl text-center animate-fadeIn">

        <h2 className="text-3xl font-bold mb-4">
          {t("aboutTitle")}
        </h2>

        <p className="text-gray-600 mb-6">
          {t("aboutText")}
        </p>

        <div className="grid grid-cols-2 gap-6 text-left mb-8">

          <div>
            <h3 className="font-semibold">☀️ {t("liveWeatherTitle")}</h3>
            <p className="text-sm text-gray-500">
              {t("liveWeatherText")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold">📊 {t("chartsTitle")}</h3>
            <p className="text-sm text-gray-500">
              {t("chartsText")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold">🗺 {t("mapTitle")}</h3>
            <p className="text-sm text-gray-500">
              {t("mapText")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold">📅 {t("forecastTitle")}</h3>
            <p className="text-sm text-gray-500">
              {t("forecastText")}
            </p>
          </div>

        </div>

        <button
          onClick={onClose}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600"
        >
          {t("close")}
        </button>

      </div>

    </div>
  );
};

export default LearnMoreModal;