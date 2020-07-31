import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  font: {
    fontSize: '14px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '10px',
    },
  },
}));

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab className={classes.font} label="Utwórz nową fiszkę" />
        <Tab className={classes.font} label="Moje fiszki" />
        <Tab className={classes.font} label="Moje konto" />
      </Tabs>
    </Paper>
  );
}
