import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<h2>Resume Page (Coming Soon)</h2>} />
                <Route path="/contact" element={<h2>Contact Page (Coming Soon)</h2>} />
            </Routes>
        </>
    );
}

export default App;
