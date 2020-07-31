import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BasicSvg from './BasicSvg';
import Logo from '../components/Logo';
import HomeInfo from '../components/HomeInfo';
import { useForm } from 'react-hook-form';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://piotrjakubowski.pl/">
        piotrjakubowski.pl
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  wrapper: {
    position: 'absolute',
    left: '50%',
    top: '45%',
    transform: 'translate(-50%,-50%)',
    width: '70%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    height: 'auto',
    margin: '0 auto',
    display: 'grid',
    gridRowGap: '20px',
    gridTemplateColumns: 'repeat(2, 1fr)',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
  },
  oneColumn: {
    gridColumn: 'span 1',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    gridRow: '1 / 3',
    [theme.breakpoints.down('sm')]: {
      gridRow: '1 / 2',
      gridColumn: 'span 2',
    },
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  return (
    <div className={classes.wrapper}>
      <Container
        className={(classes.oneColumn, classes.main)}
        component="main"
        maxWidth="xs"
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Logo />
          <Typography component="h1" variant="h5">
            Zaloguj się
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit((data) => console.log(JSON.stringify(data)))}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adres email"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={register({ required: true })}
            />
            {errors.email && 'Wprowadź poprawny email'}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Hasło"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={register({ required: true })}
            />
            {errors.password && 'Wprowadź poprawne hasło'}
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  defaultValue={false}
                  name="remember"
                  color="primary"
                />
              }
              label="Zapamiętaj mnie"
              inputRef={register}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Zaloguj się
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Zapomniałeś hasła?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {'Nie masz konta? Zarejestruj się'}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
      <BasicSvg />
      <HomeInfo />
    </div>
  );
}
