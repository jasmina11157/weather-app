import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = ({
  initialUser,
}: {
  initialUser: { name: string; email: string } | null;
}) => {
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);

  const [user, setUser] = useState<{ name: string; email: string } | null>(
    () => {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : initialUser;
    }
  );

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      
 
      <div className="mx-auto mt-4 w-[95%] max-w-6xl rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">
        
        <div className="flex items-center justify-between px-6 py-4 text-white">

       
          <h1 className="text-xl font-semibold tracking-wide">
            CloudChaser ☁️
          </h1>

      
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a className="hover:text-white transition" href="#home">
              {t("home")}
            </a>
            <a className="hover:text-white transition" href="#forecast">
              {t("forecast")}
            </a>
            <a className="hover:text-white transition" href="#chart">
              {t("chart")}
            </a>
            <a className="hover:text-white transition" href="#map">
              {t("map")}
            </a>
            <a className="hover:text-white transition" href="#info">
              {t("info")}
            </a>
          </nav>

       
          <div className="flex items-center gap-3">

           
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-2xl"
            >
              ☰
            </button>

          </div>
        </div>
      </div>

  
      {menuOpen && (
        <div className="md:hidden mt-3 mx-auto w-[90%] rounded-2xl bg-black/40 backdrop-blur-xl text-white flex flex-col items-center gap-5 py-6">
          <a href="#home">{t("home")}</a>
          <a href="#forecast">{t("forecast")}</a>
          <a href="#chart">{t("chart")}</a>
          <a href="#map">{t("map")}</a>
          <a href="#info">{t("info")}</a>

          <div className="mt-2">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;