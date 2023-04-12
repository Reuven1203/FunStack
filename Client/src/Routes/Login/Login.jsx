import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import background from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        FunStack
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const [firstName, setFirstName] = React.useState('');
  const [pinValue, setPin] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleNameChange = (event) => {
    setFirstName(event.target.value);
    setIsSubmitted(false);
  };

  const handlePinChange = (event) => {
    setPin(event.target.value);
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('email');
    const pin = data.get('password');
    setIsSubmitted(true);
    if (name.trim() === '' || pin.trim() === '') {
      return;
    }
    window.location.href = '/home';
  };

  const nameError = isSubmitted && firstName.trim() === '';
  const pinError = isSubmitted && pinValue.trim() === '';

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '8rem',
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                helperText="Please enter your First Name (e.g. 'John'))"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Name"
                name="email"
                autoComplete="email"
                autoFocus
                value={firstName}
                onChange={handleNameChange}
                error={nameError}
                color={nameError ? 'error' : 'primary'}
              />
              <TextField
                helperText="Please enter your 4-Digit Pin (e.g. '1234'))"
                margin="normal"
                required
                fullWidth
                name="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="4-Digit Pin"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                value={pinValue}
                onChange={handlePinChange}
                error={pinError}
                color={pinError ? 'error' : 'primary'}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
