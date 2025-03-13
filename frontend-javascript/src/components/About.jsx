import React from "react";
import "../styles/App.css";

function About() {
    return(
        <div className="about">
            <header>
                <h1>Hello, I'm David DeMers 👋</h1>
                <p className="subtitle">
                    Software Engineer Student at Arizona State University.
                </p>
            </header>

            <section className="about">
                <h2>About Me</h2>
                <p>
                    Welcome to my portfolio! I have experience in JavaScript (React, Node.js), Java (Spring Boot), and
                    Python (Flask).
                    I enjoy building scalable applications, solving complex problems, and learning new technologies.
                </p>
            </section>

            <footer>
                <p>© 2025 [David DeMers] | <a href="https://github.com/yourgithub">GitHub</a> | <a
                    href="https://www.linkedin.com/in/yourlinkedin">LinkedIn</a></p>
            </footer>
        </div>
    );
}

export default About;
