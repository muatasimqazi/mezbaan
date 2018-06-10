//@ts-check
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { ROUTES } from './constants';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PostDetail from './components/PostDetail';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Hero from './components/Hero';
import FeatureView from './components/Feature';
import MainView from './components/Main';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
  },
});


class App extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider theme={theme}>
        <Header />
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
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;