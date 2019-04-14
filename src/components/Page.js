import React, { Component, Fragment } from 'react';
import { Paper, Typography, Zoom } from '@material-ui/core';
import { withContext } from './context';


export const withPage = WrappedComponent => {
    return withContext( class Page extends Component {
        state = {
            isReady: false,
            headLine: '',
        }

        componentDidMount() {
            this.props.app.loading(true);
        }

        ready = (isReady) => {
            this.setState({ isReady });
            this.props.app.loading(false);
        }

        setHeadLine = (headLine) => {
            this.setState({ headLine });
        }

        render() {
            return(
                <Fragment>

                    <Typography component="h2" variant="h4" color="textSecondary" >
                        {this.state.headLine}
                    </Typography>

                    <Zoom in={this.state.isReady}>
                        <Paper>
                            <WrappedComponent 
                                ready={this.ready} 
                                setHeadLine={this.setHeadLine}
                                likedArticles={this.props.app.likedArticles}
                                addRecent={this.props.app.addRecent}
                            />
                        </Paper>
                    </Zoom>

                </Fragment>
            );
        }
    });
}