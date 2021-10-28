const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    role:String
  
  }
  type Auth {
    token: ID
    user: User  
  }

  type Client {
    _id:ID
    applicationID: String
    name:String
    email:String
    phone:Int
    agent:Agent
  }
type Agent {
  _id:ID
   name:String
  clients:[Client]


}
  
  type Query {

    users: [User]!
    user(userId: ID!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
    clients: [Client]
    client(clientId: ID!): Client
    agents:[Agent]
    agent(agentId: ID!): Agent
  
  }

  type Mutation {

    addUser(email: String!, password: String!, role:String): Auth
    updatePassword( password: String ): Auth
    updateUser(email: String, password: String, role:String): User
    login(email: String!, password: String!): Auth


    updateAgent(name:String!):Agent
    addAgent(name:String!):Agent

    updateClient(applicationID: String!, name:String!, email:String!, phone:Int!,agent:ID!):Client


    addNewClient(applicationID: String!, name:String!, email:String!, phone:Int!, agent:ID! ):Client

    deleteClient(clientId:ID):Client



  }
`;

module.exports = typeDefs;
