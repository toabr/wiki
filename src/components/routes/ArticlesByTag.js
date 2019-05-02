import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import APIService from '../../js/APIService'
import ArticleList from '../article/ArticleList';
import { withPage } from '../Page';


class ArticlesByTag extends Component {
    state = {
        articles: [],
        loading: false,
    }

    componentDidMount() {
        const tid = this.props.match.params.tid;

        APIService.getTags(tid)
            .then(tags => {
                this.props.setHeadLine('#' + tags[0].title)
            })
            
        APIService.getArticlesByTag(tid)
            .then(articles => {
                this.setState({ articles }, () => {
                    this.props.ready(true);
                    this.props.addRecent(this.state.nid);
                });
            });
    }

    render() {
        return <ArticleList articles={this.state.articles} />
    }
}

export default withPage(withRouter(ArticlesByTag));
