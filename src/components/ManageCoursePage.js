import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import { toast } from "react-toastify";
import courseStore from "../stores/CourseStore";
import * as courseActions from "../actions/courseActions";
const ManageCoursepage = (props) => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    title: "",
    authorId: null,
    category: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) return;
    courseActions.saveCourse(course).then(() => {
      props.history.push("/Courses");
      toast.success("Course saved");
    });
  };

  useEffect(() => {
    const slug = props.match.params.slug;
    courseStore.addChangeListener(onChange);
    if (courses.length === 0) courseActions.loadCourses();
    else if (slug) {
      setCourse(courseStore.getCourseBySlug(slug));
    }

    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);

  const onChange = () => {
    setCourses(courseStore.getCourses());
  };
  const handleChange = ({ target }) => {
    const updatedCourse = { ...course, [target.name]: target.value };
    setCourse(updatedCourse);
  };
  const isFormValid = () => {
    const _errors = {};
    if (!course.title) _errors.title = "title is required";
    if (!course.authorId) _errors.authorId = "author Id is reuired";
    if (!course.category) _errors.category = "category is required";

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  };
  return (
    <CourseForm
      course={course}
      onSubmit={handleSubmit}
      onChange={handleChange}
      error={errors}
    />
  );
};

export default ManageCoursepage;
