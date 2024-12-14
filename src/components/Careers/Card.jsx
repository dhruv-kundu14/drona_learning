import React, { useState } from 'react';
import './Careers.css';

const Card = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

  const cards = ['Card 1', 'Card 2', 'Card 3'];

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="card-component">
      <div className="card-container">
        {cards.map((content, index) => {
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
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
