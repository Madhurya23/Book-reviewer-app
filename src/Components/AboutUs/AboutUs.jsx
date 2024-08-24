import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="header-container">
        <h1 className="main-heading">About Us</h1>
      </div>

      <div className="container">
        <section className="section">
          <div className="text-content left">
            <h1>Our Vision</h1>
            <p>At <span className="fae-follio">Fae Follio</span>, our vision is to weave together the enchantment of storytelling with the insights of a thousand readers. We strive to be a haven where tales of wonder, mystery, and magic meet the discerning gaze of the literary connoisseur.</p>
          </div>
          <div className="image-content right">
            <img src="/nchanted.jpg" alt="Our Vision" />
          </div>
        </section>

        <section className="section">
          <div className="image-content left">
            <img src="/illumination.jpg" alt="Our Mission" />
          </div>
          <div className="text-content right">
            <h1>Our Mission</h1>
            <p>Our mission is to create a mystical portal for book lovers to explore and review a vast array of stories. We believe in the power of words to transform lives, and our mission is to illuminate those words through our unique platform.</p>
          </div>
        </section>

        <section className="section">
          <div className="text-content left">
            <h1>Who We Are</h1>
            <p>We are a passionate group of bibliophiles, dedicated to bringing the magic of literature to life. With every review, every discussion, and every book recommendation, we seek to build a community of readers enchanted by the allure of the written word.</p>
          </div>
          <div className="image-content right">
            <img src="/bibb.jpg" alt="Who We Are" />
          </div>
        </section>
      </div>
      <div className="footer-container">
        <h1 className="footer">Thank you for choosing us!</h1>
      </div>
    </div>
  );
};

export default AboutUs;
