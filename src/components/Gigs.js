import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import MediaCard from './MediaCard';


const gigs = [
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
    },
    {
        image: "https://res.cloudinary.com/taskrabbit-com/image/upload/v1489003789/ma4yidiqwmcbgzf7yvwt.jpg",
        title: "Feature One",
        name: 'Housekeeping',
    },
    {
        image: "https://res.cloudinary.com/taskrabbit-com/image/upload/v1489003789/ma4yidiqwmcbgzf7yvwt.jpg",
        title: "Feature One",
        name: 'Housekeeping',
    },
    {
        image: "https://res.cloudinary.com/taskrabbit-com/image/upload/v1489003789/ma4yidiqwmcbgzf7yvwt.jpg",
        title: "Feature One",
        name: 'Housekeeping',
    },
    {
        image: "https://res.cloudinary.com/taskrabbit-com/image/upload/v1489003789/ma4yidiqwmcbgzf7yvwt.jpg",
        title: "Feature One",
        name: 'Housekeeping',
    }
]


class Gigs extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        {
                            gigs.map((gig, index) =>
                                <Col sm={3} key={index}>
                                    <MediaCard
                                        image={gig.image}
                                        title={gig.title}
                                        name={gig.name}
                                    />
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Gigs;