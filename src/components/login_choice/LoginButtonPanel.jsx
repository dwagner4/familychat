
import React from 'react';
import {
  Button,
  Box,
  Container,
  styled
} from '@mui/material';
import { AppActor } from '../../fsm/AppActor.js'

const Root = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
}));


const LoginButtonPanel = () => {

  const handleIDPW  = () => {
    AppActor.send({ type: "LOGIN_PW_ID" })
  }

  const handleGoogle  = () => {
    console.log("hey")
    AppActor.send({ type: "LOGIN_GOOGLE" })
  }

  return (
    <Root>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        my={4}
        gap={4}
        p={2}
        sx={{ border: '2px solid grey', backgroundColor: 'red' }}
      >
        <Button variant="contained" color="primary" onClick={handleIDPW} >use Password</Button>
        <Button variant="contained" color="secondary" onClick={handleGoogle} >Google</Button>
      </Box>
    </Root>
  );
}

export { LoginButtonPanel }