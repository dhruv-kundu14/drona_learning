import React from "react";
import Footer from "../Footer/Footer"
import Dashboard from "../Home/Dashboard"
import Testimonial from "../Home/Testimonial"
import "../../App.css"; // Ensure this path is correct for your CSS file

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/hero-image.jpg" // Ensure this path points to the public folder
          alt="Background"
          className="hero-image"
        />
        <div className="hero-content">
          <h1>One stop platform for all learning needs.</h1>
          <p>Live | Interactive | Personalized</p>
          <blockquote>
            Tell me and I forget, teach me and I may remember, involve me and I
            learn.
            <span className="author"> - Benjamin Franklin</span>
          </blockquote>
          <div className="hero-buttons">
            <button className="btn primary">Sign Up For Free Demo</button>
            <button className="btn secondary">Enquire Now</button>
          </div>
        </div>
      </div>

      {/* Personalized Focus Section */}
      <div className="personalized-focus-section">
        <div className="focus-images">
          {/* Left image (full-length) */}
          <img
            src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/about1.jpg"
            alt="Student studying"
            className="left-image"
          />

          {/* Right images (stacked vertically) */}
          <div className="right-images">
            <img src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/about2.jpg" alt="Library" />
            <img src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/about3.jpg" alt="Teamwork" />
          </div>
        </div>
        <div className="focus-content">
          <h2>Focus on each child is personalized.</h2>
          <p>
            With our group of extremely passionate, highly educated, experienced
            teachers, and vast research, we have designed unique methods of
            teaching for each subject, and our focus on every student is
            personalized.
          </p>
          <button className="btn primary">→ About us</button>
        </div>
      </div>

      {/* carousel */}
      <div className="carousel-section">
        <img
          src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/carousel.jpg" // Ensure this path points to the public folder
          alt="Background"
          className="carousel-image"
        />
        <div className="carousel-content">
        <h1>Our Courses</h1>
        <p>We ensure that the focus on each child is different, and tailor-made just for them.</p>
        </div>
      </div>

      <Dashboard/>

      {/* carousel */}
      <div className="testSeries-section">
        <img
          src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/structure.jpg" // Ensure this path points to the public folder
          alt="Background"
          className="testSeries-image"
        />
        <div className="testSeries-content">
        <h1>Test Series</h1>
        <p>Testing oneself is a valuable tool to measure progress at regular intervals as it helps to determine learning gaps, 
          improves knowledge retention, boosts checking abilities thus minimizing careless errors.
           Testing encourages Students to learn more as it helps them to better organize their knowledge  
          and apply in new contexts in a better way.</p>
          <button className="btn secondary">Enquire Now</button>
        </div>
      </div>

      <div className="founders-container">
      <h2 className="title">Founders</h2>
      <div className="founders">
        <div className="founder">
          <img
            src="https://dhruv-kundu14.github.io/drona_learning/Icons/Founders/founder1.jpg"
            alt="Dr. Abhilasha"
            className="founder-image"
          />
          <h3 className="founder-name">Dr. Abhilasha</h3>
          <p className="founder-role">Co - Founder</p>
          <p className="founder-desc">A scientist with a passion to teach.</p>
        </div>
        <div className="founder">
          <img
            src="https://dhruv-kundu14.github.io/drona_learning/Icons/Founders/founder2.jpeg"
            alt="Dr. Jayanti Datta"
            className="founder-image"
          />
          <h3 className="founder-name">Dr. Jayanti Datta</h3>
          <p className="founder-role">Co - Founder</p>
          <p className="founder-desc">
            An experienced educator with a career spanning over 20 years.
          </p>
        </div>
      </div>
      </div>
    
      <Testimonial/>
      <Footer/>
    </>

   
  );
};

export default HeroSection;
