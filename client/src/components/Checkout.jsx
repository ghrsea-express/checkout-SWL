import React, { Component } from 'react';
import axios from 'axios';

import CartButton from './CartButton.jsx';

class Checkout extends Component {
  constructor(props) {
      super(props);
      this.state = {
        item_id: 100,
        cart: [],
        item: {},
        itemCount: 0,
      };

      this.increaseItemCount = this.increaseItemCount.bind(this);
      this.decreaseItemCount = this.decreaseItemCount.bind(this);
  };

  componentDidMount() {
    this.getItemById()
  }

  increaseItemCount() {
    console.log('testAdd')
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

  // queries db for item by id and renders data
  getItemById() {
    return axios.get('/product?id=' + `${this.state.item_id}`)
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
          <p>{this.state.item.price}</p>
          <p>Free delivery by Mon, Apr 8</p>
          <p>Ship to [User Zip Code]</p>
          <p>Sold by {this.state.item.store}</p>
          <p>Free returns for {this.state.item.free_return_days} days</p>
          <CartButton data={this.state} addItem={this.increaseItemCount} subItem={this.decreaseItemCount}/>
        </div>
      )
  };
};

export default Checkout;