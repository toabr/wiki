import React from 'react';
import { withRouter, Link } from "react-router-dom";

import { toLocalDate, stripTags } from "./../../js/helper";
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

const Menu = withRouter(props => <ArticleMenu {...props} />);

const ArticleListItem = (props) => {

        const { classes, node } = props;

        const tags = stripTags(node.tags).map((tag, i, arr) => 
                <small key={i}> {'#' + tag.title} </small>
        );

        return (
            <ListItem button key={node.nid} component={Link} to={`/article/${node.nid}`} >
                <ListItemText
                    primary={node.title}
                    secondary={<span>{toLocalDate(node.changed)}<br />{tags}</span>}
                />
                <ListItemSecondaryAction>
                    <Menu nid={node.nid} />
                </ListItemSecondaryAction>
            </ListItem>
        );
}

ArticleListItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArticleListItem);