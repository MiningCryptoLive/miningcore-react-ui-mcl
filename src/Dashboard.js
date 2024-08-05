// in src/Dashboard.js
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import { Title } from 'react-admin';

var classes;

  function FormRow() {
    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));
    classes = useStyles();
    return (
      <React.Fragment>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Pool Hashrate</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Miner(s) Online</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Current Effort</Paper>
        </Grid>
      </React.Fragment>
    );
  }

export default () => (
    <div>
        <br></br>
<Grid container spacing={1}>
  <Grid container item xs={12} spacing={3}>
    <FormRow />
  </Grid>
  <Grid container item xs={12} spacing={3}>
    <FormRow />
  </Grid>
  <Grid container item xs={12} spacing={3}>
    <FormRow />
  </Grid>
</Grid>
<br></br>

    <Card>
        <Title title="Pool Dashboard" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
    <br></br>
        <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Information
          </Typography>
          <Typography color="textSecondary">
            <a href="https://blockchair.com/dogecoin" target="_blank" rel="noopener noreferrer"> Block Explorer </a> <br />
            <a href="https://blockchair.com/dogecoin" target="_blank" rel="noopener noreferrer"> Network Stats </a>
          </Typography>
          <Typography  color="textSecondary">
            Services
          </Typography>
          <Typography variant="body2" component="p">
            <a href="https://miningrigrentals.com" target="_blank" rel="noopener noreferrer"> Mining Rig Rentals </a><br />
            <a href="https://nicehash.com" target="_blank" rel="noopener noreferrer"> Nicehash Rentals </a>
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
        </div>
);
