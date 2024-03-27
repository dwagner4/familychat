
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

const authActor = AppActor.system.get('authMachine')

console.log(authActor)


const LoginButtonPanel = () => {

  const handleIDPW  = () => {
    authActor.send({ type: "LOGIN_PW" })
    console.log("fuck you")
  }

  const handleGoogle  = () => {
    console.log("hey")
    authActor.send({ type: "LOGIN_GOOGLE" })
  }

  return (
    <Root>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        my={4}
        gap={4}
        p={4}
        sx={{ border: '2px solid grey', backgroundColor: 'black' }}
      >
        <Button variant="contained" color="primary" onClick={handleIDPW} >use Password</Button>
        <Button variant="contained" color="secondary" onClick={handleGoogle} >Google</Button>
      </Box>
    </Root>
  );
}

export { LoginButtonPanel }