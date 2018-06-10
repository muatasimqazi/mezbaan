//@ts-check
import React from 'react';
import hero from '../images/hero-2.png';
import { Typography } from '@material-ui/core';
import Search from './Search';
import { Container, Row, Col } from 'react-grid-system';

const styles = {
    /* The hero image */
    hero: {
        height: '100vh',
    },
    heroImage: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),  url(${hero})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        height: '88vh',
    },

    heroText: {
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    },
}

const Hero = () => (
    <div style={styles.hero}>
        <div style={styles.heroImage}>
        <Container style={{marginTop: 64, marginBottom: 50, top: '60vh'}}>
          <Row style={{justifyContent: 'space-around'}}>
          <Col xs={8}>
            <Search />
            </Col>
          </Row>
        </Container>
            <div style={styles.heroText}>
            <Typography variant="display1" style={{'color': 'white'}}>Our mission is to connect people through culture and communities.</Typography>
                
                
            </div>
        </div>
    </div>
);

export default Hero;