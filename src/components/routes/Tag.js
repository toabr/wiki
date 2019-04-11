import React, { Component, Fragment } from 'react';
import { withContext } from '../context';

import { tagReq, termReq } from '../../js/api'
import ArticleList from '../article/ArticleList';

import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';


const styles = theme => ({
    headline: {
        marginBottom: theme.spacing.unit,
        marginTop: theme.spacing.unit,
    }
});

class Tag extends Component {

    componentDidMount() {
        const tid = this.props.match.params.tid;

        termReq(tid, term => this.props.setHeadLine('#' + term[0].title) );

        this.props.loading(true);
        tagReq(tid, nodes => {
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
                {!this.props.isLoading &&
                    <ArticleList />
                }
            </Fragment>
        );
    }
}

Tag.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withContext(withStyles(styles)(Tag));