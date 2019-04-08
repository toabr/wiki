import React from 'react';
import { Link, withRouter } from "react-router-dom";

import auth from "./auth";

import PropTypes from 'prop-types';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import HomeIcon from '@material-ui/icons/Home';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import StarIcon from '@material-ui/icons/Star';
import HistoryIcon from '@material-ui/icons/History';

import {
  AppBar,
  Toolbar,
  SwipeableDrawer,
  Typography,
  Menu,
  MenuItem,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  IconButton,
  withStyles,
} from '@material-ui/core';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  toolbar: theme.mixins.toolbar,
});

class AppHeader extends React.Component {
  state = {
    drawer: false,
    anchorEl: null,
    menu: [{
      title: 'Home',
      icon: <HomeIcon />,
      route: '/'
    }, {
      title: 'Tags',
      icon: <BookmarksIcon />,
      route: '/tags'
    }, {
      title: 'Liked',
      icon: <StarIcon />,
      route: '/liked'
    }, {
      title: 'History',
      icon: <HistoryIcon />,
      route: '/history'
    }]
  };

  toggleDrawer = (open) => () => {
    this.setState({ drawer: open });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogOut = () => {
    auth.logout(() => console.log('LogOut Successfull'));
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const loggedIn = auth.isAuthenticated();

    // Drawer Menu
    const sideList = (
      <div className={classes.list}>
        <List>
          {this.state.menu.map((item, index) => {
            const ItemIcon = item.icon;
            return(
              <ListItem button key={item.title} component={Link} to={item.route} >
                <ListItemIcon>
                  {ItemIcon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            );
            })}
        </List>

        {loggedIn && (
          <React.Fragment>
            <Divider />
            <List>
              <ListItem button onClick={this.handleLogOut} >
                <ListItemText primary="logout" />
                <ListItemIcon>
                  <LockOpenIcon />
                </ListItemIcon>
              </ListItem>
            </List>
          </React.Fragment>
        )}

      </div>
    );

    return (
      <div>

        <SwipeableDrawer
          className={classes.drawer}
          open={this.state.drawer}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)} >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)} >
            <div className={classes.toolbar} />
            <Divider />
            {sideList}
          </div>
        </SwipeableDrawer>

        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              {this.props.headline}
            </Typography>

            {!loggedIn && (
              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>
            )}

            {loggedIn && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);
