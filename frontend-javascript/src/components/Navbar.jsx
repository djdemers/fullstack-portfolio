import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/Navbar.css";

function Navbar({ toggleDarkMode, darkMode }) {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
    };

    const closeNavbar = () => {
        setIsExpanded(false);
    };

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${isExpanded ? "expanded" : ""}`}
             style={{ backgroundColor: "var(--navbar-bg)", color: "var(--navbar-text-color)" }}>

            <div className="container-fluid">
                {/* Not Clickable Title */}
                <span className="navbar-brand">My Portfolio</span>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                    aria-expanded={isExpanded}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/about" onClick={closeNavbar}>About</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/projects" onClick={closeNavbar}>Projects</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/skills" onClick={closeNavbar}>Skills</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/resume" onClick={closeNavbar}>Resume</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact" onClick={closeNavbar}>Contact</Link></li>
                        <li className="nav-item">
                            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
