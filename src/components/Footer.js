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
                    <Col sm={8} >
                        <Typography variant="headline" component="h3" style={styles.content}>
                        <i className="fab fa-facebook" style={{padding:'10px'}}></i><i className="fab fa-twitter" style={{padding:'10px'}}></i><i className="fab fa-instagram" style={{padding:'10px'}}></i>
            </Typography>
                        <Typography component="p" style={styles.content}>
                            Check Us Out On Social Media
            </Typography>

                    </Col>
                    <Col sm={4} style={{textAlign:"flex-end"}}>
                        <Typography variant="subheading" component="h4" style={styles.content}>
                            <Row>About Us</Row>
                            <Row>FAQ</Row>
                            <Row>Help</Row>
                            <Row>Careers</Row>
                            <Row>Blog</Row>
                            <Row>Terms & Privacy</Row>
                        </Typography>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}
}

export default Footer;