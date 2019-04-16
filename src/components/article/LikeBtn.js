import React, { Component, Fragment } from 'react';
import { withContext } from '../context';

import PropTypes from 'prop-types';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import { withStyles, Fab } from '@material-ui/core';


const styles = theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing.unit,
        right: theme.spacing.unit * 2,
    }
});


class LikeBtn extends Component {
    state = {
        nid: Number(this.props.nid),
        liked: false,
    }

    componentDidMount() {
        this.setState({ liked: this.props.app.checkLike(this.state.nid) });
    }

    handleClick = () => {
        this.props.app.toggleLike(this.state.nid)
            .then(liked => this.setState({ liked }))
            .catch(err => console.log(err));
    };

    render() {
        const { classes } = this.props;
        const { liked } = this.state;

        return (
            <Fragment>
                {(liked) ?
                    <Fab size="large"
                        aria-label="Unlike"
                        color="default"
                        onClick={this.handleClick}
                        className={classes.fab}>
                        <StarBorderIcon />
                    </Fab>
                    :
                    <Fab size="large"
                        aria-label="Like"
                        color="secondary"
                        onClick={this.handleClick}
                        className={classes.fab}>
                        <StarIcon />
                    </Fab>
                }
            </Fragment>
        );
    }

}

LikeBtn.propTypes = {
    classes: PropTypes.object.isRequired,
    nid: PropTypes.number.isRequired,
};

export default withStyles(styles)(withContext(LikeBtn));