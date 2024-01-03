

import React, { useState } from 'react';
import { TextField, Button, Grid, Paper } from '@mui/material';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle the login button click
  const handleLogin = () => {

  // Return the JSX structure of the login form
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <form>
            {/* Email and Password text fields */}
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Login button */}
            <Button variant="contained" color="primary" onClick={handleLogin}>
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};
};

export default LoginForm;