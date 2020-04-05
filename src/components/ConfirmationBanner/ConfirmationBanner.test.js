import React from "react";
import { shallow } from "enzyme";
import ConfirmationBanner from "./ConfirmationBanner";
import { findByTestAttr } from "./../../Util";

const setUp = (props = {}) => {
  const component = shallow(<ConfirmationBanner {...props} />);
  return component;
};

describe("ConfirmationBanner Component", () => {
  describe("with no props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    test("confirmationComponent should render without errors", () => {
      const wrapper = findByTestAttr(component, "confirmationComponent");
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
    test("confirmationBody should render without errors", () => {
      const wrapper = findByTestAttr(component, "confirmationBody");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("with props", () => {
    let component;
    beforeEach(() => {
      const props = {
        bodyText: "this is body text",
        primaryButtonText: "this is primary button text",
        secondaryButtonText: "this is secondary button text",
        confirmationTitle: "this is confirmation title",
      };
      component = setUp(props);
    });

    test("confirmationBody should render without errors", () => {
      const wrapper = findByTestAttr(component, "confirmationBody");
      expect(wrapper.text()).toEqual("this is body text");
    });
    test("primaryButton should render without errors", () => {
      const wrapper = findByTestAttr(component, "primaryButton");
      expect(wrapper.text()).toEqual("this is primary button text");
    });
    test("secondaryButton should render without errors", () => {
      const wrapper = findByTestAttr(component, "secondaryButton");
      expect(wrapper.text()).toEqual("this is secondary button text");
    });
    test("confirmationTitle should render without errors", () => {
      const wrapper = findByTestAttr(component, "confirmationTitle");
      expect(wrapper.text()).toEqual("this is confirmation title");
    });
  });

})
 