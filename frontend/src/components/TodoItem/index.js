import React, {useState} from 'react';
import { ListItem,
    IconButton,
    ListItemIcon,
    ListItemText, 
    ListItemSecondaryAction, 
    Checkbox
  }  from '@material-ui/core';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';

function TodoItem({ todo, onDelete, onCheck}) {
  const [done, setDone] = useState(todo.done);
  const handlerDoneCheck = () => {
    setDone(!done);
    onCheck(todo._id, !done);
  }

  return (
    <ListItem dense>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={done}
          onChange={handlerDoneCheck}
        />
      </ListItemIcon>
      <ListItemText primary={todo.description} secondary={todo.creatAt}/>
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="Delete" onClick={() => onDelete(todo._id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

TodoItem.protoTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    description: PropTypes.string,
    creatAt: PropTypes.string,
    done: PropTypes.bool,
  }),
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired

};

export default TodoItem;


