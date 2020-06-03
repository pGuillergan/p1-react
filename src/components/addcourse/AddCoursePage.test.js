import React, { Component } from "react";
import { shallow } from "enzyme";

import AddCoursePage from "./AddCoursePage";

describe("AddPage", () => {
  it("should add courses", () => {
    const addPage = shallow(<AddCoursePage/>);
    expect(addPage).toMatchSnapshot();

    expect(addPage.find('h3').length).toEqual(1);
    // expect(addPage.find('AddCourseForm').length).toEqual(1);

  });

});