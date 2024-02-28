
import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  FormHelperText,
} from "@mui/material";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateEmail = (email) => {
    return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
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
      <Button>
        Register account
      </Button>
      <Button>
        Forgot Password
      </Button>
    </div>
  )
};

export default Auth
