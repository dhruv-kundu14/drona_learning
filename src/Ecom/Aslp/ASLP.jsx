import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./ASLP.css";  // Add some styles for CoursePage layout

const CoursePage = () => {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);

  // Fetch course details (simulated with useEffect here, in real case it would be an API call)
  useEffect(() => {
    // Simulate fetching course data based on courseId
    const fetchCourseData = () => {
      // Example static data - you would replace this with an actual API call
      const data = {
        id: courseId,
        name: `Course Name for ${courseId}`,
        description: `This is a detailed description for course ${courseId}. It includes lessons, quizzes, and more.`,
        price: `$${Math.floor(Math.random() * 100) + 50}`,  // Random price between $50 and $150
      };
      setCourseData(data);
    };

    fetchCourseData();
  }, [courseId]);

  return (
    <div className="course-page-container">
      <Sidebar />
      <div className="course-details">
        {courseData ? (
          <>
            <h2>{courseData.name}</h2>
            <p>{courseData.description}</p>
            <p><strong>Price:</strong> {courseData.price}</p>
          </>
        ) : (
          <p>Loading course details...</p>
        )}
      </div>
    </div>
  );
};

export default CoursePage;
