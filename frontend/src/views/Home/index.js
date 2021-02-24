
import React, { useContext, useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Grid, Paper, IconButton, TextField, Button} from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import TodoList from '../../components/TodoList/';
import { Context } from '../../Context';
import { ADDTODO_MUTATION,
  GET_TODOS_QUERY,
  UPDATE_TODO_MUTATION,
  DELETE_TODO_MUTATION } from './operations';

import './index.css';

function Home() {
  const { removeToken } = useContext(Context);
  const [ addTodo, { loading } ]= useMutation(ADDTODO_MUTATION);
  const [ updateTodo ]= useMutation(UPDATE_TODO_MUTATION);
  const [ deleteTodo ]= useMutation(DELETE_TODO_MUTATION);
  const { loading: loadingQuery, error, data, refetch } = useQuery(GET_TODOS_QUERY, {notifyOnNetworkStatusChange: true});
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if(data && !loadingQuery){
      setTodos([ ...(data.getTodos)])
    }
  },[ data ]);

  const handlerExitClick = () => {
    removeToken();
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleDescriptionKeyDown = (e) => {
    if(e.keyCode === 13)
      handleAdd();
  }

  const handleAdd = async () => {
  
    let response;
    try{
      response = await addTodo({
        variables: {
          input: {
            description
          }
        }
      });
      setTodos([...todos, response.data.addTodo]);
    }catch(err){}

    setDescription('');
    
}

const handlerDoneCheck = (id, value) => {
  console.log(id, value)
  updateTodo({variables: { id, input: { done: value} }})
}

const handlerTodoDelete = (id) => {
  deleteTodo({variables: { id }})
  refetch();
}

  return (
    <Grid className="todoListView" container  justify="center" alignItems="center">
        <Paper component={Grid} elevation={3} item xs={10} container justify="center" direction="row" spacing={3}>
          <Grid item xs={10} container direction="column" spacing={1}>
            <Grid item >
              <TextField
                fullWidth
                placeholder="Write....."
                value={description}
                onChange={handleDescriptionChange}
                onKeyDown={handleDescriptionKeyDown}
              />
            </Grid>
            <Grid item container>
              <Button variant="contained" color="primary" onClick={handleAdd} disabled={loading}>
                Add
              </Button>
            </Grid>
            
          </Grid>
          <Grid item xs={10}>
            <TodoList todos={todos} onCheck={handlerDoneCheck} onDelete={handlerTodoDelete} />
          </Grid>
          <Grid item xs={10}>
            <IconButton aria-label="SignOut" onClick={handlerExitClick}>
              <PowerSettingsNewIcon />
            </IconButton>
          </Grid>
        </Paper>
    </Grid>
  );
}

export default Home;
