import { Container, Paper, Typography } from '@mui/material';
import React from 'react'
import LoginForm from '../components/Login/LoginForm';

const Login = () => {
  return (<>
    <Container>
      <Paper elevation={ 4 } style={{ width:"100%",marginTop:"4rem" }}>
        <Typography variant='h4' textAlign="center">Login</Typography>
        <LoginForm />
      </Paper>
    </Container>
  </>)
};

export default Login;