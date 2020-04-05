import React from 'react';
import {shallow} from 'enzyme';
import ErrorMessage from './ErrorMessage'
import {findByTestAttr} from './../../../Util'

const setUp = (props = {}) => {
    const component  = shallow(<ErrorMessage {...props}/>)
    return component;
}

describe('ErrorMessage Component', () => {
    let component;
    beforeEach(() => {
        const props = {
            message: 'this is message'
        }
        component = setUp(props);
    });
    test('errorMessageComponent should render without errors', () => {
        const wrapper = findByTestAttr(component, 'errorMessageComponent')
        expect(wrapper.length).toBe(1);
    });
    test('errorMessageComponent text should render without errors', () => {
        const wrapper = findByTestAttr(component, 'errorMessageComponent');
        expect(wrapper.text()).toEqual('this is message')
    });
})