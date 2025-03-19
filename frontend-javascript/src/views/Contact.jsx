import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
    // Form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:8000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        console.log("API Response:", result);

        if (response.ok) {
            setSubmitted(true);
            // Reset form after submission
            setTimeout(() => {
                setSubmitted(false);
                setFormData({ name: "", email: "", message: "" });
            }, 3000);
        } else {
            alert("❌ Something went wrong. Please try again.");
        }
    } catch (error) {
        console.error("Submission error:", error);
        alert("⚠️ Network error. Please try again later.");
    }
};

    return (
        <section className="contact-section">
            <h2 className="contact-title">Contact Me</h2>
            <div className="contact-container">
                <p>Have a question or want to connect? Send me a message!</p>

                {submitted ? (
                    <p className="success-message">✅ Message sent successfully!</p>
                ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit" className="send-btn">📨 Send Message</button>
                    </form>
                )}
            </div>
        </section>
    );
}

export default Contact;
