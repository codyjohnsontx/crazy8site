import React from 'react';
import './AboutPage.css'; // Assuming you'll add the CSS to this file

const AboutPage = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="hero">
                <h1>About Us</h1>
                <p>Empowering students to achieve their full potential.</p>
            </section>

            {/* Mission Statement */}
            <section className="mission-statement">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to provide students with high-quality education and the support they need to succeed.
                </p>
            </section>

            {/* Meet the Team */}
            <section className="team-section">
                <h2>Meet the Team</h2>
                <div className="team-member">
                    <h3>Teacher Name</h3>
                    <p>
                        Teacher Name has been working in education for over 10 years and is passionate about helping students excel.
                    </p>
                </div>
            </section>

            {/* Values Section */}
            <section className="values">
                <h2>Our Values</h2>
                <ul>
                    <li><strong>Commitment:</strong> Dedicated to the success of our students.</li>
                    <li><strong>Innovation:</strong> Using the latest tools and technologies to enhance learning.</li>
                    <li><strong>Integrity:</strong> Building trust with transparency and open communication.</li>
                </ul>
            </section>

            {/* Call to Action */}
            <section className="cta">
                <h2>Get in Touch</h2>
                <p>We'd love to hear from you. Contact us to learn more about what we do!</p>
            </section>
        </div>
    );
};

export default AboutPage;
