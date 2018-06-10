import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import MediaCard from './MediaCard';


const gigs = [
    {
        image: "https://res.cloudinary.com/taskrabbit-com/image/upload/v1489003789/ma4yidiqwmcbgzf7yvwt.jpg",
        title: "Feature One",
        name: 'Book this',
        button: '',
        link: 'something',


    },
    {
        image: "https://res.cloudinary.com/taskrabbit-com/image/upload/v1489003789/ma4yidiqwmcbgzf7yvwt.jpg",
        title: "Feature One",
        name: 'Cooking',
        button: '',
        link: 'something',
    },
    {
        image: "https://res.cloudinary.com/taskrabbit-com/image/upload/v1489003789/ma4yidiqwmcbgzf7yvwt.jpg",
        title: "Feature One",
        name: 'Housekeeping',
        button: '',
        link: 'something',
    },
    {
        image: "https://res.cloudinary.com/taskrabbit-com/image/upload/v1489003789/ma4yidiqwmcbgzf7yvwt.jpg",
        title: "Feature One",
        name: 'Housekeeping',
        button: '',
        link: 'something',
    },
    {
        image: "https://res.cloudinary.com/taskrabbit-com/image/upload/v1489003789/ma4yidiqwmcbgzf7yvwt.jpg",
        title: "Feature One",
        name: 'Housekeeping',
        button: '',
        link: 'something',
    },
    {
        image: "https://res.cloudinary.com/taskrabbit-com/image/upload/v1489003789/ma4yidiqwmcbgzf7yvwt.jpg",
        title: "Feature One",
        name: 'Housekeeping',
        button: '',
        link: 'something',
    },
    {
        image: "https://res.cloudinary.com/taskrabbit-com/image/upload/v1489003789/ma4yidiqwmcbgzf7yvwt.jpg",
        title: "Feature One",
        name: 'Housekeeping',
        button: '',
        link: 'something',
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
                                        button={gig.button}
                                        link={gig.link}
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