import React, { Component, Fragment } from 'react'

import { withPage } from '../Page';
import { getArticles } from '../../js/api';
import ArticleList from '../article/ArticleList';


class Likes extends Component {
    state = {
        likedArticles: [],
        articles: [],
    }

    componentDidMount() {
        // transformation to cut reference
        this.setLikedArticles(this.props.likedArticles, () => {
            // api request
            const { likedArticles } = this.state;
            if (likedArticles.length === 0) {
                this.props.ready(false);
            } else {
                getArticles({ ids: likedArticles }, articles => {
                    this.setState({ articles });
                    this.props.ready(true);
                });
            }
        });
    }
    
    componentDidUpdate() {
        const newList = this.props.likedArticles;
        const oldList = this.state.likedArticles;
        
        // remove unliked article from list
        if (newList.length !== oldList.length) {
            // the new array contains one item less then the old array
            const articles = this.state.articles.filter(article => (newList.indexOf(Number(article.nid)) !== -1));
            console.log('remove %i from %o', oldList.filter(id => (newList.indexOf(Number(id)) === -1))[0], oldList);

            this.setState({ articles });
            this.setLikedArticles(newList);

            if (newList.length === 0) {
                this.props.ready(false);
            }
        }
    }
    
    setLikedArticles(articles, cb) {
        const likedArticles = JSON.parse(JSON.stringify(articles));
        this.setState({ likedArticles }, cb);
    }

    render() {
        return <ArticleList articles={this.state.articles} />
    }
}

export default withPage(Likes, 'Likes');