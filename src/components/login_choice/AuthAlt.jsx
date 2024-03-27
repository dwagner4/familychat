import React, {useState} from 'react';
import {
  Avatar,
  TextField,
  Typography,
  Button,
  Box,
  Container,
 
  FormControl,
  FormHelperText,
  Link,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";

import CssBaseline from '@mui/material/CssBaseline';

import FormControlLabel from '@mui/material/FormControlLabel';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import GoogleButton from 'react-google-button';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const AuthAlt = () => {

  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleClose = () => {
    setOpen(false);
  }

  const openAccountDialog = () => {
    setOpen(true);
  }

  const submitCreatAcct = () => {
    setOpen(false);
  }

  return (
      <Container component="main" maxWidth="xs">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 8,
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#f0f0f0'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
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
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Button>
                  Forgot password?
                </Button>
              </Grid>
              <Grid item xs>
                <Button onClick={openAccountDialog}>
                  Create Account?
                </Button>
              </Grid>
              
              <div>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Create a new account</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      To create a new account, please enter your email address and password.
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="email"
                      label="Email Address"
                      type="email"
                      fullWidth
                      variant="standard"
                    />
                    <TextField
                      margin="dense"
                      id="password"
                      label="Password"
                      type="password"
                      fullWidth
                      variant="standard"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={submitCreatAcct}>Create</Button>
                  </DialogActions>
                </Dialog>
              </div>
            </Grid>
            <Grid container>
              <Grid item  sx={{ mt: 3, mb: 2 }}>
                <GoogleButton
                  onClick={() => { console.log('Google button clicked') }}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    
  );
}

export default AuthAlt