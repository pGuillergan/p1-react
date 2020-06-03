import React, { Component } from "react";
import { shallow } from "enzyme";

import EditCoursePage from "./EditCoursePage";

describe("EditPage", () => {
  it("should edit course", () => {
    const editPage = shallow(<EditCoursePage/>);
    expect(editPage).toMatchSnapshot();

    expect(editPage.find('h3').length).toEqual(1);
    expect(editPage.find('EditCourseForm').length).toEqual(1);

  });

});