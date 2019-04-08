import React, { Component, Fragment } from 'react'
import { nodeReq } from '../api';
import ArticleList from '../article/ArticleList';

export default class Liked extends Component {
    state = {
        nodes: [],
    }

    componentDidMount() {
        if(this.props.nids.length === 0) return; // empty array => all nodes

        nodeReq({
            endpoint: this.props.endpoint,
            ids: this.props.nids,
        }, nodes => this.setState({ nodes }) );
    }

    render() {
        const loaded = (this.state.nodes.length > 0)? true: false;
        return (
            <Fragment>
            {loaded && 
                <ArticleList nodes={this.state.nodes} />
            }
            </Fragment>
        );
    }
}
