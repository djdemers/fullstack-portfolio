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
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulating submission (Replace with API call or EmailJS later)
        console.log("Form submitted:", formData);
        setSubmitted(true);

        // Reset form after submission
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
        }, 3000);
    };

    return (
        <section className="contact-section">
            <h2 className="contact-title">Contact Me</h2>
            <div className="dev-status">Work in progress...</div>
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
