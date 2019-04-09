import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { AddShoppingCart } from '@material-ui/icons';
import  { AddCircleOutline }  from '@material-ui/icons';
import { RemoveCircleOutline } from '@material-ui/icons';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: '300px',
    margin: '10px 0px 10px 10px',
    padding: '10px 0px 10px 0px'
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
          <Button id="btn-add-0" variant="contained" color="primary" className={classes.button} onClick={this.props.addItem}>
            <AddShoppingCart className='cartBasketIcon' /> 
            <span>Add to cart</span>
          </Button>
        </div>
      );    
    } else {
      return (
        <div>
          <Button variant="outlined" color="primary" className={classes.button}>
            <RemoveCircleOutline id="btn-add-1" className='cartAddIcon' onClick={this.props.subItem} />
            <span>{`${this.props.data.itemCount} in cart`}</span>
            <AddCircleOutline className='cartSubIcon' onClick={this.props.addItem} />
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