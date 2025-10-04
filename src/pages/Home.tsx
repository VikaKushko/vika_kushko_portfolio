import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";
import "../styles/home.css";

function Home() {
    const { t, i18n } = useTranslation();

    // Разделяем текст для Typewriter
    const descriptionText = t("descriptionText");
    const technologies = t("technologies").split(", ");

    return (
        <section className="home" id="home">
            <div className="home-content">
                <div className="text">
                    <h1 dangerouslySetInnerHTML={{ __html: t("greeting") }} />
                    <div className="role" dangerouslySetInnerHTML={{ __html: t("role") }} />
                    <div className="description" key={i18n.language}>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString(descriptionText).pauseFor(300);

                                technologies.forEach((tech, index) => {
                                    typewriter.typeString(`<span class="tech">${tech}</span>`);
                                    if (index < technologies.length - 1) {
                                        typewriter.typeString(", ");
                                    }
                                });

                                typewriter.start();
                            }}
                            options={{
                                autoStart: true,
                                loop: false,
                                delay: 50,
                                cursor: "",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
