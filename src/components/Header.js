import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../images/logo.png';
import Login from './Login'
import SignUp from './SignUp'

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
            isLogin: false,
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleLogin() {
        this.setState({
            open: !this.state.open,
            isLogin: true,
        })
    };

    handleSignUp() {
        this.setState({
            open: !this.state.open,
        })
    };
    handleClose() {
        this.setState({ 
            open: false,
            isLogin: false,
           
        });
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
                            <img src={logo} height="30" width="40" />
                        </IconButton>
                        <Typography variant="title" color="inherit" style={styles.flex}>
                            Mezbaan
                    </Typography>
                        <Button color="inherit" onClick={this.handleLogin}>Login</Button>
                        <Button color="inherit" onClick={this.handleSignUp}>Signup</Button>
                    </Toolbar>
                </AppBar>
                {
                    this.state.isLogin

                        ?
                        <Login open={this.state.open} handleClose={this.handleClose} />
                        :
                        <SignUp open={this.state.open} handleClose={this.handleClose} />
                }


            </div>
        );
    }
}

export default Header;