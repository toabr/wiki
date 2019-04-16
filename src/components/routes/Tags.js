import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import { getTags } from '../../js/api';
import { withPage } from '../Page';
import TagBtn from '../tag/TagBtn';

import PropTypes from 'prop-types';
import { withStyles, Button } from '@material-ui/core';


const styles = theme => ({
  wrapper: {
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
    getTags('', tags => {
      this.setState({ tags });
      this.props.ready(true);
    });
  }

  render() {
    const { classes } = this.props;
    const tags = this.state.tags.map(tag => (
      <TagBtn
        key={tag.tid}
        title={'#' + tag.title}
        tid={parseInt(tag.tid)}
      />
    ));

    return (
      <div className={classes.wrapper} >
          {tags}
      </div>
    );
  }
}

TagList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withPage(withStyles(styles)(TagList), 'Tags');
