import React, { Component, Fragment } from 'react';
import { withContext } from '../context';

import { tagReq, termReq } from '../../js/api'
import ArticleList from '../article/ArticleList';
import { withPage } from '../Page';


class Tag extends Component {

    componentDidMount() {
        const tid = this.props.match.params.tid;

        this.props.setHeadLine('');
        termReq(tid, term => this.props.setHeadLine('#' + term[0].title) );

        this.props.loading(true);
        tagReq(tid, nodes => {
            this.props.updateNodes(nodes);
            this.props.loading(false);
        });
    }

    render() {
        return <ArticleList />
    }
}

export default withContext(withPage(Tag));
