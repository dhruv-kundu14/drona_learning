import React, { useState } from "react";
import "./Careers.css";

const Card = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      title: "Math",
      image:
        "https://dhruv-kundu14.github.io/drona_learning/Icons/career/math.png",
      description: `Mathematics teachers at Drona Learning inspire grades 6-12 with engaging, personalized lessons, fostering critical thinking and strong foundations in CBSE, ICSE, and IGCSE curricula.`,
    },
    {
      title: "Science",
      image:
        "https://dhruv-kundu14.github.io/drona_learning/Icons/career/science.png",
      description: `Science teachers at Drona Learning ignite curiosity in grades 6-12 through interactive, personalized lessons, building strong foundations in CBSE, ICSE, and IGCSE curricula.`,
    },
    {
        title: "Assisted Self Learning (ASLP)",
        image:
          "https://dhruv-kundu14.github.io/drona_learning/Icons/career/learning.png",
        description: `The Assisted Self-Learning Program (ASLP) at Drona Learning Academy is a unique educational approach designed to empower students through self-paced learning with the support of expert guidance.`
    }
  ];

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="card-component">
      <div className="card-container">
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
              className="card"
              style={{
                transform: `translateX(${offset}px) scale(${scale})`,
                zIndex: zIndex,
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={card.image} alt={card.title} className="card-image" />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
