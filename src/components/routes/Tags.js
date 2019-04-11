import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { withContext } from '../context';

import { termReq } from '../../js/api'
import { orderByTitle } from '../../js/helper';

import PropTypes from 'prop-types';
import { withStyles, Button, Paper, Typography } from '@material-ui/core';


const styles = theme => ({
  paper: {
    textAlign: 'center',
    padding: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit / 2,
  },
  headline: {
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit,
  },
});

class TagList extends Component {
  state = {
    tags: []
  };
  
  componentDidMount() {
    this.props.setHeadLine('Tags');

    this.props.loading(true);
    termReq('', tags => {
      this.setState({ tags });
      this.props.loading(false);
    });
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
          {'#' + tag.title}
        </Button>
      );
    });

    return (
      <Fragment>
        <Typography
          component="h2"
          variant="h4"
          color="textSecondary"
          className={classes.headline} >
          {this.props.headLine}
        </Typography>
        {!this.props.isLoading &&
          <Paper className={classes.paper}>
            {tags}
          </Paper>
        }
      </Fragment>
    );
  }
}

TagList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withContext(withStyles(styles)(TagList));
