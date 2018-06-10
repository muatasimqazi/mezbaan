//@ts-check
import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
const styles = {
    explain: {
        backgroundColor: '#F9FAFB',
        height: '40vh',
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'left',
    }
}
class ExplainView extends Component {
    render() {
        return (
            <div style={styles.explain}>
                <Typography gutterBottom variant="headline" component="h2">
                    How It Works
                </Typography>
            </div>
        );
    }
}

export default ExplainView;