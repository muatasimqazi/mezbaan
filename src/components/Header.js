import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
      flexGrow: 1,
      backgroundColor: '#F9FAFB'
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

class Header extends Component {
    render() {
        return (
            <div style={styles.root}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu" style={styles.menuButton}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" style={styles.flex}>
                            Mezbaan
                    </Typography>
                        <Button color="inherit">Login</Button>
                        <Button color="inherit">Signup</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;