import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";
import { BrowserRouter, Link } from 'react-router-dom';
import Navbar from './../common/Navbar'
import Container from "react-bootstrap/Container";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://54.215.227.33:3000/getallcourses")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <Container>
      <h3>Courses Page</h3>
      <br />
      <Link to="/course/add">
        <button className="btn btn-primary">Add Course</button>
      </Link>

      {'  |  '}

      <Link to="/course/edit">
        <button className="btn btn-primary">Edit Course</button>
      </Link>

      {'  |  '}

      <Link to="/course/delete">
        <button className="btn btn-primary">Delete Course</button>
      </Link>
      <br />
      <br />
      <CourseList courses={courses} />
      </Container>
    </div>
  );
}
