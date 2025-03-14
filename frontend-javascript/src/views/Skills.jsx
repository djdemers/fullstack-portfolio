import React from "react";
import "../styles/Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faDatabase,
    faTools,
} from "@fortawesome/free-solid-svg-icons";
import {
    faReact,
    faJsSquare,
    faNodeJs,
    faPython,
    faJava,
    faHtml5,
    faCss3,
    faGitAlt,
    faDocker,
} from "@fortawesome/free-brands-svg-icons";

const skills = [
    {
        category: "Frontend",
        icon: faCode,
        items: [
            { name: "React", icon: faReact },
            { name: "JavaScript", icon: faJsSquare },
            { name: "HTML5", icon: faHtml5 },
            { name: "CSS3", icon: faCss3 },
        ],
    },
    {
        category: "Backend",
        icon: faDatabase,
        items: [
            { name: "Node.js", icon: faNodeJs },
            { name: "Python", icon: faPython },
            { name: "Java", icon: faJava },
        ],
    },
    {
        category: "Tools & DevOps",
        icon: faTools,
        items: [
            { name: "Git", icon: faGitAlt },
            { name: "Docker", icon: faDocker },
        ],
    },
];

function Skills() {
    return (
        <section className="skills-section">
            <h2 className="skills-title">My Skills</h2>
            <div className="skills-container">
                {skills.map((skillCategory, index) => (
                    <div className="skill-category" key={index}>
                        <h3>
                            <FontAwesomeIcon icon={skillCategory.icon}/> {skillCategory.category}
                        </h3>
                        <div className="skills-list">
                            {skillCategory.items.map((skill, i) => (
                                <div className="skill-item" key={i}>
                                    <FontAwesomeIcon icon={skill.icon} className="skill-icon"/>
                                    <p>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
