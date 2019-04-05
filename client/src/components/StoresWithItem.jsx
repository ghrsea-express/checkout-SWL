import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = ({
  root: {
    width: '300px',
    margin: "0 0 0 10px",
    border: '1px lightgrey solid'
  },
});

class StoresWithItem extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getItemsStore()
  }

  

  getItemsStore() {
   
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <span className={classes.heading}>Other stores on Google Express</span>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className='test'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</div>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</span>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }

}

StoresWithItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StoresWithItem);