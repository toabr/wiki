import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";

import { getArticlesByTag, getTags } from '../../js/api'
import ArticleList from '../article/ArticleList';
import { withPage } from '../Page';


class ArticlesByTag extends Component {
    state = {
        articles: [],
        loading: false,
    }

    componentDidMount() {
        const tid = this.props.match.params.tid;

        getTags(tid, tag => this.props.setHeadLine('#' + tag[0].title) );

        getArticlesByTag(tid, articles => {
            this.setState({ articles });
            this.props.ready(true);
        });
    }

    render() {
        return <ArticleList articles={this.state.articles} />
    }
}

export default withPage(withRouter(ArticlesByTag));
