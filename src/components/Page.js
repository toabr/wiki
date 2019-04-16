import React, { Component, Fragment } from 'react';
import { Paper, Typography, Zoom } from '@material-ui/core';
import { withContext } from './context';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';


const styles = theme => ({
    wrapper: {
        marginTop: 58,
        [theme.breakpoints.up('sm')]: {
            marginTop: 80,
        },
    }
});

export const withPage = (WrappedComponent, headLine, isReady) => {
    return withContext(withStyles(styles)(class Page extends Component {
        constructor(props) {
            super();
            this.state = {
                isReady: false,
                headLine: '',
            }
            props.app.loading(true);
        }

        static propTypes = {
            classes: PropTypes.object.isRequired,
        };

        componentDidMount() {
            if (isReady) this.ready(true);
            if (headLine) this.setHeadLine(headLine);
        }

        ready = (isReady) => {
            this.setState({ isReady });
            this.props.app.loading(false);
        }

        setHeadLine = (headLine) => {
            this.setState({ headLine });
        }

        render() {
            const { classes } = this.props;
            return (
                <div className={classes.wrapper}>

                    <Typography component="h2" variant="h4" color="textSecondary" gutterBottom >
                        {this.state.headLine}
                    </Typography>

                    <Zoom in={this.state.isReady} >
                        <Paper className={classes.paper} >
                            <WrappedComponent
                                ready={this.ready}
                                setHeadLine={this.setHeadLine}
                                likedArticles={this.props.app.likedArticles}
                                recentArticles={this.props.app.recentArticles}
                                searchTerm={this.props.app.searchTerm}
                                addRecent={this.props.app.addRecent}
                            />
                        </Paper>
                    </Zoom>
                </div>
            );
        }
    }));
}
