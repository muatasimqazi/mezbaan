//@ts-check
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { ROUTES } from './constants';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
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
        <Header />
        <SearchBar
          onChange={() => console.log('onChange')}
          onRequestSearch={() => console.log('onRequestSearch')}
        />
        <Router>
          <Switch>
            <Route exact path={ROUTES.main} component={MainView} />
            <Route path={ROUTES.feature} component={FeatureView} />
            <Route path={ROUTES.post} component={PostDetail} />
            <Redirect to={ROUTES.main} />
          </Switch>
        </Router>
        <div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;