import React from "react";
import "../styles/Resume.css";

function Resume() {
    return (
        <section className="resume-section">
            <h2 className="resume-title">My Resume</h2>
            <div className="resume-container">
                <p>
                    Download my full resume here:
                </p>
                <a href="/David%20DeMers%20Resume%202025.pdf" download className="download-btn">
                    📄 Download Resume
                </a>

                {/* Education */}
                <h3>Education</h3>
                <div className="resume-entry">
                    <h4>Arizona State University</h4>
                    <p><strong>Bachelor of Science in Software Engineering</strong> | Expected May 2025</p>
                    <p><strong>GPA:</strong> 3.7</p>
                    <ul>
                        <li>Operating System Programming</li>
                        <li>Data Structures and Algorithms</li>
                        <li>Software Construction</li>
                        <li>Computer Hardware & Assembly Programming</li>
                    </ul>
                </div>

                {/* Projects */}
                <h3>Projects</h3>
                <div className="resume-entry">
                    <h4>Multi-Threaded Image Processor (C, Linux)</h4>
                    <p><strong>Summer 2024</strong></p>
                    <ul>
                        <li>Optimized performance via parallel processing.</li>
                        <li>Used C programming, structs, file I/O, and command-line arguments.</li>
                    </ul>
                </div>

                <div className="resume-entry">
                    <h4>Bus Buddy – Java-Based Bus Scheduling System</h4>
                    <p><strong>Summer 2024</strong></p>
                    <ul>
                        <li>Collaborated on a 29,000+ line Java codebase to improve route scheduling.</li>
                        <li>Designed a JSON-based node system for efficient route storage & retrieval.</li>
                        <li>Developed a shortest-path algorithm reducing travel time.</li>
                        <li>Built a JavaFX UI for real-time route visualization.</li>
                    </ul>
                </div>

                {/* Work Experience */}
                <h3>Professional Experience</h3>
                <div className="resume-entry">
                    <h4>Starbucks Coffee Company | Benicia, CA</h4>
                    <p><strong>Barista</strong> | September 2019 – January 2025</p>
                    <ul>
                        <li>Delivered high-volume customer service efficiently in a fast-paced setting.</li>
                        <li>Developed problem-solving & collaboration skills.</li>
                        <li>Managed order preparation, cash handling, & quality control.</li>
                        <li>Assisted in training new hires, developing leadership abilities.</li>
                        <li>Identified workflow inefficiencies, improving service speed.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Resume;
