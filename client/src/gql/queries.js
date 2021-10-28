import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      email
      role
    }
  }
`;

export const QUERY_SINGLE_USER= gql`
  query singleUser($userId: ID!) {
    users(userID: $UserId) {
      _id
      name
      role
    }
  }
`;




export const QUERY_CLIENT = gql`
  {
    client {
      _id
      applicationID
      name
      email
      phone
      agentId
    }
  }`;

  export const QUERY_ME = gql`
  query me {
    me {
      _id
     email
     role
    }
  }
`;