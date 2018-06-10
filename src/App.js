//@ts-check
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { ROUTES } from './constants';
import './App.css';
import AppBarTop from './components/AppBarTop';
import SearchBar from './components/SearchBar';
import PostDetail from './components/PostDetail';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Hero from './components/Hero';
import FeatureView from './components/Feature';
import MainView from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <AppBarTop />

=======
        <PostDetail />
        {/* <AppBarTop />
>>>>>>> bt-branch2
        <SearchBar
          onChange={() => console.log('onChange')}
          onRequestSearch={() => console.log('onRequestSearch')}
        />
<<<<<<< HEAD
        <Router>
          <Switch>
            <Route exact path={ROUTES.main} component={MainView} />
            <Route path={ROUTES.feature} component={FeatureView} />
            <Redirect to={ROUTES.main} />
          </Switch>
        </Router>
=======
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Hero />
          </Grid>
        </Grid> */}
>>>>>>> bt-branch2
        <div>

        </div>
      </div>
    );
  }
}

export default App;
