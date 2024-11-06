import React from 'react';


const About = () => {
  return (
    <section id="about">
      <div className="overlay"></div> {/* Overlay for contrast */}
      <div className="container">
        <h2>About Us</h2>
        <h3>Welcome to TechRepair Experts</h3>
        <p>
          At TechRepair Experts, we're dedicated to giving you the best experience and service for all your repair needs. Our team of skilled professionals is passionate about what we do, and we take pride in being meticulous with every repair to ensure you get reliable, high-quality results every time.
        </p>
        <p>
          We specialize in a wide range of device repairs, from smartphones to laptops. Our expertise covers:
        </p>
        <ul className="about-text">
          <li>Screen Repairs for smartphones, tablets, and laptops, ensuring your display looks as good as new.</li>
          <li>Battery Replacements to keep your device powered up and performing at its best.</li>
          <li>Water Damage Recovery for those unexpected accidents.</li>
          <li>Charging Port and Connector Repairs so you can charge and connect with ease.</li>
          <li>Button Repairs for smooth functionality, whether it’s the home button or volume controls.</li>
          <li>Camera Repairs to restore your photo quality and video clarity.</li>
          <li>Software and Data Recovery Services to safeguard your important files and data.</li>
        </ul>
        <p>
          Our goal is to provide a hassle-free experience from start to finish. When you choose TechRepair Experts, you're choosing reliability, quality, and a team that genuinely cares about your satisfaction. Whether you have a cracked screen, a device that won’t charge, or a phone that’s taken a dive, you can count on us to get it back to perfect condition.
        </p>
      </div>
    </section>
  );
};

export default About;
