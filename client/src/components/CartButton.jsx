import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { AddShoppingCart } from '@material-ui/icons';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: '300px',
  },
  input: {
    display: 'none',
  },
});


class CartButton extends Component {  
  
  render() {
    const { classes } = this.props;

    if(this.props.data.itemCount === 0) {
      return (
        <div>
          <Button variant="contained" color="primary" className={classes.button} onClick={this.props.addItem}>
            <AddShoppingCart /> 
            <span>Add to cart</span>
          </Button>
        </div>
      );    
    } else {
      return (
        <div>
          <Button variant="outlined" color="primary" className={classes.button}>
            <span className='cartAddIcon' onClick={this.props.addItem}>Add </span>
            <span>{`${this.props.data.itemCount} in cart`}</span>
            <span className='cartSubIcon' onClick={this.props.subItem}>Subtract</span>
          </Button>
        </div>
      );    
    }
  }

}

CartButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CartButton);