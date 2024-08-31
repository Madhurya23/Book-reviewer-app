

import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
    const [responseMessage, setResponseMessage] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "cac7fa2c-dcb1-4f51-83e4-db3f373f101e");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            setResponseMessage("Thank you! Your message has been sent successfully.");
            event.target.reset();
        } else {
            setResponseMessage("Oops! Something went wrong. Please try again.");
        }
    };

    return (
        <div className="contact-us-page">
            <div className="contact-form-container">
                <h2>Contact Us</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
                {responseMessage && <p className="response-message">{responseMessage}</p>}
                <div className="social-media-container">
                    <h3>Follow Us:</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" className="social-icon">
                            <img src="/facebook-icon.png" alt="Facebook" />
                        </a>
                        <a href="https://twitter.com" className="social-icon">
                            <img src="/twitter-icon.avif" alt="Twitter" />
                        </a>
                        <a href="https://instagram.com" className="social-icon">
                            <img src="/instagram-icon.webp" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
