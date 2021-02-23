import { gql } from '@apollo/client';

export const SIGNUP_MUTATION = gql`
mutation SingUp($input: UserInput!) {
  singUp(input: $input) {
    _id
  }
}
`
