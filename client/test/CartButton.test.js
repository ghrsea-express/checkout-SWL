import React from 'react';
import { shallow, mount } from 'enzyme';

import CartButton from '../src/components/CartButton.jsx';

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

  it('Should check if props have correct properties', () => {
    const data = {
      id: 1,
      cart: [],
      item: {},
      itemCount: 0,
      otherStores: []
    };
    
    const wrapper = shallow(<CartButton data={data}/>);
    expect(wrapper.props().data).toHaveProperty('id');
    expect(wrapper.props().data).toHaveProperty('cart');
    expect(wrapper.props().data).toHaveProperty('item');
    expect(wrapper.props().data).toHaveProperty('itemCount');
    expect(wrapper.props().data).toHaveProperty('otherStores');
  });

})    