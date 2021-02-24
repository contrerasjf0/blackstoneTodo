import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { Router, Redirect} from '@reach/router';

import Login from './views/Login/';
import Singup from './views/Signup/';
import Home from './views/Home/';

import { Context } from './Context';

import './App.css';

function App() {
  const { isAuth } = useContext(Context);

  return (
    <div className="App">
      <Grid container  justify="center">
        <Grid item xs={6}>
          <Router>
            {!isAuth && <Login path="/login" />}
            {!isAuth && <Singup path="/signup"/>}
            {!isAuth && <Redirect noThrow from="/" to="/login"/>}
            <Home default path="/"/>
          </Router>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
