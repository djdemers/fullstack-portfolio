import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/Navbar.css";

function Navbar({ toggleDarkMode, darkMode }) {
    return (
        <nav
            className="navbar navbar-expand-lg fixed-top"
            style={{ backgroundColor: "var(--navbar-bg)", color: "var(--navbar-text-color)" }}
        >
            <div className="container-fluid">
                {/* Replace <Link> with a non-clickable <span> */}
                <span className="navbar-brand">My Portfolio</span>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/">About</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/skills">Skills</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/resume">Resume</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
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

