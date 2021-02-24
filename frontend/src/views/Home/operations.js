import { gql } from '@apollo/client';

export const ADDTODO_MUTATION = gql`
mutation AddTodo($input: TodoInput!) {
  addTodo(input: $input) {
    _id
    description
    done
    creatAt
  }
}
`

export const UPDATE_TODO_MUTATION = gql`
mutation UpdateTodo($id: ID!, $input: TodoEditInput!) {
  updateTodo(_id: $id, input: $input) {
    _id
    description
    done
    creatAt
  }
}
`

export const GET_TODOS_QUERY = gql`
query GetTodos {
  getTodos {
    _id
    description
    done
    creatAt
  }
}
`

export const DELETE_TODO_MUTATION = gql`
mutation DeleteTodo($id: ID!) {
  deleteTodo(_id: $id) {
    id
    deletedCount
  }
}
`
