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
                    Our mission is to provide students with high-quality instruction to advance their knowledge in both sport and self-defense based grappling.
                </p>
            </section>

            {/* Meet the Team */}
            <section className="team-section">
                <h2>Meet your Teacher</h2>
                <div className="team-member">
                    <h3>Sergio Ortiz</h3>
                    <img src="" alt="A picture of Sergio Ortiz" />
                    <p>
                        Sergio's background includes Brazilian Jiu-Jitsu and Catch Wrestling.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default AboutPage;
