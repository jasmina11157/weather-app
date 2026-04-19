import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => changeLang("en")} className="px-3 py-1 text-sm rounded-full bg-white text-black">
        EN
      </button>

      <button onClick={() => changeLang("ru")} className="px-3 py-1 text-sm rounded-full bg-white text-black">
        RU
      </button>

      <button onClick={() => changeLang("uz")} className="px-3 py-1 text-sm rounded-full bg-white text-black">
        UZ
      </button>
    </div>
  );
};

export default LanguageSwitcher;