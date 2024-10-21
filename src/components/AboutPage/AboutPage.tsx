import './AboutPage.css'; // Assuming you'll add the CSS to this file

const text = {
    about: 'Empowering students to achieve their full potential.',
    mission: 'Our mission is to provide students with high-quality instruction to advance their knowledge in both sport and self-defense-based grappling.',
    sergio: 'My name is Sergio "Coco" Ortiz, and I\'ve been training for 17 years, primarily in Brazilian Jiu Jitsu, along with Judo, Muay Thai, and more recently, Catch Wrestling. I am a 1st-degree black belt in Jiu Jitsu, the 8th person promoted to black belt by King Webb from Luling, Texas. I am currently learning Catch Wrestling under Coach Navalle Childs in San Antonio through Combat City Catch Wrestling. I\'ve served as a corrections officer for 22 years, with 19 years at the Hays County Sheriff\'s Office, currently in the Classifications Division. I assist with the Agency\'s Control Tactics/Combatives program and hold certifications as a TCOLE instructor, Level 1 EFC Combatives Instructor, and Level 3 C4C Combatives Instructor. While I have limited competition experience and am new to teaching grappling, I believe I have valuable insights and techniques to share. My goal with the Crazy Eights Grappling Club is to help students enhance their grappling by incorporating more aggressive and dominant techniques. I\'m excited to grow alongside my students.',
    lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

const AboutPage = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="hero">
                <h1>About Us</h1>
                <p>{text.about}</p>
            </section>

            {/* Mission Statement */}
            <section className="mission-statement">
                <h2>Our Mission</h2>
                <p>{text.mission}</p>
            </section>

            {/* Meet the Team */}
            <section className="team-section">
                <h2>Meet your Teacher</h2>
                <div className="team-member">
                    <h3>Sergio Ortiz</h3>
                    <img src="src/assets/sergio-placeholder.jpg" alt="A picture of Sergio Ortiz" />
                    <p className='about-p'>{text.sergio}</p>
                    <h2>Section 2</h2>
                    <p className='about-p'>{text.lorem}</p>
                    <h2>Section 3</h2>
                    <p className='about-p'>{text.lorem}</p>

                </div>
            </section>
        </div>
    );
};

export default AboutPage;
