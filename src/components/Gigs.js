import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import MediaCard from './MediaCard';
import { gigs } from '../store';



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