import React, { Fragment } from 'react';

import ArticleListItem from './ArticleListItem';

import PropTypes from 'prop-types';
import {
    withStyles,
    Paper,
    List,
    Divider,
} from '@material-ui/core';


const styles = theme => ({
});

const ArticleList = (props) => {
    const { classes, nodes } = props;

    const article = nodes.map((node, i) => (
        <Fragment key={i}>
            <ArticleListItem node={node} />
            <Divider />
        </Fragment>
    ));

    return (
        <Paper>
            <List component="nav">
                {article}
            </List>
        </Paper>
    );
}

ArticleList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArticleList);
