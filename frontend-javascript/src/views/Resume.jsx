import React from "react";
import "../styles/Resume.css";

function Resume({ darkMode }) {
    return (
        <section className="resume-section">

            {/* Dynamically change resume image based on dark mode */}
            <img
                src={darkMode ? "/demers_resume_dm_25.png" : "/demers_resume_25.png"}
                alt="Resume Preview"
                className="resume-image"
            />

            {/* Download Button */}
            <a href="/demers_resume_25.pdf" download className="download-btn">
                📄 Download Resume
            </a>
        </section>
    );
}

export default Resume;
