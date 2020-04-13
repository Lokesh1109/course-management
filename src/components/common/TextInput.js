import React from "react";

const TextInput = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.label}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type="text"
          name={props.name}
          className="form-control"
          onChange={props.onChange}
          value={props.value}
        />
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>
    </div>
  );
};

export default TextInput;
