//@ts-check
import React, { Component } from 'react';
import './App.css';
import AppBarTop from './components/AppBarTop';
import SearchBar from './components/SearchBar';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Hero from './components/Hero'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBarTop />
        <SearchBar
          onChange={() => console.log('onChange')}
          onRequestSearch={() => console.log('onRequestSearch')}
        />
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Hero />
          </Grid>
        </Grid>
        <div>

        </div>
      </div>
    );
  }
}

export default App;
