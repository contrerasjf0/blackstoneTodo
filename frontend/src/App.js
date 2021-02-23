import './App.css';
import { Grid } from '@material-ui/core';
import { Router } from '@reach/router';

import Login from './views/Login/';
import Singup from './views/Signup/';

function App() {
  return (
    <div className="App">
      <Grid container  justify="center">
        <Grid item xs={6}>
          <Router>
            <Login path='login' />
            <Singup path='signup'/>
          </Router>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
