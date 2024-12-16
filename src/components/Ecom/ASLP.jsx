import React from "react";
import { useParams } from "react-router-dom";

const CoursePage = () => {
  const { courseId } = useParams();

  return (
    <div>
      <h2>Course Page - {courseId}</h2>
      <p>Details for course {courseId} will go here.</p>
    </div>
  );
};

export default CoursePage;
