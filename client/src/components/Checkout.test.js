import React from 'react';
import { shallow } from 'enzyme';

import Checkout from './Checkout.jsx';

function setup() {
  const wrapper = shallow(<Checkout />);
  return { wrapper };
}

describe('Checkout', () => {
  it('Should render', () => {
    const { wrapper } = setup();
    expect(wrapper.children()).toHaveLength(7);
  });

  it('Should call on increaseItemCount & set itemCount  to 1', () => {
    const { wrapper } = setup();
    wrapper.instance().increaseItemCount();
    wrapper.update();
    expect(wrapper.state().itemCount).toBe(1);
  });
})

