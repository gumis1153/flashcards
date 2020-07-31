import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    // opacity: 0.5,
    background: 'rgba(255, 255, 255, 0.0)',
    gridColumn: '2 / span 1',
    border: 'none',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  thin: {
    textTransform: 'uppercase',
  },
});

export default function HomeInfo() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h2" component="h2">
          flashCard
        </Typography>
        <Typography className={classes.thin} variant="body1" component="span">
          Poznawaj języki i ich słówka
        </Typography>

        {/* <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Pare minut pare słów
        </Typography>
        <Typography variant="h5" component="h2">
          flashCard nauczy Cię nowych słówek szybciej niż myślisz
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Zarządzaj w łatwy sposób
        </Typography>
        <Typography variant="body2" component="p">
          Wprowadzaj w łatwy sposób swoje słówka.
          <br /> Nakuka dawno nie była tak przyjemna
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Czytaj więcej</Button>
      </CardActions> */}
    </Paper>
  );
}
