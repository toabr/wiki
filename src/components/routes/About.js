import React from 'react'
import { withPage } from '../Page';
import Logo from '../../img/logo.jpg';

import PropTypes from 'prop-types';
import { withStyles, Grid } from '@material-ui/core';


const styles = theme => ({
    logoWrapper: {
        background: theme.palette.primary.main,
    },
    logo: {
        maxWidth: '100%',
        maxHeight: '480px',
        display: 'block',
        margin: 'auto',
    },
    content: {
        padding: theme.spacing.unit,
    }
});


const About = props => {
    const { classes } = props;
    return (
        <Grid container >
            <Grid item xs={12} className={classes.logoWrapper} >
                <img src={Logo} className={classes.logo} alt="Wiki - Logo" />
            </Grid>
            <Grid item xs={12} className={classes.content}>
                About jojo <span>🇺🇸 🇩🇪</span>
            </Grid>
        </Grid>
    )
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withPage(withStyles(styles)(About), 'About', true);