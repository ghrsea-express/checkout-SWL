import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        items: []
      };
  };

  componentDidMount() {
    this.getProductItems()
  }

  getProductItems() {
    return axios.get('/product_items')
      .then(response => {
        this.setState({ items: response.data })
      })
      .catch()
  }

  render() {
      return <div>HELLO WORLD! - I am running!</div>
  };
};

export default App;