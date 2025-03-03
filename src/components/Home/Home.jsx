import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Dashboard from "../Home/Dashboard";
import Testimonial from "../Home/Testimonial";
import "../../App.css"; // Ensure this path is correct for your CSS file
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const baseUrl = process.env.REACT_APP_IMG_URL;

  const navigate = useNavigate();
  const handleTest1 = () => {
    navigate(`/course/aslp#TEST`);
  };

  const handleTest2 = () => {
    navigate(`/about`);
  };

  const handleTest3 = () => {
    navigate(`/contact`);
  };

  const handleCoursePage = () => {
    navigate(`/courses`);
  };

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
              <h3>Unlock the Secrets to Lifelong Learning</h3>
              <h1>✨ Master the Art of Self-Learning ✨</h1>
              <p>
                At <strong>Drona Learning Academy</strong>, we don’t just
                teach—we empower! Discover how to harness the power of
                curiosity, cultivate a growth mindset, and transform the way
                your child approaches learning. With our innovative methods,
                your child will gain not only knowledge but also the tools to
                become an independent, confident learner for life.
                <br />
                <strong>
                  {" "}
                  Start your journey with us today and learn how to learn—unlock
                  the key to endless possibilities! 🚀
                </strong>
              </p>

              <button class="cta-button" onClick={handleTest1}>
                Test Series
              </button>
            </div>
            <div class="image-section">
              <img
                // src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/hero1.png"
                src={`${baseUrl}/Icons/home/hero1.png`}
                alt="Top section of the website with a hero banner"
                className="top-image"
              />
              <img
                // src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/hero2.png"
                src={`${baseUrl}/Icons/home/hero2.png`}
                alt="Bottom section of the website with a hero banner"
                className="bottom-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Personalized Focus Section */}
      <div className="personalized-focus-section">
        <div className="focus-images">
          <img
            // src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/about1.jpg"
            src={`${baseUrl}/Icons/home/about1.jpg`}
            alt="Student studying"
            className="left-image"
          />
          <div className="right-images">
            <img
              // src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/about2.jpg"
              src={`${baseUrl}/Icons/home/about2.jpg`}
              alt="Library"
            />
            <img
              // src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/about3.jpg"
              src={`${baseUrl}/Icons/home/about3.jpg`}
              alt="Teamwork"
            />
          </div>
        </div>
        <div className="focus-content">
          <h2>Personalized Attention for Every Child</h2>
          <p>
            At <strong>Drona Learning Academy</strong>, we provide personalized
            education through our team of passionate, experienced teachers. With
            research-backed, subject-specific methods, we ensure every student
            receives the individual attention they need to thrive.
          </p>
          <button className="btn primary" onClick={handleTest2}>
            → About us
          </button>
        </div>
      </div>

      {/* Carousel */}
      {/* <div className="carousel-section">
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
      </div> */}
      <div className="carousel-section">
        <img
          // src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/carousel.jpg"
          src={`${baseUrl}/Icons/home/carousel.jpg`}
          alt="Background"
          className="carousel-image"
        />
        <div className="carousel-content">
          <h1>Our Courses</h1>
          <p>
            We ensure that the focus on each child is different, and tailor-made
            just for them.
          </p>
          <div className="card1-container">
            <div className="card1">
              <h2>ASLP(Assisted Self Learning Program)</h2>
              <p>
                A definitive worksheet-based course designed to excel in
                examination. With comprehensive chapter-wise worksheets, test
                papers, corrections and feedback by expert teachers , students
                develop a solid grasp of mathematical concepts. This course
                includes continuous study plan under expert guidance, ensuring
                students master the curriculum while fostering a genuine
                interest in Mathematics .
              </p>
            </div>
            <div className="card1">
              <h2>Test Series</h2>
              <p>
                Unlock your full potential with our meticulously designed Test
                Series. With timed mock tests, practice exams, and topic-wise
                quizzes, we help students sharpen their skills and gain
                confidence for any exam. These test series are curated to mimic
                real exam environments, allowing students to evaluate their
                performance, identify areas for improvement, and track their
                progress over time.
              </p>
            </div>
            <div className="card1">
              <h2>Live and Interactive Classes</h2>
              <p>
                Join our Live and Interactive Classes for a dynamic learning
                experience. Led by expert instructors, these real-time sessions
                offer opportunities for questions, discussions, and
                collaboration with peers. Get instant feedback and personalized
                guidance to master complex concepts and deepen your
                understanding.
              </p>
            </div>
          </div>
          <button className="card1-button" onClick={handleCoursePage}>Explore Our Courses</button>
        </div>
      </div>

      <Dashboard />

      {/* Test Series Section */}
      <div className="testSeries-section">
        <img
          // src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/structure.jpg"
          src={`${baseUrl}/Icons/home/structure.jpg`}
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
          <button className="btn secondary" onClick={handleTest3}>
            Enquire Now
          </button>
        </div>
      </div>

      {/* Founders Section */}
      <div className="founders-container">
        <h2 className="title">Founders</h2>
        <div className="founders">
          <div className="founder">
            <img
              // src="https://dhruv-kundu14.github.io/drona_learning/Icons/Founders/founder1.jpg"
              src={`${baseUrl}/Icons/Founders/founder1.jpg`}
              alt="Dr. Abhilasha"
              className="founder-image"
            />
            <h3 className="founder-name">Dr. Abhilasha</h3>
            <p className="founder-role">Co - Founder</p>
            <p className="founder-desc">A scientist with a passion to teach.</p>
          </div>
          <div className="founder">
            <img
              // src="https://dhruv-kundu14.github.io/drona_learning/Icons/Founders/founder2.jpeg"
              src={`${baseUrl}/Icons/Founders/founder2.jpeg`}
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
