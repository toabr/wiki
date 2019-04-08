import React, { Component, Fragment } from 'react';

import { nodeReq, termReq } from '../api'
import ArticleListItem from '../article/ArticleListItem';

import PropTypes from 'prop-types';
import {
    withStyles,
    Typography,
    Paper,
    List,
    Divider,
} from '@material-ui/core';


const styles = theme => ({
    paper: {
        color: theme.palette.text.secondary,
    },
    heading: {
        paddingTop: theme.spacing.unit,
        paddingLeft: theme.spacing.unit,
    }
});

class Tag extends Component {
    state = {
        title: '',
        nodes: [],
        statusOk: false,
    };


    componentDidMount() {
        const tid = this.props.match.params.tid;

        termReq(tid, term => {
            const title = term.name[0].value;
            this.setState({ title });
        });

        nodeReq({
            endpoint: 'https://local.wiki/api/tag/',
            ids: [tid],
        }, nodes => {
            this.setState({ nodes });
        });

    }


    render() {
        const { classes } = this.props;
        const { tagName } = this.props;
        const loaded = (this.state.nodes.length > 0) ? true : false;

        const nodes = (loaded && this.state.nodes.map((node, i, arr) => (
            <React.Fragment key={i}>
                <ArticleListItem node={node} />
                {(i !== arr.length - 1) ? <Divider /> : ''}
            </React.Fragment>
        )));

        return (
            <Paper className={classes.paper}>
            {loaded &&
                <Fragment>
                    <Typography component="h1" variant="h4" className={classes.heading}>
                        # {this.state.title}
                    </Typography>
                    <List component="nav">
                        {nodes}
                    </List>
                </Fragment>
            }
            </Paper>
        );
    }
}

Tag.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tag);
