import React from "react";
import { shallow } from "enzyme";
import List from "./List";
import { findByTestAttr } from "./../../Util";

const setUp = (props = {}) => {
  const component = shallow(<List {...props} />);
  return component;
};
describe("List Component", () => {
  describe("List Component with no props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    test("listComponent should render without errors", () => {
      const wrapper = findByTestAttr(component, "listComponent");
      expect(wrapper.length).toBe(1);
    });
    test("headerItem should not render", () => {
      const wrapper = findByTestAttr(component, "headerItem");
      expect(wrapper.length).toBe(0);
    });
    test("listItem should not render", () => {
      const wrapper = findByTestAttr(component, "listItem");
      expect(wrapper.length).toBe(0);
    });
  });

  describe("List Component with props", () => {
    let component;
    beforeEach(() => {
      const props = {
        header: [
          "Company Name",
          "First Purchase Date",
          "Total Budget",
          "Budget Spent",
          "Budget Left",
        ],
        items: [
          {
            id: 1,
            name: "Martian Firma",
            budget: 10000.0,
            budget_spent: 4500.0,
            date_of_first_purchase: "2119-07-07",
          },
          {
            id: 2,
            name: "Solar Firma",
            budget: 1123.22,
            budget_spent: 451.3754,
            date_of_first_purchase: "2120-01-14",
          },
        ],
      };
      component = setUp(props);
    });
    test("header should render with 5 items", () => {
      const wrapper = findByTestAttr(component, "headerItem");
      expect(wrapper.length).toBe(5);
    });
    test("listI should render with 2 items", () => {
      const wrapper = findByTestAttr(component, "listItem");
      expect(wrapper.length).toBe(2);
    });
  });
});
