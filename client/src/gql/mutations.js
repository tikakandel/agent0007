import { gql, useMutation  } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        role
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $email: String!
    $password: String!
    $role: String!
  ) {
    addUser(
      email: $email
      password: $password
      role:$role
    ) {
      token
      user {
        _id
        email
        role
      }
    }
  }
`;

export const ADD_CLIENT = gql`
  mutation addNewClient(
    $applicationID: String!,
    $name: String!,
    $email: String!,
    $phone: Number!,
    $agent: String!
  
  ) {
    addNewClient(
      applicationID: $applicationID,
      name: $name,
      email:$email,
      phone:$phone,
      agent:$agent

    )
    newClient
    
    
  }
`;
