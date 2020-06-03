import React from "react";
import Table from 'react-bootstrap/Table'

export default function CourseList(props) {
  return (
    <Table striped bordered hover Use size="sm" variant="dark">
      <thead>
        <tr>
          <th>Course Code</th>
          <th>Description</th>
          <th>Units</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((courses) => {
          return (
            <tr key={courses.course_accro}>
              <td>{courses.course_accro}</td>
              <td>{courses.course_description}</td>
              <td>{courses.units}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
