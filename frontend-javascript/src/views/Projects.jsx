import React from "react";
import "../styles/Projects.css";

const projects = [
    {
        title: "Dungeon Crawler RPG",
        description: "A turn-based RPG game with procedurally generated dungeons and enemy scaling.",
        tech: ["Java", "Design Patterns", "Swing"],
        link: "https://github.com/djdemers/DungeonCrawler",
    },
    {
        title: "D&D Database App",
        description: "A JavaFX-based app to manage a D&D campaign database. Users insert, update, and delete.",
        tech: ["Java", "JavaFX", "SQL"],
        link: "https://github.com/djdemers/dnd-database-app",
    },
    {
        title: "Memoranda Project",
        description: "A digital note-taking app designed for productivity and organization.",
        tech: ["Vue 3", "Node.js", "MongoDB"],
        link: "https://github.com/djdemers/memoranda",
    },
    {
        title: "Fullstack Portfolio",
        description: "The repository for this personal portfolio showcasing my projects and skills.",
        tech: ["React", "Java", "Python", "Spring Boot"],
        link: "https://github.com/djdemers/fullstack-portfolio",
    },

    {
        title: "Machine Learning NLP Model",
        description: "A private project involving NLP training with TensorFlow and BERT. Details available upon request.",
        tech: ["Python", "Electron", "BERT"],
        link: "", // No link since it's private
    },
    {
        title: "More To Come",
        description: "Stay tuned for what comes next!",
        tech:["???"],
        link: "https://github.com/djdemers/djdemers",
    },

];

function Projects() {
    return (
        <section className="projects-section">
            <h2 className="projects-title">My Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tech-stack">
                            {project.tech.map((tech, i) => (
                                <span className="tech" key={i}>{tech}</span>
                            ))}
                        </div>
                        {project.link ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                View on GitHub
                            </a>
                        ) : (
                            <p className="private-note">Ask me and I'll tell you more!</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
