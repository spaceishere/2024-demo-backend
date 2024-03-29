import gql from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    image: String
  }
  input UserRegisterInput {
    name: String!
    email: String!
    password: String!
    image: String!
  }
  type UserPublicInfo {
    id: ID!
    name: String!
    email: String!
    image: String
  }
  input UserLogininput {
    email: String!
    password: String!
  }
  type AuthPayload {
    token: String!
    user: UserPublicInfo!
  }

  type Query {
    getUsers: [User]!
    getUser(id: ID!): User
  }

  type Mutation {
    registerUser(input: UserRegisterInput!): User!
    loginUser(input: UserLogininput!): AuthPayload!
  }
`;
