import React, {useEffect} from 'react'
import CarouselFade from './Carousel'
import CourseCard from './CourseCard'
import Footer from "../Footer/Footer"

const Courses = () => {
    useEffect(() => {
      // Function to handle scroll event
      const handleScroll = () => {
        const scrollY = window.scrollY; // Get scroll position
        const imageContainer = document.querySelector(".courses-image-container");
  
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
    <div>
       <div className="courses-wrapper">
       <div className="courses-image-container"></div>
      <CarouselFade />
      </div>
    <h1 className='courses-text'>See what you can learn with us</h1>
      <CourseCard />

      <Footer />
    </div>
  )
}

export default Courses
