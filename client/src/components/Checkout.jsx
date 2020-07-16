import React, { Component } from 'react';
import axios from 'axios';

import CartButton from './CartButton.jsx';
import StoresWithItem from './StoresWithItem.jsx';
import PlaceOutlined from '@material-ui/icons/PlaceOutlined';
import LocalShippingOutlined from '@material-ui/icons/LocalShippingOutlined';



class Checkout extends Component {
  constructor(props) {
      super(props);
      this.state = {
        id: (window.location.pathname).match(/\d+/),
        cart: [],
        item: {},
        itemCount: 0,
        otherStores: []
      };

      this.increaseItemCount = this.increaseItemCount.bind(this);
      this.decreaseItemCount = this.decreaseItemCount.bind(this);
      
  };

  componentDidMount() {
    this.getItemById()
  }

  increaseItemCount() {
    let newCount = this.state.itemCount + 1;
    this.setState({
      itemCount: newCount
    })
  }

  decreaseItemCount() {
    if(this.state.itemCount > 0) {
      let newCount = this.state.itemCount - 1;
      this.setState({
        itemCount: newCount
      })
    }
  }

  getItemById() {
    axios.get('/product/' + `${this.state.id}`)
      .then(response => {
        this.setState({ item: response.data[0] })
      })
      .catch((err) => {
        console.log(`error getting item data by Id on client`, err);
      })
  }

  render() {
      return (
        <div>
          <div className='itemPrice'>
            {'$' + parseFloat(this.state.item.price).toFixed(2)}
          </div>
          <div className='checkout_delivery'>
            <LocalShippingOutlined />
            <span>Free delivery by Mon, Apr 8</span>
          </div>
          <div className='checkout_shipping'>
            <PlaceOutlined />
            <span>Ship to <a href=''>98105</a></span>
          </div>
          <div className='soldByAndReturnDay'>
            <p>Sold by {this.state.item.store}</p>
            <a href=''>Free returns for {this.state.item.free_return_days} days</a>            
          </div>
          <CartButton data={this.state} addItem={this.increaseItemCount} subItem={this.decreaseItemCount}/>
          <StoresWithItem data={this.state.item}/>
          <div className='guidanceText'>
            <span>Google Express works with retailers to protect your order.</span>
            <a href="">Learn more</a>
          </div>
        </div>
        
      )
  };
};

export default Checkout;