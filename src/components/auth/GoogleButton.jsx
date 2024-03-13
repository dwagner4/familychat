
import React from 'react';
import { Button } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const GoogleButton = () => {
  const provider = new GoogleAuthProvider();

  const handleSignInWithGoogle = () => {
    console.log('Google button clicked');
  };

  return (
    <Button variant="contained" color="primary" onClick={handleSignInWithGoogle}>
      Sign In with Google
    </Button>
  );
};

export default GoogleButton;
