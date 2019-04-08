import React, { Component, Fragment } from 'react';
import { withContext } from '../../context';

import PropTypes from 'prop-types';
import MoreIcon from '@material-ui/icons/MoreVert';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ShareIcon from '@material-ui/icons/Share';

import {
    withStyles,
    ListItemText,
    ListItemIcon,
    Menu,
    MenuItem,
    IconButton,
} from '@material-ui/core';


const styles = theme => ({
    menuItem: {
    },
    primary: {},
    icon: {},
});


class ArticleMenu extends Component {
    state = {
        anchorEl: null,
        liked: false,
    }

    componentDidMount() {
        const liked = this.checkLike();
        this.setState({ liked });
    }

    checkLike = () => this.props.likedArticles.includes(this.props.nid);

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleLike = () => {
        this.props.toggleLike(this.props.nid);
        
        const liked = this.checkLike();
        this.setState({ liked });
        
        this.handleClose();
    };
    
    handleShare = () => {
        this.props.share(this.props.nid);
        this.handleClose();
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };


    render() {
        const { classes } = this.props;
        const { anchorEl, liked } = this.state;
        const open = Boolean(anchorEl);

        // console.log('like', this.props.likedArticles.includes(this.props.nid) );
        const likeIcon = (liked) ? <StarIcon /> : <StarBorderIcon />;
        const likeText = (liked) ? "Unlike" : "Like";

        return (
            <Fragment>
                <IconButton
                    aria-label="More"
                    aria-owns={open ? 'long-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick} >
                    <MoreIcon />
                </IconButton>
                <Menu id="simple-menu" anchorEl={anchorEl} open={open} onClose={this.handleClose} >
                    <MenuItem onClick={this.handleLike} className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                            {likeIcon}
                        </ListItemIcon>
                        <ListItemText 
                            classes={{ primary: classes.primary }} inset 
                            primary={likeText} 
                        />
                    </MenuItem>
                    <MenuItem onClick={this.handleShare} className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                            <ShareIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Share" />
                    </MenuItem>
                </Menu>
            </Fragment>
        );
    }

}

ArticleMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withContext(ArticleMenu));