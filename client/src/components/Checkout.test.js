import React from 'react';
import { shallow } from 'enzyme';

import Checkout from './Checkout.jsx';


describe('Checkout', () => {
  
  it('Should render', () => {
    const wrapper = shallow(<Checkout />);
    expect(wrapper.children()).toHaveLength(7);
  });

  it('Should call on increaseItemCount & set itemCount from 0 to 1', () => {
    const wrapper = shallow(<Checkout />);
    wrapper.instance().increaseItemCount();
    wrapper.update();
    expect(wrapper.state().itemCount).toBe(1);
  });

  it('Should call on decreaseItemCount & set itemCount from 1 to 0', () => {
    const wrapper = shallow(<Checkout />);
    wrapper.setState({itemCount: 1})
    wrapper.instance().decreaseItemCount();
    wrapper.update();
    expect(wrapper.state().itemCount).toBe(0);
  });

})

//debug