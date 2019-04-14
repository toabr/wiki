import React, { Component, Fragment } from 'react'
import { nodeReq } from '../../js/api';
import ArticleList from '../article/ArticleList';
import { withContext } from '../context';
import { withPage } from '../Page';


class Likes extends Component {

    componentDidMount() {
        this.props.setHeadLine('Likes');

        if (this.props.likedArticles.length === 0) { // empty array => all nodes
            this.props.updateNodes([]);
            return;
        }
        
        this.props.updateNodes([]);
        this.props.loading(true);
        nodeReq(this.props.likedArticles, nodes => {
            this.props.updateNodes(nodes);
            this.props.loading(false);
        });
    }

    render() {
        return <ArticleList />
    }
}

export default withContext(withPage(Likes));