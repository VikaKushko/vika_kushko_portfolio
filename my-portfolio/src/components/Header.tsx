import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../styles/header.css";

function Header({ theme, setTheme }: { theme: string; setTheme: (t: string) => void }) {
    const [open, setOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false); // состояние для языкового меню
    const { t, i18n } = useTranslation();
    const langRef = useRef<HTMLDivElement>(null);

    const toggleLanguageMenu = () => {
        setLangOpen(!langOpen);
    };

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setLangOpen(false); // закрываем после выбора
    };

    const languageNames: { [key: string]: string } = {
        en: "English",
        ru: "Русский",
        uk: "Українська"
    };

    // Закрытие при клике вне меню
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (langRef.current && !langRef.current.contains(event.target as Node)) {
                setLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="header">
            <button className="burger" onClick={() => setOpen(!open)}>☰</button>

            <nav className={open ? "open" : ""}>
                <a href="#home" onClick={() => setOpen(false)}>{t("home")}</a>
                <a href="#about" onClick={() => setOpen(false)}>{t("about")}</a>
                <a href="#portfolio" onClick={() => setOpen(false)}>{t("portfolio")}</a>
            </nav>


            {/* Кнопка смены темы */}
            <button
                className='theme-toggle'
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Выпадающий переключатель языков */}
            <div className="lang-switch" ref={langRef}>
                <button className="lang-btn" onClick={toggleLanguageMenu}>
                    {languageNames[i18n.language]} ▾
                </button>
                {langOpen && (
                    <ul className="lang-dropdown">
                        <li onClick={() => changeLanguage("en")}>English</li>
                        <li onClick={() => changeLanguage("ru")}>Русский</li>
                        <li onClick={() => changeLanguage("uk")}>Українська</li>
                    </ul>
                )}
            </div>

        </header>
    );
}

export default Header;
