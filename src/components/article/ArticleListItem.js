import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { toLocalDate, stripTags } from "./../helper";
import ArticleMenu from './ArticleMenu';

import PropTypes from 'prop-types';

import {
    withStyles,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
} from '@material-ui/core';


const styles = theme => ({
});


class ArticleListItem extends Component {
    state = {
    }

    render() {
        const { classes, node } = this.props;

        const tags = stripTags(node.tags).map((tag, i, arr) => {
            return (
                <small key={i}>
                    {tag.title}
                    {(i === arr.length - 1) ? '' : ', '}
                </small>
            );
        });

        return (
            <ListItem button key={node.nid} component={Link} to={`/article/${node.nid}`} >
                <ListItemText
                    primary={node.title}
                    secondary={<span>{toLocalDate(node.changed)}<br />{tags}</span>}
                />
                <ListItemSecondaryAction>
                    <ArticleMenu nid={node.nid} />
                </ListItemSecondaryAction>
            </ListItem>
        );
    }

}

ArticleListItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArticleListItem);