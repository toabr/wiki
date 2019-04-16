import React, { Component, Fragment } from 'react';
import { withRouter, Link } from "react-router-dom";

import { getArticle } from '../../js/api';
import { toLocalDate, stripTags } from "../../js/helper";
import { injectToc } from '../../js/toc';
import LikeBtn from '../article/LikeBtn';
import TagBtn from '../tag/TagBtn';

import PropTypes from 'prop-types';
import { withStyles, Typography, Button } from '@material-ui/core';
import { withPage } from '../Page';


class Article extends Component {
    state = {
        nid: parseInt(this.props.match.params.nid),
        article: {
            nid: null,
            title: '',
            body: '',
            tags: '',
        }
    }

    componentDidMount() {
        getArticle(this.state.nid, article => {
            article.body = injectToc(article.body);
            this.setState({ article }, () => {
                this.props.ready(true);
                this.props.addRecent(this.state.nid);
            });
        });
    }

    render() {
        const { nid, article } = this.state;

        const tags = stripTags(article.tags).map(tag => {
            return <TagBtn key={tag.tid} title={'#' + tag.title} tid={parseInt(tag.tid)} />
        });

        return (
            <Fragment>
                <div style={{ padding: 18 }}>
                    <LikeBtn nid={nid} />

                    <Typography component="h1" variant="h4" gutterBottom>
                        {article.title}
                    </Typography>

                    <Typography variant="body1" dangerouslySetInnerHTML={{ __html: article.body }} />

                    {tags}
                </div>
            </Fragment>
        );
    }
}


export default withPage(withRouter(Article));
