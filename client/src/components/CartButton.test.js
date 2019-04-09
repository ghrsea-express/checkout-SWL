import React from 'react';
import { mount } from 'enzyme';

import CartButton from './CartButton.jsx';

describe('CartButton', () => {

  it('Should render 1 children when itemCount is 0', () => {
    const data = {itemCount: 0};
    const wrapper = mount(<CartButton data={data}/>);
    wrapper.update();
    expect(wrapper.children()).toHaveLength(1);
  });

  it('Should render 1 children when itemCount is 1', () => {
    const data = {itemCount: 1};
    const wrapper = mount(<CartButton data={data}/>);
    wrapper.update();
    expect(wrapper.children()).toHaveLength(1);
  });

})  