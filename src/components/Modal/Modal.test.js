import React from "react";
import { shallow } from "enzyme";
import Modal from "./Modal";
import { findByTestAttr } from "./../../Util";

const setUp = (props = {}) => {
  const component = shallow(<Modal {...props} />);
  return component;
};
describe("Modal Component", () => {
  describe("Modal Component with no props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    test("modalComponent should render without errors", () => {
      const wrapper = findByTestAttr(component, "modalComponent");
      expect(wrapper.length).toBe(1);
    });
    test("modalTitle should render without errors", () => {
      const wrapper = findByTestAttr(component, "modalTitle");
      expect(wrapper.length).toBe(1);
    });
    test("secondaryButton should render without errors", () => {
      const wrapper = findByTestAttr(component, "secondaryButton");
      expect(wrapper.length).toBe(1);
    });
    test("primaryButton should render without errors", () => {
      const wrapper = findByTestAttr(component, "primaryButton");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Modal Component with props", () => {
    let component;
    beforeEach(() => {
      const props = {
        totalBudget: "this is body text",
        isValid: true,
        validationMessage: "this is no button text",
        modalTitle: "this is modal title",
        primaryButtonText: "this is primary button text",
        secondaryButtonText: "this is secondary button text",
      };
      component = setUp(props);
    });

    test("primaryButton should render without errors", () => {
      const wrapper = findByTestAttr(component, "primaryButton");
      expect(wrapper.text()).toEqual("this is primary button text");
    });
    test("secondaryButton should render without errors", () => {
      const wrapper = findByTestAttr(component, "secondaryButton");
      expect(wrapper.text()).toEqual("this is secondary button text");
    });
    test("modalTitle should render without errors", () => {
      const wrapper = findByTestAttr(component, "modalTitle");
      expect(wrapper.text()).toEqual("this is modal title");
    });
  });

  describe("error section valid", () => {
    let component;
    beforeEach(() => {
      const props = {
        isValid: true,
      };
      component = setUp(props);
    });
    test("Should not render", () => {
      const wrapper = findByTestAttr(component, "modalError");
      expect(wrapper.length).toBe(0);
    });
  });

  describe("error section is not valid", () => {
    let component;
    beforeEach(() => {
      const props = {
        isValid: false,
      };
      component = setUp(props);
    });
    test("Should render without errors", () => {
      const wrapper = findByTestAttr(component, "modalError");
      expect(wrapper.length).toBe(1);
    });
  });
});
