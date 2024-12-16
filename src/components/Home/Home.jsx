import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Dashboard from "../Home/Dashboard";
import Testimonial from "../Home/Testimonial";
import "../../App.css"; // Ensure this path is correct for your CSS file
// import { Link } from "react-router-dom";

const HeroSection = () => {
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollY = window.scrollY; // Get scroll position
      const imageContainer = document.querySelector(".image-container");

      // Calculate opacity based on scroll position
      const opacity = 1 - scrollY / 500; // Adjust 500 to control how fast it disappears
      if (opacity >= 0) {
        imageContainer.style.opacity = opacity; // Set opacity dynamically
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="wrapper">
          <div className="image-container"></div>
          <div class="hero-container">
            <div class="text-section">
              <h3>LEARN HOW TO LEARN</h3>
              <h1>Enhance the Self-Learning Capability in Your Child</h1>
              <p>
                <strong>Drona Learning Academy</strong> is dedicated to
                delivering high-quality education through
                <strong>innovative teaching methodologies</strong> and
                <strong>personalized learning experiences</strong>. Our
                carefully designed educational programs are tailored to not only
                promote
                <strong>academic excellence</strong> but also nurture
                <strong>holistic development</strong>, empowering students to
                thrive both inside and outside the classroom.
              </p>

              <button class="cta-button">Test Series</button>
            </div>
            <div class="image-section">
              <img
                src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/hero1.png"
                alt="Top Image"
                class="top-image"
              />
              <img
                src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/hero2.png"
                alt="Bottom Image"
                class="bottom-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Personalized Focus Section */}
      <div className="personalized-focus-section">
        <div className="focus-images">
          <img
            src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/about1.jpg"
            alt="Student studying"
            className="left-image"
          />
          <div className="right-images">
            <img
              src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/about2.jpg"
              alt="Library"
            />
            <img
              src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/about3.jpg"
              alt="Teamwork"
            />
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

      {/* Carousel */}
      <div className="carousel-section">
        <img
          src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/carousel.jpg"
          alt="Background"
          className="carousel-image"
        />
        <div className="carousel-content">
          <h1>Our Courses</h1>
          <p>
            We ensure that the focus on each child is different, and tailor-made
            just for them.
          </p>
        </div>
      </div>

      <Dashboard />

      {/* Test Series Section */}
      <div className="testSeries-section">
        <img
          src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/structure.jpg"
          alt="Background"
          className="testSeries-image"
        />
        <div className="testSeries-content">
          <h1>Test Series</h1>
          <p>
            Testing oneself is a valuable tool to measure progress at regular
            intervals as it helps to determine learning gaps, improves knowledge
            retention, boosts checking abilities, and minimizes careless errors.
          </p>
          <button className="btn secondary">Enquire Now</button>
        </div>
      </div>

      {/* Founders Section */}
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

      <Testimonial />
      <Footer />
    </>
  );
};

export default HeroSection;
