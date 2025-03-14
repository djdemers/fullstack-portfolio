import React from "react";
import "../styles/Resume.css";

function Resume() {
    const resumeImage = "/demers_resume_25.png";

    return (
        <section className="resume-section">
            {/* Display Resume as an Image */}
            <img
                src={resumeImage}
                alt="Resume Preview"
                className="resume-image"
            />

            {/* Optional Download Button */}
            <a href="/demers_resume_25.pdf" download className="download-btn">
                📄 Download Resume
            </a>
        </section>
    );
}

export default Resume;
