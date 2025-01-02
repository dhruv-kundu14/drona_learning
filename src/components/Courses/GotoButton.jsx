import React from "react";
import "./Courses.css"; // Create a separate CSS file for styling

const GotoButton = () => {
  const handleButtonClick = () => {
    window.location.href = "/course/aslp#P"; // Replace with your desired URL or route
  };

  return (
    <div className="goto-container">
      <div className="goto-left">
        <h1>
          Welcome to
          <br />
          Drona Plus+
        </h1>
      </div>
      <div className="goto-right">
        <p>
          DronaPlus is the ultimate e-learning platform for students, offering
          engaging courses and interactive resources to make learning exciting
          and effective. Whether you're mastering tough subjects or exploring
          new topics, DronaPlus helps you achieve academic success with
          personalized tools and expert guidance. Dive into a world of
          innovative lessons, quizzes, and videos tailored to your pace. With
          DronaPlus, learning isn’t just a task—it’s an adventure waiting to be
          explored!
        </p>
        <button className="goto-animated-button" onClick={handleButtonClick}>
          <img src="https://dhruv-kundu14.github.io/drona_learning/Icons/Ecom/cart.png" alt="icon" className="button-icon" />
          Buy a Course  
        </button>
      </div>
    </div>
  );
};

export default GotoButton;
