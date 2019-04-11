import React, { Component, Fragment } from 'react'
import { nodeReq } from '../../js/api';
import ArticleList from '../article/ArticleList';
import { withContext } from '../context';

import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

const styles = theme => ({
    headline: {
        marginBottom: theme.spacing.unit,
        marginTop: theme.spacing.unit,
    }
});

class Likes extends Component {

    componentDidMount() {
        this.props.setHeadLine('Likes');

        if (this.props.likedArticles.length === 0) { // empty array => all nodes
            this.props.updateNodes([]);
            return;
        }
        
        this.props.updateNodes([]);
        this.props.loading(true);
        nodeReq(this.props.likedArticles, nodes => {
            this.props.updateNodes(nodes);
            this.props.loading(false);
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Typography
                    component="h2"
                    variant="h4"
                    color="textSecondary"
                    className={classes.headline} >
                    {this.props.headLine}
                </Typography>
                {!this.props.isLoading && this.props.nodes.length > 0 &&
                    <ArticleList />
                }
            </Fragment>
        );
    }
}

Likes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withContext(withStyles(styles)(Likes));