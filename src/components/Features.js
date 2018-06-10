import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import MediaCard from './MediaCard';
import housekeeping from '../images/Housekeeping.jpg';
import transportation from '../images/Driving.jpg'
import cooking from '../images/cooking.jpg'

const features = [
    {
        image: housekeeping,
        title: "Housekeeping",
        button: 'Learn More',
        link: 'one',

    },
    {
        image: cooking,
        title: "Cooking",
        button: 'Learn More',
        link: 'one',

    },
    {
        image: transportation,
        title: "Transpotation",
        button: 'Learn More',
        link: 'one',
    }
]

const Features = () => (
    <div>
        <h1>A Few Of Our Services</h1>
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