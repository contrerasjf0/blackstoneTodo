
import React, { useContext } from 'react';
import { Grid, Paper, IconButton} from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import { Context } from '../../Context';

import './index.css';

function Home() {
  const { removeToken } = useContext(Context);
  const handlerExitClick = () => {
    removeToken();
  };

  return (
    <Grid className="todoListView" container  justify="center" alignItems="center">
        <Paper component={Grid} elevation={3} item xs={10} container justify="center" direction="row" spacing={3}>
          <Grid item>
            
          </Grid>
          <Grid item>
            
          </Grid>
          <Grid item>
            <IconButton aria-label="SignOut" onClick={handlerExitClick}>
              <PowerSettingsNewIcon />
            </IconButton>
          </Grid>
        </Paper>
    </Grid>
  );
}

export default Home;
