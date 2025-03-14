import React from "react";
import "../styles/Resume.css";

function Resume({ darkMode }) {
    return (
        <section className="resume-section">

            {/* Dynamically load the correct resume image */}
            <img
                src={`${import.meta.env.BASE_URL}demers_resume_${darkMode ? "dm_" : ""}25.png`}
                alt="Resume Preview"
                className="resume-image"
            />

            {/* Download Button */}
            <a href={`${import.meta.env.BASE_URL}demers_resume_25.pdf`} download className="download-btn">
                📄 Download Resume
            </a>
        </section>
    );
}

export default Resume;

