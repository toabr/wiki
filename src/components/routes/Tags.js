import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { orderByTitle } from '../helper';

import PropTypes from 'prop-types';
import { withStyles, Button, Paper } from '@material-ui/core';


const styles = theme => ({
  paper: {
    textAlign: 'center',
    padding: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit / 2,
  },
});

class TagList extends Component {
  state = {
    tags: []
  };
  
  componentDidMount() {
    fetch('https://local.wiki/api/tag/tags')
    .then(res => res.json())
    .then(tags => {
      this.setState({tags});
      // console.log(tags);
    })
    .catch(err => console.log('ERROR', err));
  }

  render() {
    const { classes } = this.props;

    const tags = orderByTitle(this.state.tags).map(tag => {
      return (
        <Button 
          key={tag.tid}
          variant="contained"
          color="secondary"
          className={classes.button}
          component={Link}
          to={`/tag/${tag.tid}`}>
          {tag.title}
        </Button>
      );
    });

    return (
      <Paper className={classes.paper}>
        {tags}
      </Paper>
    );
  }
}

TagList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TagList);
