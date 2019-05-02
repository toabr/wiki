import React, { Component, Fragment } from 'react';

import { withPage } from '../Page';
import APIService from '../../js/APIService';
import ArticleList from '../article/ArticleList';

import PropTypes from 'prop-types';
import { withStyles, Button, CircularProgress } from '@material-ui/core';

const styles = theme => ({
    btnWrap: {
        padding: theme.spacing.unit,
    },
    button: {
        width: '100%',
    },
    progress: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing.unit,
    },
});

class Home extends Component {
    state = {
        articles: [],
        page: 0,
        loading: false,
        noMoreResults: false,
    }

    componentDidMount() {
        const reqObj = { ids: [], page: this.state }
        APIService.getArticles(reqObj)
            .then(articles => {
                this.setState({ articles });
                this.props.ready(true);
            })
    }

    nextPage = () => {
        this.setState({ loading: true });

        const reqObj = { ids: [], page: this.state.page + 1 }
        APIService.getArticles(reqObj)
            .then(newArticles => {
                const articles = [...this.state.articles, ...newArticles];
                this.setState({ articles });
                this.setState({ page: reqObj.page });

                if (newArticles.length === 0) this.setState({ noMoreResults: true });
                
                this.setState({ loading: false });
            })
    }
    
    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <ArticleList articles={this.state.articles} />
                {this.state.loading &&
                    <div className={classes.progress}>
                        <CircularProgress color="secondary" />
                    </div>
                }
                {!this.state.loading && !this.state.noMoreResults &&
                    <div className={classes.btnWrap}>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            onClick={this.nextPage} >
                            More
                        </Button>
                    </div>
                }
            </Fragment>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withPage(withStyles(styles)(Home));