import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './views/About.jsx'
import Projects from './views/Projects.jsx'
import Skills from './views/Skills.jsx'
import Resume from './views/Resume.jsx'
import Contact from './views/Contact.jsx'
import "./styles/App.css";

function App() {
    // Check local storage for user preference
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    // Toggle theme
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem("theme", newMode ? "dark" : "light");

            // Dispatch an event so other components know dark mode changed
            window.dispatchEvent(new Event("darkModeToggle"));

            return newMode;
        });
    };


    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    return (
        <>
            <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/resume" element={<Resume darkMode={darkMode} />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
