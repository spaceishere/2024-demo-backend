import gql from "graphql-tag";

export const gymManagerTypeDefs = gql`
  type GymManager {
    id: ID!
    email: String!
    password: String!
    name: String!
  }

  input GymManagerRegisterInput {
    email: String!
    password: String!
    name: String!
  }

  type ManagerPublicInfo {
    id: ID!
    name: String!
    email: String!
  }
  input ManagerLogininput {
    email: String!
    password: String!
  }
  type AuthManagerload {
    token: String!
    manager: ManagerPublicInfo!
  }

  type Query {
    getManagers: [GymManager]!
    getManager(id: ID!): GymManager
  }

  type Mutation {
    registerManager(input: GymManagerRegisterInput!): GymManager!
    loginManager(input: ManagerLogininput!): AuthManagerload!
  }
`;
