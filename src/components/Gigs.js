import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                                    <Link to={`${gig.link}${index + 1}`} style={{textDecoration: 'none'}}>
                                        <MediaCard
                                            image={gig.image}
                                            title={gig.title}
                                            description={gig.description.split(".")[0] + "."}
                                            button={gig.button}
                                            link={gig.link}
                                        />
                                    </Link>
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