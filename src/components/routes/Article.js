import React, { Component, Fragment } from 'react';
import { withRouter, Link } from "react-router-dom";
import { withContext } from '../context';

import { nodeReq } from '../../js/api';
import { toLocalDate, stripTags } from "../../js/helper";
import { injectToc } from '../../js/toc';
import LikeBtn from '../article/LikeBtn';

import PropTypes from 'prop-types';
import { withStyles, Typography, Paper, Button, Fab } from '@material-ui/core';


const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        position: 'relative',
    },
    button: {
        margin: theme.spacing.unit / 2,
    },
});

const Like = withRouter(props => <LikeBtn {...props} />);

class Article extends Component {

    componentDidMount() {
        this.props.setHeadLine('');

        this.props.updateNodes([]);
        this.props.loading(true);
        nodeReq([this.props.match.params.nid], nodes => {
            this.props.updateNodes(nodes);
            this.props.loading(false);
            this.props.addRecent(nodes[0].nid);
        });
    }

    render() {
        const { classes } = this.props;
        const node = this.props.nodes[0];
        // console.log(node);

        const tags = (node && node.tags) ? stripTags(node.tags).map(tag => {
            return (
                <Button
                    key={tag.tid}
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    component={Link}
                    to={`/tag/${tag.tid}`}>
                    {'#' + tag.title}
                </Button>
            );
        }) : null;

        return (
            <Fragment>
                {node &&
                    <Paper className={classes.paper}>
                        <Like nid={node.nid} />

                        <Typography component="h1" variant="h4" className={classes.heading} gutterBottom>
                            {node.title}
                        </Typography>
                        <Typography variant="body1" dangerouslySetInnerHTML={{
                            __html: injectToc(node.body)
                        }} />
                        {tags}
                    </Paper>
                }
                {!this.props.isLoading && !node &&
                    <Typography component="h1" variant="h4" color="textSecondary" gutterBottom>
                        No Result
                    </Typography>
                }
            </Fragment>
        );
    }
}

Article.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withContext(withStyles(styles)(Article));
