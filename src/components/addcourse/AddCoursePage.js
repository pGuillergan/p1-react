import React, { useState } from "react";
import { toast } from "react-toastify";
import AddCourseForm from "./AddCourseForm";

export default function AddCoursePage(props) {
  const [course, setCourse] = useState({
    course_title: "",
    courseDescription: "",
    units: "",
  });

  function handleChange(event) {
    setCourse({ ...course, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://54.215.227.33:3000/addcourse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(course),
    })
      .then((result) => {
        toast.success("Added new course!");
        props.history.push("/courses");
      })
      .catch((err) => {
        toast.error("Course was not added..");
      });
  }

  return (
    <div>
    <div className="jumbotron">
      <h3>Add new course</h3>
      <AddCourseForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        course={course}
      />
      </div>
    </div>
  );
}
