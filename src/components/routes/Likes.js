import React, { Component, Fragment } from 'react'

import APIService from '../../js/APIService';
import { withPage } from '../Page';
import ArticleList from '../article/ArticleList';


class Likes extends Component {
    state = {
        articles: [],
    }

    componentDidMount() {
        const ids = this.props.likedArticles;

        if (ids.length === 0) {
            this.props.ready(false);
        } else {
            APIService.getArticles({ ids })
                .then(articles => {
                    this.setState({ articles });
                    this.props.ready(true);
                })
        }
    }

    componentDidUpdate(oldProps) {
        if (oldProps !== this.props) {
            setTimeout(() => { // wait for ArticleMenu to unmount
                const articles = this.state.articles.filter(a => { 
                    return this.props.likedArticles.indexOf(Number(a.nid)) !== -1
                });
                this.setState({ articles });
            }, 0);
        }
    }

    render() {
        return <ArticleList articles={this.state.articles} />
    }
}

export default withPage(Likes, 'Stars');