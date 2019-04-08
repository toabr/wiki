import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import { nodeReq } from '../api';
import { toLocalDate, stripTags } from "./../helper";

import PropTypes from 'prop-types';
import { withStyles, Typography, Paper, Button } from '@material-ui/core';


const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        // color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing.unit / 2,
    },
});

class Article extends Component {
    state = {
        node: [],
        statusOk: false,
    };

    componentDidMount() {
        nodeReq({
            endpoint: 'https://local.wiki/api/articles/',
            ids: [this.props.match.params.nid],
        }, node => {
            this.setState({ node });
        });
    }
    
    render() {
        const { classes } = this.props;
        const node = this.state.node[0];
        console.log(node);
        
        const tags = (node && node.tags) ? stripTags(node.tags).map(tag => {
            return (
                <Button
                    key={tag.tid}
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    component={Link}
                    to={`/tag/${tag.tid}`}>
                    {tag.title}
                </Button>
            );
        }) : null;

        return (
            <Paper className={classes.paper}>
                {node &&
                <Fragment>
                    <Typography component="h1" variant="h4" className={classes.heading} gutterBottom>
                        {node.title}
                    </Typography>
                    <Typography variant="body1" dangerouslySetInnerHTML={{ __html: node.body }} />
                    {tags}
                </Fragment>
                }
            </Paper>
        );
    }
}

Article.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Article);
