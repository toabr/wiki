import React from 'react';

import PropTypes from 'prop-types';
import { withStyles, List, ListItem, ListItemText, Divider, Typography } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const styles = theme => ({
    toc: {
        // background: theme.palette.grey[100],
    },
    listIcon: {
        color: theme.palette.grey[500],
    },
    heading: {
        paddingLeft: theme.spacing.unit,
    },
    li: {
        padding: `${theme.spacing.unit / 2}px 0`,
        background: theme.palette.grey[100],
        '&:nth-child(even)': {
            background: theme.palette.grey[200],
        },
    },
    linkText: {
        padding: 0,
    },
    linkTextInner: {
        color: theme.palette.secondary.main,
    }
});

const ArticleToc = ({ toc, classes }) => {
    const headlines = toc.map((e,i) => {
        return (
            <ListItem key={i} button component='a' href={e.href} className={classes.li} >
                <ArrowRightIcon className={classes.listIcon} />
                <ListItemText className={classes.linkText} primary={
                    <Typography variant="body1" className={classes.linkTextInner} >
                        {e.title}
                    </Typography>
                    } 
                />
            </ListItem>
        );
    });

    return (
        <div className={classes.toc}>
            <Typography component="h2" variant="h6" className={classes.heading} color="textSecondary" >
                Table of Contents
            </Typography>
            <List className={classes.list} >
                {headlines}
            </List>
        </div>
    );
}

ArticleToc.propTypes = {
    classes: PropTypes.object.isRequired,
    toc: PropTypes.array.isRequired,
};

export default withStyles(styles)(ArticleToc);