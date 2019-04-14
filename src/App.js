import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from './components/context'; 

import { handleLocalStore } from './js/helper';

import SplashScreen from './components/SplashScreen';
import Header from './components/Header';

// routes
import About from './components/routes/About';
import Article from './components/routes/Article';
import Home from './components/routes/Home';
import Likes from './components/routes/Likes';
import Recent from './components/routes/Recent';
import ArticlesByTag from './components/routes/ArticlesByTag';
import Tags from './components/routes/Tags';
import SearchResult from './components/routes/SearchResult';

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
    isLoading: false,
    likedArticles: [],
    recentArticles: [],
    search: '',
    renderSplashscreen: true,
  }

  componentDidMount() {
    console.log('### App mountet, Mode:', process.env.NODE_ENV);
    setTimeout(() => {
      this.setState({ renderSplashscreen: false });
    }, 500);

    let likedArticles = handleLocalStore({key: 'likes'});
    if(likedArticles) {
      likedArticles = likedArticles.split(',');
      this.setState({ likedArticles });
    }
  }

  removeNode(nid) {
    console.log('remove', nid);
    const nodes = this.state.nodes.filter((node) => {
      return node.nid !== nid;
    });
    this.setState({ nodes });
  }
  
  loading = (isLoading) => {
    this.setState({ isLoading });
  }

  addRecent = (nid) => {
    let recentArticles = this.state.recentArticles;
    recentArticles.push(nid);
    recentArticles = recentArticles.filter((v, i, a) => a.indexOf(v) === i);
    this.setState({ recentArticles });
  }

  handleSearch = (search) => {
    // console.log(this.props);
    this.setState({ search });
  }
  
  toggleLike = (nid, path) => {
    let { likedArticles } = this.state;
    const index = likedArticles.indexOf(nid);

    if (index >= 0) { // unLike
      likedArticles.splice(index, 1); // remove node from likedArticles
      if(path === '/likes') this.removeNode(nid); // remove node from view
    }else { // like
      likedArticles.push(nid);
    }

    handleLocalStore({ key: 'likes', value: likedArticles });
    this.setState({ likedArticles });
  }

  share = nid => {
    console.log('share', nid);
  }

  getAppContext = () => ({
    app: {
      addRecent: this.addRecent,
      handleSearch: this.handleSearch,
      loading: this.loading,
      removeNode: this.removeNode,
      toggleLike: this.toggleLike,
      share: this.share,
      ...this.state,
    }
  });

  render() {
    const { classes } = this.props;
    return (
      <Router basename={(process.env.NODE_ENV === 'production')? '/wiki' : ''} >
        <SplashScreen open={this.state.renderSplashscreen} minLiveTime={3000} />

          {!this.state.renderSplashscreen &&
          <Provider value={this.getAppContext()}>
            <Header />

            <Grid container className={classes.root}>
              <Grid item xs={12}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/tags" component={Tags} />
                  <Route exact path="/likes" component={Likes} />
                  <Route exact path="/recent" component={Recent} />
                  <Route exact path="/about" component={About} />
                  <Route path="/tag/:tid" component={ArticlesByTag} />
                  <Route path="/article/:nid" component={Article} />
                  <Route path="/search" component={SearchResult} />
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