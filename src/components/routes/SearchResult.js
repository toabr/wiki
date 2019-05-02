import React, { Component } from 'react'

import { withPage } from '../Page';
import APIService from '../../js/APIService';
import ArticleList from '../article/ArticleList';



class SearchResult extends Component {
    state = {
        articles: []
    }

    componentDidMount() {
        this.search();
    }

    componentDidUpdate(oldProps) {
        const newProps = this.props;
        if (oldProps.searchTerm !== newProps.searchTerm) {
            this.props.ready(false);
            this.search();
        }
    }
    
    search = () => {
        if (this.props.searchTerm === '') {
            this.props.ready(false);
        } else {
            APIService.articlesQuery(this.props.searchTerm)
                .then(articles => {
                    this.setState({ articles });
                    if (articles.length === 0) {
                        this.props.ready(false);
                        this.props.setHeadLine(`no results "${this.props.searchTerm}"`);
                    } else {
                        this.props.ready(true);
                        this.props.setHeadLine('search results');
                    }
                });
        }
    }

    render() {
        return <ArticleList articles={this.state.articles} />
    }
}

export default withPage(SearchResult);
