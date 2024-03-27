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

const authActor = AppActor.system.get('authMachine')

const LoginIDPW = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

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
    console.log("handleSubmit")
    authActor.send({ type: "LOGIN_SUBMIT", params: {email: email, pw: password } })
  };

  const handleCreateAccount = (event) => {
    event.preventDefault();
    authActor.send({ type: "CREATE_ACCOUNT", params: {email: email, pw: password } })
  };

  const handleClose = () => {
    authActor.send({ type: "CANCEL" })
  };


  return (
    <Root>
      <Dialog open={true} onClose={handleClose}>
        <DialogTitle>Login or Create a new account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To login or create a new account, please enter your email address and password.
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
    </Root>
  );
};

export { LoginIDPW }