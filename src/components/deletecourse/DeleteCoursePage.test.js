import React, { Component } from "react";
import { shallow } from "enzyme";

import DeleteCoursePage from "./DeleteCoursePage";

describe("DeletePage", () => {
  it("should delete course", () => {
    const deletePage = shallow(<DeleteCoursePage/>);
    expect(deletePage).toMatchSnapshot();

    expect(deletePage.find('h3').length).toEqual(1);
    expect(deletePage.find('DeleteCourseForm').length).toEqual(1);

  });

});
