import React from "react";
import "../styles/Resume.css";

function Resume({ darkMode }) {
    return (
        <section className="resume-section">
            <h2 className="resume-title">My Resume</h2>

            <div className="resume-container">
                <img
                    src={`${import.meta.env.BASE_URL}demers_resume_${darkMode ? "dm_" : ""}25.png`}
                    alt="Resume Preview"
                    className="resume-image"
                />

                <a href={`${import.meta.env.BASE_URL}demers_resume_25.pdf`} download className="download-btn">
                    📄 Download Resume
                </a>
            </div>
        </section>
    );
}

export default Resume;

