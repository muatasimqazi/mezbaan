import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Card, Avatar } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { gigs } from '../store';


const styles = {
    card: {
      minWidth: 275,
      textAlign: 'left',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };

function FeatureView(props) {
            const index = props.match.params.postId - 1;
            const { classes } = props;
            const category = props.match.params.featuresName;
            console.log(category)
            const filterdGigs = gigs.filter(gig => gig.category === category)
            
            console.log(filterdGigs);
        
          
            return (
              <div style={{ marginTop: 70, marginBottom: 70 }}>
                <Container>
                  <Row>
                    <Col sm={10}>
                      <Card elevation={0} className={classes.card}>
                        <CardContent>

                            {
                                filterdGigs.map((item, index) => {
                                    return (
                                        <div>
                                        <a href={`http://localhost:3000/${item.link}${item.id}`}><h1>{item.title}</h1></a>
                                        <p>{item.description}</p>
                                        </div>
                                    )
                                })
                            }
                     
                          <Typography component="p">
                            
                          
                            
                            <br />
                          </Typography>
                        </CardContent>
                        <CardActions>
                          
                        </CardActions>
                      </Card>
                    </Col>
                    <Col sm={2}>
          
                    </Col>
                  </Row>
                </Container>
              </div>
        );
    }

FeatureView.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default withStyles(styles)(FeatureView);