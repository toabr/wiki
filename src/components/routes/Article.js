import React, { Component, Fragment } from 'react';
import { withRouter, Link } from "react-router-dom";

import { getArticle } from '../../js/api';
import { toLocalDate, stripTags } from "../../js/helper";
import { injectToc } from '../../js/toc';
import LikeBtn from '../article/LikeBtn';

import PropTypes from 'prop-types';
import { withStyles, Typography, Button } from '@material-ui/core';
import { withPage } from '../Page';


const Like = withRouter(props => <LikeBtn {...props} />);

class Article extends Component {
    state = {
        article: {
            nid: null,
            title: '',
            body: '',
            tags: '',
        }
    }

    componentDidMount() {

        getArticle(this.props.match.params.nid, article => {
            article.body = injectToc(article.body);
            this.setState({ article }, () => {
                this.props.ready(true);
                this.props.addRecent(article.nid);
            });
        });
    }

    render() {
        const article = this.state.article;

        const tags = stripTags(article.tags).map(tag => {
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
        });

        return (
            <Fragment>
                <div style={{ padding: 18 }}>
                    <LikeBtn nid={article.nid} />

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
