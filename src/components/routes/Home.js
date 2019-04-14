import React, { Component, Fragment } from 'react';

import { withPage } from '../Page';
import { getArticles } from '../../js/api';
import ArticleList from '../article/ArticleList';

import PropTypes from 'prop-types';
import { withStyles, Button, CircularProgress } from '@material-ui/core';

const styles = theme => ({
    button: {
        width: '100%',
    },
    progress: {
        display: 'flex',
        justifyContent: 'center',
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
        this.getPage(() => {
            this.props.ready(true);
        });
    }

    getPage = (cb) => {
        getArticles({ ids: [], page: this.state.page }, (fetchedArticles) => {
            if (fetchedArticles.length > 0) {
                this.pushArticles(fetchedArticles);
            } else {
                this.setState({ noMoreResults: true });
            }
            cb();
        });
    }

    pushArticles = (newArticles) => {
        let articles = this.state.articles;
        for (let i = 0; i < newArticles.length; i++) {
            const article = newArticles[i];
            articles.push(article);
        }
        this.setState({ articles });
    }

    nextPage = () => {
        if (!this.state.noMoreResults) {
            this.setState({ loading: true });

            this.setState({ page: this.state.page + 1 }, () => {
                this.getPage(() => {
                    this.setState({ loading: false });
                });
            });
        }
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
                {!this.state.noMoreResults &&
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        onClick={this.nextPage} >
                        More
                    </Button>
                }
            </Fragment>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withPage(withStyles(styles)(Home));