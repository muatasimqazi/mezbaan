import React, { Component } from 'react';
import AuthDialog from './AuthDialog';
import { Button, TextField } from '@material-ui/core';


const styles = {
    button: {
        margin: 12,
    }
}
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        }
    }
    render() {
        return (
            <div>
                <AuthDialog title="Login" open={this.props.open} handleClose={this.props.handleClose} >
                    <form onSubmit={evt => this.handleSubmit(evt)}>
                        <TextField
                            label='Email'
                            name='email'
                            onChange={this.handleChange}
                            value={this.state.email}
                            fullWidth={true}
                        />

                        <TextField
                            label='Password'
                            name='password'
                            onChange={this.handleChange}
                            type='password'
                            value={this.state.password}
                            fullWidth={true}
                        />
                        <div align="right">
                            <Button
                                label="Cancel"
                                secondary={true}
                                style={styles.button}
                                onClick={() => this.handleCancel()}
                            />
                            <Button
                                label="Login"
                                primary={true}
                                style={styles.button}
                                type="submit"
                            />
                        </div>
                    </form>
                </AuthDialog>
            </div>
        );
    }
}

export default Login;