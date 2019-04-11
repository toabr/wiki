import React, { Component, Fragment } from 'react'

import { searchReq } from '../../js/api';
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

class SearchResult extends Component {

    componentDidMount() {
        this.search();
    }

    componentDidUpdate(oldProps) {
        const newProps = this.props;
        if (oldProps.search !== newProps.search) {
            // this.setState({ open: false })
            this.search();
            console.log('new props');
        }
    }
    
    search = () => {
        this.props.setHeadLine(`search: ${this.props.search}`);
        if (this.props.search === '') return; // block empty search

        this.props.loading(true);
        searchReq(this.props.search, nodes => {
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
                {!this.props.isLoading && (this.props.nodes.length > 0) &&
                    <ArticleList />
                }
            </Fragment>
        )
    }
}

SearchResult.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withContext(withStyles(styles)(SearchResult));
