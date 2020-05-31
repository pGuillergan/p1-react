import React from "react";
import TextInput from "./../common/TextInput";
import { Link } from 'react-router-dom';

export default function CreateAddCourseForm(props) {
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
      <TextInput
        id="courseDescription"
        label="Description"
        onChange={props.onChange}
        onSubmit={props.onSubmit}
        name="courseDescription"
        value={props.course.courseDescription}
      />
      <TextInput
        id="units"
        label="Units"
        onChange={props.onChange}
        onSubmit={props.onSubmit}
        name="units"
        value={props.course.units}
        type="number"
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
      {'  |  '}
      <Link to="/courses">
        <button className="btn btn-primary">Cancel</button>
      </Link>
    </form>
  );
}
