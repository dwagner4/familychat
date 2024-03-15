
import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  FormControl,
  FormHelperText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import {AppActor} from "../../src/fsm/AppActor";


const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [open, setOpen] = useState(false);
  const [authFsmRef, setAuthFsmRef] = useState(null);

  // AppActor.subscribe((snapshot) => {
  //   console.log(snapshot)
  //   setAuthFsmRef(snapshot.context.authMachineRef)
  // })

  useEffect(() => {
    const snap = AppActor.getSnapshot()
    setAuthFsmRef(snap.context.authMachineRef)
  }, [])

  const validateEmail = (email) => {
    return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleClickOpen = () => {
    AppActor.send({
      type: "CREATE_ACCOUNT",})
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitCreatAcct = () => {
    console.log(authFsmRef)
    authFsmRef.send({type: "SUBMIT_ID_PW", payload: {email: "yoho", password: "heha"}});
  }

  // const provider = new GoogleAuthProvider();

  const handleSignInWithGoogle = () => {
    console.log('Google button clicked');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isFormValid = true;

    if (!email || !validateEmail(email)) {
      setEmailError(true);
      isFormValid = false;
    }

    if (!password || !validatePassword(password)) {
      setPasswordError(true);
      isFormValid = false;
    }

    if (isFormValid) {
      // Submit the form data here
      console.log("Form submitted successfully");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
      <br />
      <br />
      <br />
        <FormControl error={emailError}>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <FormHelperText>Please enter a valid email address</FormHelperText>
          )}
        </FormControl>
        <br />
        <FormControl error={passwordError}>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <FormHelperText>
              Password must be at least 8 characters long
            </FormHelperText>
          )}
        </FormControl>
        <br />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
      
      <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create New Account
      </Button>
      </div>
      
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
      <Button variant="contained" color="primary" onClick={handleSignInWithGoogle}>
        Sign In with Google
      </Button>
    </div>
  );
};



export default Auth
