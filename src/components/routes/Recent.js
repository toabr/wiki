import React, { Component } from 'react'

import { withPage } from '../Page';
import { getArticles } from '../../js/api';
import ArticleList from '../article/ArticleList';


class Recent extends Component {
    state = {
        articles: [],
    }

    componentDidMount() {
        if (this.props.recentArticles.length === 0) {
            this.props.ready(false);
            return;
        }
        
        getArticles({ids: this.props.recentArticles}, articles => {
            this.setState({ articles });
            this.props.ready(true);
        });
    }

    render() {
        return <ArticleList articles={this.state.articles} />
    }
}

export default withPage(Recent, 'history');