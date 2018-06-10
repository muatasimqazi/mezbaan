import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Row, Col } from 'react-grid-system';

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

  return (
    <div style={{marginTop: 70, marginBottom: 70 }}>
      <Container>
        <Row>
          <Col sm={10}>
            <Card elevation={0} className={classes.card}>
              <CardContent>
                <Typography variant="headline" component="h2">
                  Title
          </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  category
          </Typography>
                <Typography component="p">
                  description jdhkjashdkahskdhsak adlkjlasjdajs hsdkjahksahksaj hsakhksahashsalkh
                  more description jhdkjahdkahsdkahskdhjaljdsajdaslkjads jhsdkjhsadhsd hdHSADL LjdljsldJ
            this goes on...<br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Book Now</Button>
              </CardActions>
            </Card>
          </Col>
          <Col sm={2} debug>

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