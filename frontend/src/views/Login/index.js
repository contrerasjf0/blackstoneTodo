import React, { useState, useContext } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from '@reach/router';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import  validateEmptyFields from '../../utils/validate';
import { Context } from '../../Context';
import { LOGIN_MUTATION } from './operations';

import './index.css';

const dafaultState = { 
  userName: '',
  password: ''
};

const validFormState = { 
  valid: true,
  input: '',
  message: ''
};

function Login() {

  const [ login, { loading } ]= useMutation(LOGIN_MUTATION);
  const [ loginData, setLoginData] = useState(dafaultState);
  const [errors, setErrors] = useState();
  const [validForm, setValidForm] = useState(validFormState);
  const { setToken } = useContext(Context);
  const navigate = useNavigate();

  const handleChange = (name, value) => {
    setLoginData(
      {
        ...loginData,
        [name]: value
      }
    );
  }

  const handleLoginClick = async () => {
      const validFormData = validateEmptyFields( loginData, 'It is required this field');

      if(validFormData){
        setValidForm(validFormData);
        return;
      }

      let response;
      try{
        response = await login({variables: {...loginData}});
        setToken(response.data.login.token);
      }catch(err){}

      if(!response.errors){
        setLoginData(dafaultState);
        navigate('/');
      }else{
        setErrors(response.errors);
      }
  }

  return (
    <Grid className="loginView" container  justify="center" alignItems="center">
        <Paper component={Grid} elevation={3} item xs={8} container justify="center" direction="row" spacing={3}>
          <Grid item xs={8}>
            <h4>RememberMe</h4>
          </Grid>
          {
              errors && (
                <Grid component={Alert} item xs={8} severity="error" variant="filled">
                {errors.message}
                </Grid>
              )
          }
          <Grid item xs={8}>
            <TextField
              required
              label="UserName"
              variant="outlined"
              fullWidth
              margin="normal"
              name="userName"
              valuse={loginData.userName}
              onChange={(e) => handleChange('userName', e.target.value)}
              error={(!validForm.valid && validForm.input === 'userName')}
              helperText={(!validForm.valid && validForm.input === 'userName')? validForm.message : ''}
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
              name="password"
              valuse={loginData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              error={(!validForm.valid && validForm.input === 'password')}
              helperText={(!validForm.valid && validForm.input === 'password')? validForm.message : ''}
            />
          </Grid>
          <Grid item xs={8}>
            <Button variant="contained" color="primary" disabled={loading} onClick={handleLoginClick}>
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

export default Login;
