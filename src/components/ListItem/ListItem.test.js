import React from "react";
import { shallow } from "enzyme";
import ListItem from "./ListItem";
import { findByTestAttr } from "./../../Util";

const setUp = (props = {}) => {
  const component = shallow(<ListItem {...props} />);
  return component;
};
describe("ListItem Component", () => {
  describe("ListItem Component with no props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    test("listItemComponent should not render", () => {
      const wrapper = findByTestAttr(component, "listItemComponent");
      expect(wrapper.length).toBe(0);
    });
  });

  describe("ListItem Component with props", () => {
    let component;
    beforeEach(() => {
      const props = {
        name: "name test",
        firstDate: "2019-95-05",
        budget: '101.12',
        budgetSpent: '12',
        budgetLeft: '99.12',
        header: ['1','2','3','4','5']
      };
      component = setUp(props);
    });

    test("itemName should render without errors", () => {
      const wrapper = findByTestAttr(component, "itemName");
      expect(wrapper.text()).toEqual("name test");
    });
    test("itemDate should render without errors", () => {
      const wrapper = findByTestAttr(component, "itemDate");
      expect(wrapper.text()).toEqual("2019-95-05");
    });
    test("itemBudget should render without errors", () => {
      const wrapper = findByTestAttr(component, "itemBudget");
      expect(parseFloat(wrapper.text())).toBe(101.12);
    });
  });
});
