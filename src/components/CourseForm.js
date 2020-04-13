import React from "react";
import Textinput from "./common/TextInput";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <Textinput
        id="title"
        label="title"
        name="title"
        onChange={props.onChange}
        value={props.course.title}
        error={props.error.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            value={props.course.authorId}
            className="form-control"
            onChange={props.onChange}
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {props.error.authorId && (
          <div className="alert alert-danger"> {props.error.authorId} </div>
        )}
      </div>

      <Textinput
        id="category"
        label="category"
        name="category"
        onChange={props.onChange}
        value={props.course.category}
        error={props.error.category}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
