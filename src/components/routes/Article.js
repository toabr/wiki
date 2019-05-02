import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";

import APIService from '../../js/APIService';
import { stripTags } from "../../js/helper";

import ArticleToc from '../article/ArticleToc';
import { generateToc } from '../../js/generateToc';

import LikeBtn from '../article/LikeBtn';
import TagBtn from '../tag/TagBtn';

// import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
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
        APIService.getArticle(this.state.nid)
            .then(data => {
                const article = {...this.state.article, ...data[0], ...generateToc(data[0].body)};

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
            <div style={{ padding: 18 }}>
                <LikeBtn nid={nid} />

                <Typography component="h1" variant="h4" gutterBottom>
                    {article.title}
                </Typography>

                {article.toc &&
                <ArticleToc toc={article.toc} />
                }

                <Typography
                variant="body1" 
                dangerouslySetInnerHTML={{ __html: article.body }} 
                />

                {tags}
            </div>
        );
    }
}


export default withPage(withRouter(Article));
