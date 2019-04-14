import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import { toLocalDate, stripTags } from "./../../js/helper";
import ArticleMenu from './ArticleMenu';
import { List, ListItem, ListItemText, ListItemSecondaryAction, Divider, } from '@material-ui/core';

const ArticleList = (props) => {

    const articles = props.articles.map((article, i, arr) => {
        const tags = stripTags(article.tags).map((tag, i, arr) =>
            <small key={i}> {'#' + tag.title} </small>
        );

        return(
            <Fragment key={article.nid}>
                <ListItem button component={Link} to={`/article/${article.nid}`} >
                    <ListItemText
                        primary={article.title}
                        secondary={<span>{toLocalDate(article.changed)}<br />{tags}</span>}
                    />
                    <ListItemSecondaryAction>
                        <ArticleMenu nid={article.nid} />
                    </ListItemSecondaryAction>
                </ListItem>
                {(i !== arr.length - 1) && <Divider />}
            </Fragment>
        );
    });

    return (
        <List>
            {articles}
        </List>
    );
}

export default ArticleList;
