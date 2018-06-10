import React, { Component } from 'react';
import { Paper, Typography } from '@material-ui/core';

const styles = {
    footer: {
        height: '20vh',
        background: '#ff4400',
        padding: 50,
    },
    content: {
        color: 'white',
    }
}
class Footer extends Component {
    render() {
        return (
            <div style={styles.footer}>
                <Typography variant="headline" component="h3" style={styles.content}>
                        This is...
                </Typography>
                    <Typography component="p" style={styles.content}>
                        Lorem impsum lorem ipsum lorem ipsum.
                </Typography>
            </div>
        );
    }
}

export default Footer;