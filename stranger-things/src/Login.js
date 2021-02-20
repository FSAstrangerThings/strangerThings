import React from 'react'
import './Login.css'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Strangers Things
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login() {
  const classes = useStyles();

  return (
      
    <Container component="main" maxWidth="xs" >
        <div className = 'login__intro'>
                <h1 className = 'login__title' >
                Strangers Things
                </h1>
                <h2 className = 'login__description'>
                A marketplace for buying and selling goods for the people, by the people.
                </h2>
            </div>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright/>
      </Box>
    </Container>
  );
}


// function Login() {
//     return (
//     <div>
//             <div className = 'login__intro'>
//                 <h1 className = 'login__title' >
//                 Strangers Things
//                 </h1>
//                 <h2 className = 'login__description'>
//                 A marketplace for buying and selling goods for the people, by the people.
//                 </h2>
//             </div>
//         <form>
//         <CustomInput
//             labelText="Email"
//             id="email"
//             formControlProps={{
//               fullWidth: true
//             }}
//             handleChange={this.handleChange}
//             type="text"
//           />
//           <CustomInput
//             labelText="Password"
//             id="password"
//             formControlProps={{
//               fullWidth: true
//             }}
//             handleChange={this.handleChange}
//             type="password"
//           />

//           <Button type="button" color="primary" className="form__custom-button">
//             Log in
//           </Button>
//         </form>

//     </div>
//     )
// }

export default Login
