import React from 'react';
import { mount } from 'enzyme';

import StoresWithItem from '../src/components/StoresWithItem.jsx';

describe('StoresWithItem', () => {

  it('Should render 1 children', () => {
    const wrapper = mount(<StoresWithItem />);
    expect(wrapper.children()).toHaveLength(1)
  });

})  