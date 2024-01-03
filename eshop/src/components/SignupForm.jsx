import React, { useState } from 'react';
import { TextField, Button, Grid, Paper } from '@mui/material';

const SignupForm = () => {
  // State variables to store input values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  // Function to handle the signup button click
  const handleSignup = () => {
    // Actual signup logic would go here
  };

  // Return the JSX structure of the signup form
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <form>
            {/* First Name, Last Name, Email, Password, and Contact Number text fields */}
            <TextField
              label="First Name"
              fullWidth
              margin="normal"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              label="Last Name"
              fullWidth
              margin="normal"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
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
            <TextField
              label="Contact Number"
              fullWidth
              margin="normal"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
            {/* Signup button */}
            <Button variant="contained" color="primary" onClick={handleSignup}>
              Signup
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignupForm;
