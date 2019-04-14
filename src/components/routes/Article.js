import React, { Component, Fragment } from 'react';
import { withRouter, Link } from "react-router-dom";
import { withContext } from '../context';

import { nodeReq } from '../../js/api';
import { toLocalDate, stripTags } from "../../js/helper";
import { injectToc } from '../../js/toc';
import LikeBtn from '../article/LikeBtn';

import PropTypes from 'prop-types';
import { withStyles, Typography, Button } from '@material-ui/core';
import { withPage } from '../Page';


const Like = withRouter(props => <LikeBtn {...props} />);

class Article extends Component {

    componentDidMount() {

        this.props.setHeadLine('');
        this.props.updateNodes([]);

        nodeReq([this.props.match.params.nid], nodes => {

            const node = nodes[0];
            node.body = injectToc(node.body);

            this.props.updateNodes(nodes);
            this.props.addRecent(node.nid);

            this.props.loading(false);
        });
    }

    render() {
        console.log('render');
        const node = this.props.nodes[0];

        const tags = (node && node.tags) ? stripTags(node.tags).map(tag => {
            return (
                <Button
                    key={tag.tid}
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to={`/tag/${tag.tid}`}>
                    {'#' + tag.title}
                </Button>
            );
        }) : null;

        return (
            <Fragment>
                {node &&
                    <div style={{ padding: 18 }}>
                        <Like nid={node.nid} />

                        <Typography component="h1" variant="h4" gutterBottom>
                            {node.title}
                        </Typography>

                        <Typography variant="body1" dangerouslySetInnerHTML={{ __html: node.body }} />

                        {tags}
                    </div>
                }
            </Fragment>
        );
    }
}


export default withContext(withPage(Article));
