import React, {useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,


  FormControl,
  FormHelperText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { AppActor } from '../../fsm/AppActor';

const LoginIDPW = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [open, setOpen] = useState(true);

  const Root = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    // backgroundColor: "orange"
  }));

  const handleSubmit = (event) => { 
    event.preventDefault();
    AppActor.send({ type: "SUBMIT", params: {email: email, pw: password } })
  };

  const handleCreateAccount = (event) => {
    event.preventDefault();
    AppActor.send({ type: "CREATE_ACCOUNT", params: {email: email, pw: password } })
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Root>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} variant="contained">Login</Button>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreateAccount}>Create</Button>
        </DialogActions>
      </Dialog>
      {/* <Typography variant="h4">Login</Typography>
      <Form onSubmit={handleSubmit}>
        <InputField label="Email" type="email" />
        <InputField label="Password" type="password" />
        <ButtonContainer>
          <Button type="submit" variant="contained">
            Login
          </Button>
          <Button variant="outlined" onClick={handleCreateAccount} >Create Account</Button>
          <Button variant="outlined" color="error">
            Cancel
          </Button>
        </ButtonContainer>
      </Form> */}
    </Root>
  );
};

export { LoginIDPW }