import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
    }
  }
`;
