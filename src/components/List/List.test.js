import React from 'react';
import {shallow} from 'enzyme';
import List from './List'
import {findByTestAttr} from './../../Util'

const setUp = (props = {}) => {
    const component  = shallow(<List {...props}/>)
    return component;
}

describe('List Component', () => {
    let component;
    beforeEach(() => {
        const props = {
            
        }
        component = setUp(props);
    });
    test('should render without errors', () => {
        const wrapper = findByTestAttr(component, 'listComponent')
        expect(wrapper.length).toBe(1);
    });
    // test('modalTitle should render without errors', () => {
    //     const wrapper = findByTestAttr(component, 'errorMessageComponent');
    //     expect(wrapper.text()).toEqual('this is message')
    // });
})