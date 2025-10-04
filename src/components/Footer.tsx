import { useTranslation } from "react-i18next";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import "../styles/footer.css";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-info">
                <p>{t("location")}: Odesa, Ukraine</p>
                <p>
                    {t("email")}:{" "}
                    <a href="mailto:vicktoriakushko@gmail.com">vicktoriakushko@gmail.com</a>
                </p>
                <p>
                    {t("phone")}: <a href="tel:+380681836123">+380 68 183 6123</a>
                </p>
            </div>
            <div className="footer-social">
                <a href="https://github.com/VikaKushko" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                </a>
                <a href="https://www.instagram.com/vicktoria_kushko?igsh=OGZwdW16azhpOG5s&utm_source=qr" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} />
                </a>
                <a href="https://t.me/vicktoriia_2" target="_blank" rel="noopener noreferrer">
                    <FaTelegram size={24} />
                </a>
                <a href="https://www.linkedin.com/in/vika-kushko-b468672a4/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
