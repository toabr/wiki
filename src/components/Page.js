import React, { Component, Fragment } from 'react';
import { Paper, Typography, Zoom } from '@material-ui/core';
import { withContext } from './context';


export const withPage = WrappedComponent => {
    return withContext( class Page extends Component {
        state = {
            ready: true,
        }

        componentDidMount() {
            // this.props.setHeadLine('HOC');
            this.props.loading(true);
        }

        render() {
            console.log('HOC', this.props);
            const { isLoading, nodes, headLine } = this.props;

            return(
                <Fragment>

                    <Typography component="h2" variant="h4" color="textSecondary" >
                        {headLine}
                    </Typography>

                    <Zoom in={!isLoading}>
                        <Paper>
                            <WrappedComponent {...this.props} />
                        </Paper>
                    </Zoom>

                    {!isLoading && nodes.length === 0 &&
                        <Typography component="h1" variant="h4" color="textSecondary" gutterBottom>
                            no result ...
                        </Typography>
                    }

                </Fragment>
            );
        }
    });
}