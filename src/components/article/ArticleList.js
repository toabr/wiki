import React, { Fragment } from 'react';
import { withContext } from '../context';

import ArticleListItem from './ArticleListItem';

import PropTypes from 'prop-types';
import {
    withStyles,
    Paper,
    List,
    Divider,
} from '@material-ui/core';


const styles = theme => ({
    paper: {
        color: theme.palette.text.secondary,
    },
});

const ArticleList = (props) => {
    const { classes } = props;

    const articles = props.nodes.map((node, i, arr) => (
        <React.Fragment key={i}>
            <ArticleListItem node={node} />
            {(i !== arr.length - 1) && <Divider /> }
        </React.Fragment>
        )
    );

    return (
        <Paper className={classes.paper}>
            <List> {articles} </List>
        </Paper>
    );
}

ArticleList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withContext(withStyles(styles)(ArticleList));
