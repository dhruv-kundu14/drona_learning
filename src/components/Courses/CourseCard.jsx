import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Courses.css";

const CourseCard = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      title: "Assisted Self Learning (ASLP)",
      image:
        "https://dhruv-kundu14.github.io/drona_learning/Icons/career/math.png",
      description: `Mathematics teachers at Drona Learning inspire grades 6-12 with engaging, personalized lessons,
       fostering critical thinking and strong foundations in CBSE, ICSE, and IGCSE curricula.`,
      link: "/course/aslp" // Example of the route for the course
    },
    {
      title: "Test Series",
      image:
        "https://dhruv-kundu14.github.io/drona_learning/Icons/career/science.png",
      description: `Science teachers at Drona Learning ignite curiosity in grades 6-12 through interactive,
       personalized lessons, building strong foundations in CBSE, ICSE, and IGCSE curricula.`,
      link: "/course/test-series" // Another route for the course
    },
    {
      title: "Live Interactive Classes",
      image:
        "https://dhruv-kundu14.github.io/drona_learning/Icons/career/learning.png",
      description: `The Assisted Self-Learning Program (ASLP) at Drona Learning Academy is a unique educational approach designed
       to empower students through self-paced learning with the support of expert guidance.`,
      link: "/course/live-classes" // Another route for the course
    },
  ];

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="course-card-component">
      <div className="course-card-container">
        {cards.map((card, index) => {
          // Calculate card position dynamically
          const totalCards = cards.length;
          const middleIndex = Math.floor(totalCards / 2);
          const offset = (index - middleIndex) * 300; // Adjust spacing between cards
          const scale = index === hoveredCard ? 1.2 : 0.9; // Scale based on hover
          const zIndex = index === hoveredCard ? 3 : 1; // Z-index for depth

          return (
            <div
              key={index}
              className="course-card"
              style={{
                transform: `translateX(${offset}px) scale(${scale})`,
                zIndex: zIndex,
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={card.image} alt={card.title} className="course-card-image" />
              <h3 className="course-card-title">{card.title}</h3>
              <p className="course-card-description">{card.description}</p>
              {/* Use Link component for navigation */}
              <Link to={card.link} className="course-card-link">
                Click here
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseCard;
