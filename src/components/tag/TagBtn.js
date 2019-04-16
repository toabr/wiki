import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles, Typography, Button } from '@material-ui/core';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit / 2,
    },
});

const TagBtn = props => {

    const { title, tid, classes, ...rest } = props;

    return (
        <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            component={Link}
            size="small"
            to={`/tag/${tid}`} 
            {...rest} >
            {title}
        </Button>
    )
}

TagBtn.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    tid: PropTypes.number.isRequired,
}

export default withStyles(styles)(TagBtn)