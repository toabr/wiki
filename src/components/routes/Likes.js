import React, { Component, Fragment } from 'react'
import { getArticles } from '../../js/api';
import ArticleList from '../article/ArticleList';
import { withPage } from '../Page';


class Likes extends Component {
    state = {
        articles: [],
        loading: false,
    }

    componentDidMount() {
        this.props.setHeadLine('Likes');

        if (this.props.likedArticles.length === 0) return;
        
        getArticles({ids: this.props.likedArticles}, articles => {
            this.setState({ articles });
            this.props.ready(true);
        });
    }

    render() {
        return <ArticleList articles={this.state.articles} />
    }
}

export default withPage(Likes);