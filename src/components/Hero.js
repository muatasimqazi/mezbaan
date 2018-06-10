import React from 'react';
import hero from '../images/hero-2.png';
import { Typography } from '@material-ui/core';
import Search from './Search';
import { Container, Row, Col } from 'react-grid-system';
import { Parallax, Background } from 'react-parallax';

const styles = {
    heroContainer: {
        height: '95vh',
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0))'
    },
    hero: {
        padding: 50,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
    },

    heroText: {
        color: 'white',
        fontWeight: 200,
    },
}

const Hero = () => (
    <div style={styles.heros}>
        <Parallax
            bgImage={hero}
            bgImageAlt="hero image"
            strength={200}
        >
            <div style={styles.heroContainer}>
                <Container style={{ marginTop: 64, marginBottom: 50, top: '60vh' }}>
                    <Row style={{ justifyContent: 'space-around' }}>
                        <Col xs={8}>
                            <Search />
                        </Col>
                    </Row>
                </Container>
                <div style={styles.hero}>
                    <Typography variant="display1" style={styles.heroText}>
                        Connecting people through culture and communities
                    </Typography>
                </div>
            </div>
        </Parallax>

    </div>
);

export default Hero;