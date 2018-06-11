//@ts-check
import React, { Component, Fragment } from 'react';
import { Typography, Grid, Icon, Avatar } from '@material-ui/core';
import { explainers } from '../store';


const styles = {
    explain: {
        backgroundColor: '#F9FAFB',
        marginTop: 20,
        marginBottom: 20,
        padding: 20,
        paddingTop: '6em',
    },
    icons: {
        fontSize: '100px',
    }
}
class ExplainView extends Component {
    render() {
        return (
            <div style={styles.explain}>
                <Grid>
                    <Typography
                        gutterBottom
                        variant="display1"
                        component="h2"
                        style={{ textAlign: "center", marginBottom: '1em' }}
                    >
                        How It Works
                        </Typography>
                </Grid>
                <Grid container justify="center" spacing={16}>
                    <Grid item sm={6} xs={12}>
                        {
                            explainers.map((item, index) =>

                                <Grid container direction={index % 2 == 0 ? "row-reverse" : "row"} spacing={24} key={index} style={styles.icons}>
                                    <Grid item sm={4} xs={2} style={{ alignSelf: 'baseline' }}>
                                    <i className={`fas ${item.icon}`} style={{color: '#bdbdbd'}}></i>
                                    </Grid>
                                    <Grid item sm={8} xs={10}>
                                        <Fragment>
                                            <div style={{ display: 'flex' }}>
                                                <Avatar>{index + 1}</Avatar>
                                                <Typography
                                                    align="left"
                                                    variant="title"
                                                    style={{ padding: 10, color: '#0000008a' }}
                                                >
                                                    {item.title}

                                            </Typography>
                                            </div>
                                            <Typography align="left">
                                                {item.description}
                                    </Typography>
                                        </Fragment>
                                    </Grid>
                                </Grid>
                            )
                        }
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default ExplainView;