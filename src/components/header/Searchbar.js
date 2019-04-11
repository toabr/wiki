import React from 'react';
import { withRouter } from "react-router-dom";
import { withContext } from '../context';

import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';

import { withStyles, InputBase } from '@material-ui/core';

const styles = theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: theme.spacing.unit * 2,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: '48px',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: '50px',
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        }, 
    },
});

const Searchbar = (props) => {
    const { classes } = props;

    const handleEnter = (e) => {
        console.log('search', e.target.value);

        const { history } = props;
        if (e.key === 'Enter') {
            props.handleSearch(e.target.value);
            e.target.value = '';
            history.push('/search');
        }
    }
    
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                onKeyPress={handleEnter}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
            />
        </div>
    )
}

Searchbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withContext(withStyles(styles)(Searchbar)));