import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import MediaCard from './MediaCard';

const features = [
    {
        image: "https://res.cloudinary.com/taskrabbit-com/image/upload/v1489003789/ma4yidiqwmcbgzf7yvwt.jpg",
        title: "Feature One",
        name: 'Book this',

    },
    {
        image: "https://res.cloudinary.com/taskrabbit-com/image/upload/v1489003789/ma4yidiqwmcbgzf7yvwt.jpg",
        title: "Feature One",
        name: 'Cooking',
    },
    {
        image: "https://res.cloudinary.com/taskrabbit-com/image/upload/v1489003789/ma4yidiqwmcbgzf7yvwt.jpg",
        title: "Feature One",
        name: 'Housekeeping',
    }
]

const Features = () => (
    <div>
        <Container>
            <Row>
                {
                    features.map((item, index) =>
                        <Col sm={4} key={index}>
                            <MediaCard 
                                image={item.image}
                                title={item.title}
                                name={item.name}
                            />
                        </Col>
                    )


                }

            </Row>
        </Container>
    </div>

);

export default Features;