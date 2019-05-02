import React, { Component } from 'react'

import APIService from '../../js/APIService';
import { withPage } from '../Page';
import ArticleList from '../article/ArticleList';


class Recent extends Component {
    state = {
        articles: [],
    }

    componentDidMount() {
        const ids = this.props.recentArticles;

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

    render() {
        return <ArticleList articles={this.state.articles} />
    }
}

export default withPage(Recent, 'History');