import React from "react";
import { Link } from "react-router-dom";

const CoursesList = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author Id</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      {props.courses.map((course) => {
        return (
          <tr key={course.id}>
            <td>
              <Link to={"/course/" + course.slug}>{course.title}</Link>
            </td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => props.deleteRecord(course.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default CoursesList;
