import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Typography, Grid } from '@material-ui/core';
import MediaCard from './MediaCard';
import { features } from '../store';



const Features = () => (
    <div style={{paddingTop: '3em'}}>
        <Grid>
            <Typography
                gutterBottom
                variant="display1"
                component="h2"
                style={{ textAlign: "center", marginBottom: '1em'}}
            >
                Our Services
            </Typography>
        </Grid>
        <Container>
            <Row>
                {
                    features.map((item, index) =>
                        <Col sm={4} key={index}>
                            <MediaCard
                                image={item.image}
                                title={item.title}
                                button={item.button}
                                link={item.link}

                            />
                        </Col>
                    )
                }
            </Row>
        </Container>
    </div>

);

export default Features;