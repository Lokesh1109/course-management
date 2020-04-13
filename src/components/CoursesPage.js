import React, { useEffect, useState } from "react";
import courseStore from "../stores/CourseStore";
import CourseList from "./CoursesList";
import * as courseActions from "../actions/courseActions";
import { Link } from "react-router-dom";
const CoursesPage = () => {
  const [courses, setCourses] = useState(courseStore.getCourses());
  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) courseActions.loadCourses();
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  const onChange = () => {
    setCourses(courseStore.getCourses());
  };

  return (
    <>
      <h1>Courses</h1>
      <Link to="/Course" className="btn btn-primary">
        Add Course
      </Link>
      <CourseList courses={courses} deleteRecord={courseActions.deleteCourse} />
    </>
  );
};

export default CoursesPage;
