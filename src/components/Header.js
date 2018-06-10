import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Auth from './Auth';
import logo from '../images/logo.png';

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
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClickOpen() {
        this.setState({
            open: !this.state.open,
        })
    };
    handleClose() {
        this.setState({ open: false });
    };

    render() {
        return (
            <div style={styles.root}>
                <AppBar position="fixed" color="default">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu" style={styles.menuButton}>
                            <MenuIcon />
                        </IconButton>
                        <IconButton>
                        <img src={logo}  height="30" width="40"/>
                        </IconButton>
                        <Typography variant="title" color="inherit" style={styles.flex}>
                            Mezbaan
                    </Typography>
                        <Button color="inherit" onClick={this.handleClickOpen}>Login</Button>
                        <Button color="inherit" onClick={this.handleClickOpen}>Signup</Button>
                    </Toolbar>
                </AppBar>
                <Auth open={this.state.open} handleClose={this.handleClose}/>
            </div>
        );
    }
}

export default Header;