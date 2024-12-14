import Footer from "../Footer/Footer";
import React, { useEffect } from "react";
import "./Careers.css"; // Include CSS for styling
import Faq from './Faq'
import Card from "./Card";

const Careers = () => {
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollY = window.scrollY; // Get scroll position
      const imageContainer = document.querySelector(".career-image-container");

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
    <div className="careers-container">
       <div className="career-wrapper">
       <div className="career-image-container"></div>
      {/* Header Section */}
      <div className="header-section">
        <div className="text-left">
          <h1>Careers at Drona Learning</h1>
          <p>
            Join our team of passionate educators, technologists, and innovators.
            At Drona Learning, we empower educators and learners with cutting-edge tools and educational content. Be part of a dynamic team that is revolutionizing the way people learn and grow.
          </p>
          <button className="apply-button">Apply Now</button>
        </div>
        <div className="image-right">
          <img
            src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/hero1.png"
            alt="Career visual"
            className="section-image"
          />
        </div>
      </div>

      {/* Video Section */}
      <div className="video-section">
        <div className="image-left">
          {/* <iframe
            className="video-frame"
            src="https://www.youtube.com/embed/video_id"
            title="Together We Can"
            allowFullScreen
          ></iframe> */}
           <img
            src="https://dhruv-kundu14.github.io/drona_learning/Icons/career/c1.jpeg"
            alt="Career visual"
            className="section-image"
          />
        </div>
        <div className="text-right">
          <h2>Transforming Education Together</h2>
          <p>
            At Drona Learning, we’re not just building tools—we’re shaping the future of education. By connecting teachers and students through innovative technology, we make learning more accessible, engaging, and impactful. Join us in creating a brighter future for education around the world.
          </p>
        </div>
      </div>

      {/* Culture Section */}
      <div className="culture-section">
        <div className="text-left">
          <h2>Our Educational Culture</h2>
          <p>
            We believe in fostering a culture of collaboration, creativity, and continuous learning. At Drona Learning, every team member has the opportunity to grow, make an impact, and contribute to our shared mission of enhancing the learning experience. We celebrate diversity, inclusivity, and the power of education to change lives.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="image-right">
          <img
            src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/hero2.png"
            alt="Group of educators collaborating"
            className="section-image"
          />
        </div>
      </div>
      <Card />
      <Faq />
      <Footer />
      </div>
    </div>
    
  );
};

export default Careers;
