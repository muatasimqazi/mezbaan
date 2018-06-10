import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, Avatar } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Row, Col } from 'react-grid-system';
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

function PostDetail(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;
  const index = props.match.params.postId - 1;
  const gig = gigs[index];

  return (
    <div style={{ marginTop: 70, marginBottom: 70 }}>
      <Container>
        <Row>
          <Col sm={10}>
            <Card elevation={0} className={classes.card}>
              <CardContent>
                <Typography variant="headline" component="h2">

                  {
                    gig.title
                  }
                </Typography>

                <Typography className={classes.pos} color="textSecondary">

                  <i className={`fas ${gig.icon}`} style={{ color: '#bdbdbd' }}></i>
                  <span style={{ padding: 5 }}>{gig.category}</span>

                </Typography>
                <div style={{ display: 'flex' }}>
                  <Avatar
                    alt={gig.author.name}
                    src={gig.author.image}
                  />
                  <Typography color="textSecondary">

                    {gig.author.name}

                  </Typography>
                </div>
                <img src={gig.image} />
                <hr />

                <Typography component="p">
                  {
                    gig.description
                  }
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="seconday">
                  Book Now
      </Button>
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

PostDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostDetail);