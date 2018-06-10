import React, { Component } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { Container, Row, Col } from 'react-grid-system';

const styles = {
footer: {
    height: '20vh',
    background: '#66717d',
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
            <Container>
                <Row>
                    <Col sm={4} debug>
                        <Typography variant="headline" component="h3" style={styles.content}>
                            This is...
            </Typography>
                        <Typography component="p" style={styles.content}>
                            Lorem impsum lorem ipsum lorem ipsum.
            </Typography>
                    </Col>

                    <Col sm={4} debug>
                        <Typography variant="headline" component="h3" style={styles.content}>
                            This is...
            </Typography>
                        <Typography component="p" style={styles.content}>
                            Lorem impsum lorem ipsum lorem ipsum.
            </Typography>
                    </Col>
                </Row>
                <Col sm={4} debug>
                    <Typography variant="headline" component="h3" style={styles.content}>
                        This is...
            </Typography>
                    <Typography component="p" style={styles.content}>
                        Lorem impsum lorem ipsum lorem ipsum.
            </Typography>
                </Col>
            </Container>
        </div>
    );
}
}

export default Footer;