import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';

import TodoItem from '../TodoItem/';

function TodoList({todos = [], onDelete, onCheck}) {
  return (
    <List>
      {
        todos.map((todo, index) => (
          <TodoItem
            key={`TO-${index}`}
            todo={todo}
            onDelete={onDelete}
            onCheck={onCheck}
          />
        ))
      }
    </List>
  );
}

TodoItem.protoTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    description: PropTypes.string,
    creatAt: PropTypes.string,
    done: PropTypes.bool,
  })),
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default TodoList;
