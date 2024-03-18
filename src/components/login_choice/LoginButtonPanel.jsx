
import React from 'react';
import {
  Button,
  Box,
} from '@mui/material';
import { AppActor } from '../../fsm/AppActor.js'



const LoginButtonPanel = () => {

  const handleIDPW  = () => {
    AppActor.send({ type: "LOGIN_PW_ID" })
  }

  const handleGoogle  = () => {
    console.log("hey")
    AppActor.send({ type: "LOGIN_GOOGLE" })
  }


  return (
    <Box
      height={200}
      width={400}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
      <Button variant="contained" color="primary" onClick={handleIDPW} >
        Login with ID and Password
      </Button>
    
      <Button variant="contained" color="secondary" onClick={handleGoogle} >
        Sign in with Google
      </Button>
    </Box>
  );
}

export { LoginButtonPanel }