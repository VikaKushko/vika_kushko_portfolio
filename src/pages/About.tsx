import Myphoto from "../assets/MyPhoto.png";
import { useTranslation } from "react-i18next";

import "../styles/about.css";
import {FaCss3Alt, FaGithub, FaHtml5, FaJsSquare, FaReact} from "react-icons/fa";
import {SiTypescript} from "react-icons/si";

function About() {
    const { t } = useTranslation();
    return (
        <section className="about" id="about">
            <div className="about-content">
                <div className="photo">
                    <img src={Myphoto} alt="Vika Kushko" />
                </div>

                <div className="about-text">
                    <h2>{t("aboutTitle").split(" ")[0]} <span className="highlight">{t("aboutTitle").split(" ")[1]}</span></h2>
                    <p>{t("paragraph1")}</p>
                    <p>{t("paragraph2")}</p>
                    <div className="skills">
                        <ul>
                            <li><FaHtml5 color="#E34F26"/> HTML5</li>
                            <li><FaCss3Alt color="#1572B6"/> CSS3</li>
                            <li><FaJsSquare color="#F7DF1E"/> JavaScript (ES6+)</li>
                            <li><SiTypescript color="#3178C6"/> TypeScript</li>
                            <li><FaReact color="#61DBFB"/> React</li>
                            <li><FaGithub color="#181717"/> Git / GitHub</li>
                        </ul>
                    </div>
                    <a href="/CV_Viktoriia_Kushko_Junior_Front_end_developer%20.pdf" target='_blank' className="btn">
                        {t("downloadCV")}
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;
