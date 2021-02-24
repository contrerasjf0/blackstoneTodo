import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from '@reach/router';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Link } from '@reach/router';

import { SIGNUP_MUTATION } from './operations';

import './index.css';

const dafaultState = { 
  fullName: '',
  email: '',
  userName: '',
  password: ''
};

const validFormState = { 
  valid: true,
  input: '',
  message: ''
};

function Signup() {
    const [ signUp, { loading } ]= useMutation(SIGNUP_MUTATION, { ignoreResults: true });
    const [signUpData, setSignUpData] = useState(dafaultState);
    const [errors, setErrors] = useState();
    const [validForm, setValidForm] = useState(validFormState);
    const navigate = useNavigate();

    const handleChange = (name, value) => {
      setSignUpData(
        {
          ...signUpData,
          [name]: value
        }
      );
    }

    const handleSigUpClick = async () => {
        for (const key in signUpData) {
          if(signUpData[key] === ''){
            setValidForm({
              valid: false,
              input: key,
              message: 'It is required this field'
            });
            return;
          }
        }
        let response;
        try{
          response = await signUp({variables: {input: signUpData}});
        }catch(err){}

        if(!response.errors){
          setSignUpData(dafaultState);
          navigate('login');
        }else{
          setErrors(response.errors);
        }
    }
    
    return (
      <Grid className="signupView" container  justify="center" alignItems="center">
          <Paper component={Grid} elevation={3} item xs={8} container justify="center" direction="row" spacing={3}>
            <Grid item xs={8}>
              <h4>SignUp to RememberMe</h4>
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
                label="Fullname"
                variant="outlined"
                fullWidth
                margin="normal"
                name="fullName"
                valuse={signUpData.fullname}
                onChange={(e) => handleChange('fullName', e.target.value)}
                error={(!validForm.valid && validForm.input === 'fullName')}
                helperText={(!validForm.valid && validForm.input === 'fullName')? validForm.message : ''}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                required
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                name="email"
                valuse={signUpData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                error={(!validForm.valid && validForm.input === 'email')}
                helperText={(!validForm.valid && validForm.input === 'email')? validForm.message : ''}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                required
                label="UserName"
                variant="outlined"
                fullWidth
                margin="normal"
                name="userName"
                valuse={signUpData.userName}
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
                valuse={signUpData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                error={(!validForm.valid && validForm.input === 'password')}
                helperText={(!validForm.valid && validForm.input === 'password')? validForm.message : ''}
              />
            </Grid>
            <Grid item xs={8}>
              <Button variant="contained" color="primary" disabled={loading} onClick={handleSigUpClick}>
                SignUp
              </Button>
            </Grid>
            <Grid item component="p" xs={12}>
              <Link to="/login"><span>Login</span></Link>
            </Grid>
          </Paper>
      </Grid>
    )
}


export default Signup;
