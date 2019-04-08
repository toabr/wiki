import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import { Provider } from './context'; 

import auth from "./components/auth";
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';

import Article from './components/routes/Article';

// routes
import Home from './components/routes/Home';
import Liked from './components/routes/Liked';
import Tag from './components/routes/Tag';
import Tags from './components/routes/Tags';
import LoginForm from './components/LoginForm';

import PropTypes from 'prop-types';
import { withStyles, Grid } from '@material-ui/core';


const styles = theme => ({
  root: {
    maxWidth: 800,
    margin: 'auto',
    padding: theme.spacing.unit,
  },
  '@global': {
    'code, pre': {
      background: theme.palette.grey[200],
      padding: 3,
      overflowX: 'auto',
      fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace',
    },
    'ul': {
      paddingLeft: '1.2em',
    }
  }
});


class App extends Component {
  state = {
    headLine: 'Wiki',
    user: {
      id: 0,
      name: 'Guest',
    },
    likedArticles: [],
    history: [43, 69, 36],
    renderSplashscreen: true,
  }

  componentDidMount() {
    console.log('### App mountet');
    setTimeout(() => {
      this.setState({ renderSplashscreen: false });
    }, 500);
    auth.getUserID(userID => this.setState({ userID }));
  }

  handleLogOut = withRouter(
    ({ history }) =>
      auth.logout(() => {
        console.log('### logout');
        this.props.history.push("/");
      })
  );


  toggleLike = (nid) => {
    let { likedArticles } = this.state;
    const index = likedArticles.indexOf(nid);

    if (index >= 0) {
      likedArticles.splice(index, 1);
    }else {
      likedArticles.push(nid);
    }

    this.setState({ likedArticles });
  }


  share = nid => {
    console.log('share', nid);
  }


  home = () => <Home endpoint="https://local.wiki/api/articles/" nids={[]} />;
  liked = () => <Liked endpoint="https://local.wiki/api/articles/" nids={this.state.likedArticles} />;

  getContext = () => ({
    share: this.share,
    toggleLike: this.toggleLike,
    ...this.state,
  });

  render() {
    const { classes } = this.props;
    return (
      <Router>
        <SplashScreen open={this.state.renderSplashscreen} minLiveTime={1000} />

          {!this.state.renderSplashscreen &&
          <Provider value={this.getContext()}>
            <Header headline={this.state.headLine} />

            <Grid container className={classes.root}>
              <Grid item xs={12}>
                <Switch>
                  <Route exact path="/" component={this.home} />
                  <Route exact path="/tags" component={Tags} />
                  <Route exact path="/liked" component={this.liked} />
                  <Route path="/tag/:tid" component={Tag} />
                  <Route path="/article/:nid" component={Article} />
                  <Route path="/login" component={LoginForm} />
                  <Route path="*" component={() => "404 NOT FOUND"} />
                </Switch>
              </Grid>
            </Grid>
          </Provider>
          }

        </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);