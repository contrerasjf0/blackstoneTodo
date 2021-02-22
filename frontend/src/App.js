import './App.css';
import { Grid } from '@material-ui/core';

import Login from './views/Login';



function App() {
  return (
    <div className="App">
      <Grid container  justify="center">
        <Grid item xs={6}>
            <Login/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
