import React, { Component, Fragment } from 'react';
import { withContext } from '../context';

import PropTypes from 'prop-types';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import {
    withStyles,
    Fab,
} from '@material-ui/core';


const styles = theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing.unit,
        right: theme.spacing.unit * 2,
    }
});


class LikeBtn extends Component {
    state = {
        liked: false,
    }

    componentDidMount() {
        const liked = this.checkLike();
        this.setState({ liked });
        // console.log(this.props);
    }

    checkLike = () => this.props.likedArticles.includes(this.props.nid);

    handleLike = () => {
        this.props.toggleLike(this.props.nid, this.props.match.path);
        
        const liked = this.checkLike();
        this.setState({ liked });
    };
    
    render() {
        const { classes } = this.props;
        const { liked } = this.state;

        const likeIcon = (liked) ? <StarIcon /> : <StarBorderIcon />;
        const likeText = (liked) ? "Unlike" : "Like";
        const likeColor = (liked) ? "default" : "secondary";

        return (
            <Fab size="large" 
                color={likeColor} 
                aria-label={likeText} 
                onClick={this.handleLike}
                className={classes.fab}>
                {likeIcon}
            </Fab>
        );
    }

}

LikeBtn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withContext(LikeBtn));