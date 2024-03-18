import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';

const Root = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
}));

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const InputField = styled(TextField)({
  width: '100%',
  maxWidth: '300px',
  margin: '16px 0',
});

const ButtonContainer = styled(Box)({
  display: 'flex',
  gap: '16px',
});

export const LoginIDPW = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <Root>
      <Typography variant="h4">Login</Typography>
      <Form onSubmit={handleSubmit}>
        <InputField label="Email" type="email" />
        <InputField label="Password" type="password" />
        <ButtonContainer>
          <Button type="submit" variant="contained">
            Login
          </Button>
          <Button variant="outlined">Create Account</Button>
          <Button variant="outlined" color="error">
            Cancel
          </Button>
        </ButtonContainer>
      </Form>
    </Root>
  );
};
