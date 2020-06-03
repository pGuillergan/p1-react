import React, { Component } from "react";
import { shallow } from "enzyme";

import CoursesPage from "./CoursesPage";

describe("CoursesPage", () => {
  it("should display the list of courses", () => {
    const coursesPage = shallow(<CoursesPage/>);
    expect(coursesPage).toMatchSnapshot();

    expect(coursesPage.find('.btn').length).toEqual(3);

  });

});
