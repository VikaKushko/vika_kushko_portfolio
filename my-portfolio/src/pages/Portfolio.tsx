import "../styles/portfolio.css";
import OtfkImage from "../assets/otfk.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";



function Portfolio() {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState(null);

    const projects = [
        {
            key: "otfk",
            image: OtfkImage,
            link: "https://github.com/VikaKushko/otfk_method_cabinet"
        }
        // {
        //     title: "To-Do List",
        //     description: "A task manager with add/remove/edit features (React + LocalStorage).",
        //     image: "/images/todo.png",
        //     link: "https://github.com/vicktoriakushko/todo-app"
        // },
        // {
        //     title: "Suppliers Dashboard",
        //     description: "Admin panel built with React-Admin and REST API integration.",
        //     image: "/images/dashboard.png",
        //     link: "https://github.com/vicktoriakushko/suppliers-dashboard"
        // }
    ];

    return (
        <section className="portfolio" id="portfolio">
            <h2 dangerouslySetInnerHTML={{ __html: t("portfolioTitle") }} />
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div key={index} className="portfolio-card">
                        <img
                            src={project.image}
                            alt={t(`projects.${project.key}.title`)}
                            onClick={() => setSelectedImage(project.image)}
                            style={{ cursor: "pointer" }}
                        />
                        <h3>{t(`projects.${project.key}.title`)}</h3>
                        <p>{t(`projects.${project.key}.description`)}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            {t("viewProject")}
                        </a>
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className="lightbox" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="Enlarged" />
                </div>
            )}
        </section>
    );
}

export default Portfolio;
