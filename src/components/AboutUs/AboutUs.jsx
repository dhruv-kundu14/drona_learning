import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import Footer from "../Footer/Footer";

const AboutUs = () => {

  const baseUrl = process.env.REACT_APP_IMG_URL;

  const [hovered, setHovered] = useState(null);

   useEffect(() => {
      // Function to handle scroll event
      const handleScroll = () => {
        const scrollY = window.scrollY; // Get scroll position
        const imageContainer = document.querySelector(".about-image-container");
  
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

  const founders = [
    {
      id: 1,
      // image: "https://dhruv-kundu14.github.io/drona_learning/Icons/Founders/founder1.jpg",
      image: `${baseUrl}/Icons/Founders/founder1.jpg`,
      name: "Dr. Abhilasha",
      title: "Co - Founder",
      description: "A Scientist with a passion for teaching.",
    },
    {
      id: 2,
      // image: "https://dhruv-kundu14.github.io/drona_learning/Icons/Founders/founder2.jpeg",
      image: `${baseUrl}/Icons/Founders/founder2.jpeg`,
      name: "Dr. Jayanti Datta",
      title: "Co - Founder",
      description:
        "An experienced educator with a career spanning over 16+ years.",
    },
  ];

  return (
    <>
     
     
 
       <div className="about-testSeries-section">
        <div className="about-wrapper"></div>
       <div className="about-image-container"></div>
          <img
            // src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/structure.jpg"
            src={`${baseUrl}/Icons/home/structure.jpg`}
            alt="Background"
            className="about-testSeries-image"
          />
          <div className="about-testSeries-content">
            <h1>About Us</h1>
            <p>Get To Know Us.</p>
          </div>
        </div>
     

      {/* Personalized Focus Section */}
      <div className="personalized-about-section">
        <div className="about-content">
          <p>
            Established in 2018, Drona Learning Academy is the brainchild of two
            women educationists, who with their passion and experience have
            developed a platform that attempts to identify and bridge the
            learning gaps of students all over.
          </p>
          <p>
            Our goal is to make students enjoy the subjects and study in the
            most effective manner. Emphasising on understanding, diligence, and
            self-realisation, Drona has trained more than 250 students since
            2018.
          </p>
          <p>
            We are experts in Mathematics and Science, having grown from a 2
            member team in 2018 to a 16-member team in 2022. We have a carefully
            curated group of teachers who are hired after a rigorous selection
            process. One good teacher can impact the entire learning experience
            of a student, and we have tried our best to provide such mentors to
            all our students.
          </p>
          <p>
            Since 2020 we have been helping students improve their language
            skills too. Well-experienced and proficient language experts in
            Hindi, Sanskrit, French and English are a part of our team as well.
          </p>
        </div>
        <div className="about-images">
          {/* Right images (stacked vertically) */}
          <div className="right-images">
            <img src={`${baseUrl}/Icons/About/about5.jpg`} alt="Library" />
            
            <img src={`${baseUrl}/Icons/About/about6.jpg`} alt="Teamwork" />
          </div>
          {/* Left image (full-length) */}
          <img
           src={`${baseUrl}/Icons/About/about4.jpg`}
            alt="Student studying"
            className="left-image"
          />
        </div>
      </div>
      
      <div className="info-container">
        <div className="info-section">
          <h2>Our Goals</h2>
          <ul>
            <li>✔️ Ensure that students enjoy the process of learning.</li>
            <li>✔️ Promote self-learning.</li>
            <li>✔️ Bringing perfection in their learning ability.</li>
            <li>✔️ To deepen their knowledge and develop their skills.</li>
            <li>✔️ Practical application of knowledge to shape future.</li>
          </ul>
        </div>
        <div className="info-section">
          <h2>What we do</h2>
          <ul>
            <li>✔️ Focus on the need of every child.</li>
            <li>✔️ Live Interactive Customized Online Sessions.</li>
            <li>✔️ Identify and bridge Learning Gaps.</li>
            <li>✔️ Doubt clarification classes to facilitate self-learning.</li>
            <li>✔️ Tests at regular intervals to improve perfection.</li>
          </ul>
        </div>
      </div>

      <div className="about-founders-container">
        <h2 className="about-title">Founders</h2>
        <div className="about-founders">
          {founders.map((founder) => (
            <div
              key={founder.id}
              className="about-founder"
              onMouseEnter={() => setHovered(founder.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={founder.image}
                alt={founder.name}
                className="about-founder-image"
              />
              {hovered === founder.id && (
                <div className="about-founder-details">
                  <h3 className="about-founder-name">{founder.name}</h3>
                  <p className="about-founder-role">{founder.role}</p>
                  <p className="about-founder-desc">{founder.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="belief-container">
        <h2 className="belief-title">OUR BELIEF</h2>
        <h3 className="belief-tagline">
          Promote self-learning, Reshape education
        </h3>
        <div className="belief-content">
          <div className="belief-section">
            <h4>Our Mission</h4>
            <p>
              To employ our unique teaching methodology that helps students
              deepen their knowledge and skills to appreciate, and find their
              love of learning. Also encourage them to apply their learnings in
              a way that will help them build their future.
            </p>
          </div>
          <div className="belief-section">
            <h4>Our Vision</h4>
            <p>
              To be recognized as a premier learning academy in bridging
              learning gaps in students and self-assess one’s potential for
              skill and knowledge thus ensuring trustworthiness in whatever we
              impart.
            </p>
          </div>
        </div>
      </div>

      <div className="why-container">
        <h2 className="why-title">Why Choose Us?</h2>
        <hr className="why-divider" />
        <div className="why-content">
          <div className="why-left">
            <p>
              Drona Learning Academy consists of a group of extremely
              passionate, highly educated, and experienced teachers. With our
              vast experience and research, we have designed unique methods of
              teaching each subject.
            </p>
            <p>
              With the understanding that each child is different and faces
              varying types of learning challenges, we ensure that the focus on
              each child is different, and tailor-made just for them. We try to
              identify the challenges they face, understand the root cause of
              why the student is unable to learn, and address them in a way that
              they are able to unlearn any ineffective methods of learning, and
              adopt a new, holistic way of understanding and loving each
              subject.
            </p>
            <p>
              Our unique methods not only help the students love the subjects,
              but also encourage them to apply their learnings in a way that
              will help them build their future – be it for competitive exams,
              further studies, real-life situations, entering the NDA, or
              anything else they wish to do. Sky is the limit!
            </p>
          </div>
          <div className="why-right">
            <p>
              We also attempt to instill the habit of self-learning in all our
              students, which helps increase their confidence, and engage with
              the subject in a meaningful way.
            </p>
            <p>
              Our periodic assessments and feedback evaluate students’ learning
              gaps and provide guidance towards improving for the better.
            </p>
            <p>
              Our teaching is through an online, live-interactive platform,
              which not only saves time to commute but also provides the safety
              and comforts of home. Our visual teaching methodology makes the
              learning more impactful, which can be recorded and replayed.
              Lastly, as an enhancement to students’ careers, we have our
              specialized Psychometric assessment for career guidance, in
              collaboration with Pearson India. Their extensive research on such
              assessment can aid students in finding careers which are best
              suited for them, according to their likes and strengths.
            </p>
            <p>Fall in love with learning at Drona Learning Academy!</p>
          </div>
        </div>
      </div>

      <div className="join-section">
        <img
          // src="https://dhruv-kundu14.github.io/drona_learning/Icons/home/structure.jpg" // Ensure this path points to the public folder
          src={`${baseUrl}/Icons/home/structure.jpg`}
          alt="Background"
          className="join-image"
        />
        <div className="join-content">
          <h1>Join us for a bright career</h1>
          <p>
            Our unique methods not only help the students love the subjects, but
            also encourage them to apply their learnings in a way that will help
            them build their future
          </p>
          <button className="btn secondary1">Sign up for free Demo</button>
          <button className="btn secondary">Enquire Now</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
