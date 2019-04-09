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

  it('Should render 1 children when itemCount is 1', () => {
    const data = {
      item_id: 1,
      cart: [],
      item: {},
      itemCount: 0,
      otherStores: []
    };
    
    const wrapper = mount(<CartButton data={data}/>);
    expect(wrapper.props().data).toHaveProperty('item_id');
    expect(wrapper.props().data).toHaveProperty('cart');
    expect(wrapper.props().data).toHaveProperty('item');
    expect(wrapper.props().data).toHaveProperty('itemCount');
    expect(wrapper.props().data).toHaveProperty('otherStores');
  });

})    