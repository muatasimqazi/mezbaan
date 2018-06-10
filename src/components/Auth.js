import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { Container, Row, Col } from 'react-grid-system'

const styles = {
    button: {
        margin: 12,
    }
}
class ResponsiveDialog extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { fullScreen } = this.props;

        return (
            <div>

                <Dialog
                    fullScreen={fullScreen}
                    open={this.props.open}
                    onClose={this.props.handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">{"Login"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Container>
                                <Row>
                                    <Col className="auth" sm={12}>
                                        <form onSubmit={evt => this.handleSubmit(evt)}>
                                            <TextField
                                                hintText='Email'
                                                name='email'
                                                onChange={this.handleChange}
                                                value={this.state.email}
                                                fullWidth={true}
                                            />

                                            <TextField
                                                hintText='Password'
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
                                    </Col>
                                </Row>
                            </Container>


                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleClose} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={this.props.handleClose} color="primary" autoFocus>
                            Login
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

ResponsiveDialog.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ResponsiveDialog);
