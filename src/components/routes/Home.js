import React, { Component, Fragment } from 'react'
import { nodeReq } from '../api';
import ArticleList from '../article/ArticleList';


export default class Home extends Component {
    state = {
        nodes: [],
    }

    componentDidMount() {
        nodeReq({
            endpoint: this.props.endpoint,
            ids: this.props.nids,
        }, nodes => {
            this.setState({ nodes });
        });
    }

    render() {
        return (
            <ArticleList nodes={this.state.nodes} />
        )
    }
}
