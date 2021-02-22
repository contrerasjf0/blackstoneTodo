import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core'

class Login extends Component {
  render() {
    return (
      <Grid container  justify="center" alignItems="center">
          <Paper component={Grid} elevation={3} item xs={8} container >
            Hi
          </Paper>
      </Grid>
    )
  }
}


export default Login;
