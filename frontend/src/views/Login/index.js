import React, { Component } from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import { Link } from '@reach/router';

import './index.css';

class Login extends Component {
  render() {
    return (
      <Grid className="loginView" container  justify="center" alignItems="center">
          <Paper component={Grid} elevation={3} item xs={8} container justify="center" direction="row" spacing={3}>
            <Grid item xs={8}>
              <h4>RememberMe</h4>
            </Grid>
            <Grid item xs={8}>
              <TextField
                required
                label="UserName"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                required
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={8}>
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Grid>
            <Grid item component="p" xs={12}>
              <Link to="/signup"><span>Signup with us.</span></Link>
            </Grid>
          </Paper>
      </Grid>
    )
  }
}


export default Login;
