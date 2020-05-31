import React from "react";

export default function CourseList(props) {
  return (
    <table className="table">
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
    </table>
  );
}
