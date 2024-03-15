
import React from 'react';
import {
  Button,
  Box,
} from '@mui/material';



const LoginButtonPanel = () => {

  return (
    <Box>
      <Button variant="contained" color="primary">
        Email/Password
      </Button>
      <Button variant="contained" color="secondary">
        Sign in with Google
      </Button>
    </Box>
  );
}

export { LoginButtonPanel }