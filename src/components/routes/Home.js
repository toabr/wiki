import React, { Component, Fragment } from 'react'
import { nodeReq } from '../../js/api';
import ArticleList from '../article/ArticleList';
import { withContext } from '../context';


class Home extends Component {

    componentDidMount() {
        this.props.setHeadLine('');
        
        this.props.loading(true);
        nodeReq([], nodes => {
            this.props.updateNodes(nodes);
            this.props.loading(false);
        });
    }

    render() {
        return (
            <Fragment>
                {!this.props.isLoading && this.props.nodes.length > 0 &&
                    <ArticleList />
                }
            </Fragment>
        )
    }
}

export default withContext(Home);
