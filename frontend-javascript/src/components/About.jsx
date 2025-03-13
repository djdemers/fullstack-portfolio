import React from "react";
import "../styles/About.css";
import profilePic from "../assets/avatar.jpg";

function About() {
    return (
        <section className="about-section">
            <div className="about-container">
                {/* Profile Image */}
                <img src={profilePic} alt="Profile" className="profile-pic" />

                {/* Bio Section */}
                <h2>Hi, I'm David DeMers 👋</h2>
                <p className="bio">
                    I'm a software engineer student at Arizona State University.
                    I enjoy building modern applications, tackling complex problems, and continuously learning new technologies.
                </p>

                {/* Why Me Section */}
                <div className="why-me">
                    <h3>Why Work With Me?</h3>
                    <ul>
                        <li>🚀 Strong problem-solving skills & algorithmic thinking</li>
                        <li>🛠️ Experience with frontend & backend technologies</li>
                        <li>🌎 Passionate about scalable and efficient software</li>
                        <li>💡 Curious by nature with a growth mindset</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;