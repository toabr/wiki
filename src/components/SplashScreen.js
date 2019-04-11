import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Logo from '../img/logo.jpg';

import { withStyles, Dialog, DialogContent, Slide, LinearProgress, Grid } from '@material-ui/core';


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
    }

    componentDidMount() {
        const minLiveTime = (this.props.minLiveTime)? this.props.minLiveTime: 800;
        console.log(minLiveTime);
        
        setTimeout(() => {
            this.setState({ canDie: true });
        }, minLiveTime);
    }

    componentDidUpdate(oldProps) {
        const newProps = this.props
        if (oldProps.open !== newProps.open) {
            this.setState({ open: false })
            // console.log('new props');
        }
    }

    Transition = (props) => {
        return <Slide direction="up" {...props} />;
    }

    render() {
        const { classes } = this.props;
        const open = (!this.state.open && this.state.canDie)? false : true;

        return (
            <Dialog
                fullScreen
                open={open}
                TransitionComponent={this.Transition}
                transitionDuration={{ enter: 0, exit: 250 }}>

                <DialogContent className={classes.paper} >
                    <img src={Logo} className={classes.logo} alt="Wiki - Logo" />
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
