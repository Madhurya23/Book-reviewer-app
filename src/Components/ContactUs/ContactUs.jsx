import React from 'react';
import './ContactUs.css';

function ContactUs() {
    return (
        <div className="contact-us-page">
            <div className="contact-form-container">
                <h2>Contact Us</h2>
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
