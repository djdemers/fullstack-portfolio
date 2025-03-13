import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/projects" element={<h2>Projects Page (Coming Soon)</h2>} />
                <Route path="/resume" element={<h2>Resume Page (Coming Soon)</h2>} />
                <Route path="/contact" element={<h2>Contact Page (Coming Soon)</h2>} />
            </Routes>
        </>
    );
}

export default App;
