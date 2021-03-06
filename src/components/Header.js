import React from 'react';
import { Link } from "react-router-dom";
import { withContext } from './context';

import Searchbar from './header/Searchbar';

import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import StarIcon from '@material-ui/icons/Star';
import HistoryIcon from '@material-ui/icons/History';
import InfoIcon from '@material-ui/icons/Info';

import {
  AppBar,
  Badge,
  Divider,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
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

const menu = [{
  title: 'Home',
  icon: <HomeIcon />,
  route: '/'
}, {
  title: 'Tags',
  icon: <BookmarksIcon />,
  route: '/tags'
}, {
  title: 'Stars',
  icon: <StarIcon />,
  route: '/likes'
}, {
  title: 'History',
  icon: <HistoryIcon />,
  route: '/recent'
}, {
  title: 'About',
  icon: <InfoIcon />,
  route: '/about'
}];

class AppHeader extends React.Component {
  state = {
    drawer: false,
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

  render() {
    const { classes } = this.props;
    const { app } = this.props;

    // Drawer Menu
    const sideList = (
      <List className={classes.list}>
        {menu.map((item) => {
          const ItemIcon = item.icon;
          return (
            (item.title !== 'Stars') ?
              <ListItem button key={item.title} component={Link} to={item.route} >
                <ListItemIcon>
                  {ItemIcon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
              :
              <ListItem button key={item.title} component={Link} to={item.route} >
                <ListItemIcon>
                  <Badge color="secondary" badgeContent={app.likedArticles.length}>
                    {ItemIcon}
                  </Badge>
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
          );
        })}
      </List>
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

        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              {true &&
                'WIKI'
              } 
            </Typography>
            <Searchbar/>
          </Toolbar>
          {app.isLoading && <LinearProgress color="secondary" />}
        </AppBar>
      </div>
    );
  }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withContext(withStyles(styles)(AppHeader));
