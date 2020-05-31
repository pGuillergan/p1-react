import React from "react";
import TextInput from "../common/TextInput";
import { Link } from 'react-router-dom';

export default function DeleteCourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="course_title"
        label="Course ID"
        onChange={props.onChange}
        onSubmit={props.onSubmit}
        name="course_title"
        value={props.course.course_title}
      />

      <button type="submit" className="btn btn-primary">
        Delete
      </button>
      {'  |  '}
      <Link to="/courses">
        <button className="btn btn-primary">Cancel</button>
      </Link>
    </form>
  );
}
