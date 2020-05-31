import React, { useState } from "react";
import { toast } from "react-toastify";
import EditCourseForm from './EditCourseForm'
import CoursesPage from './../courses/CoursesPage'


export default function EditCoursePage(props) {
  const [course, setCourse] = useState({
    "course_title": '',
    "courseDescription": '',
    units: '',
  });

  function handleChange(event) {
    setCourse({ ...course, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://54.215.227.33:3000/updatecourse', {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(course),
    })
      .then((result) => {
        toast.success("Updated course!");
        props.history.push("/courses");
      })
      .catch((err) => {
        toast.error("Course was not Updated..");
      });
  }

  return (
    <div>
    <h3>Edit existing course</h3>
    <EditCourseForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        course={course}
    />
    <CoursesPage/>
</div>
  
  );
}
