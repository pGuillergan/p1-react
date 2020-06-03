import React, { useState } from "react";
import { toast } from "react-toastify";
import DeleteCourseForm from "./DeleteCourseForm";
import CoursesPage from "../courses/CoursesPage";

export default function DeleteCoursePage(props) {
  const [course, setCourse] = useState({
    course_title: "",
  });

  function handleChange(event) {
    setCourse({ ...course, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://54.215.227.33:3000/deletecourse", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(course),
    })
      .then((result) => {
        toast.success("Deleted course!");
        props.history.push("/courses");
      })
      .catch((err) => {
        toast.error("Course was not deleted..");
      });
  }

  return (
    <div>
      <div className='jumbotron'>
      <h3>Delete course</h3>
      <DeleteCourseForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        course={course}
      />
      </div>
      <hr/>
      <CoursesPage />
    </div>
  );
}
