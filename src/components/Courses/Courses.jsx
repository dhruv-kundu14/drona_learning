import React from 'react'
import CarouselFade from './Carousel'
import CourseCard from './CourseCard'
import Footer from "../Footer/Footer"

const Courses = () => {
  return (
    <div>
      <CarouselFade />
    <h1 className='courses-text'>See what you can learn with us</h1>
      <CourseCard />

      <Footer />
    </div>
  )
}

export default Courses
