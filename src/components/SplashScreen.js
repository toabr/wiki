import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { loadImage } from '../js/api';
import logo from '../img/logo.jpg';

import { withStyles, Dialog, DialogContent, Slide, LinearProgress, Zoom } from '@material-ui/core';


const styles = theme => ({
    paper: {
        textAlign: 'center',
        padding: theme.spacing.unit,
        background: theme.palette.primary.main,
    },
    logo: {
        maxWidth: '100%',
        [theme.breakpoints.up('sm')]: {
            maxHeight: '600px',
        },
        [theme.breakpoints.up('lg')]: {
            maxHeight: '700px',
        },
    },
    progress: {
        // margin: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit / 2,
    },
});


class SplashScreen extends Component {
    state = {
        open: true,
        canDie: false,
        logoReady: false,
    }

    componentDidMount() {
        const minLiveTime = (this.props.minLiveTime) ? this.props.minLiveTime : 800;
        // console.log('Splash minLiveTime', minLiveTime);

        loadImage(logo)
            .then(img => {
                console.log('logo ready', img);
                this.setState({ logoReady: true });
                setTimeout(() => {
                    this.setState({ canDie: true });
                }, minLiveTime);
            });
    }

    componentDidUpdate(oldProps) {
        const newProps = this.props
        if (oldProps.open !== newProps.open) {
            this.setState({ open: false })
            // console.log('new props');
        }
    }

    Transition = props => <Slide direction="up" {...props} />;

    
    render() {
        const { classes } = this.props;
        const open = (!this.state.open && this.state.canDie) ? false : true;

        return (
            <Dialog
                fullScreen
                open={open}
                TransitionComponent={this.Transition}
                transitionDuration={{ enter: 0, exit: 250 }}>

                <DialogContent className={classes.paper} >
                    <Zoom in={this.state.logoReady} >
                        <img src={logo} className={classes.logo} alt="Wiki - Logo" />
                    </Zoom>
                    <LinearProgress className={classes.progress} color="secondary" />
                </DialogContent>

            </Dialog>
        );
    }
}

SplashScreen.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SplashScreen);
