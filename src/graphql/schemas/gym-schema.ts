import gql from "graphql-tag";

export const gymTypeDefs = gql`
  type Gym {
    id: ID!
    name: String!
    ownerid: String!
    title: String!
    postition: [String!]!
    image: [String!]!
    rate: String!
    pending: Boolean!
  }

  input GymRegisterInput {
    name: String!
    ownerid: String!
    title: String!
    postition: [String!]!
    image: [String!]!
    rate: String!
  }

  input GymDeleteInput {
    id: String!
  }
  input GymChangeStatusInput {
    id: String!
  }
  type Query {
    getGyms: [Gym]!
    getGym(id: ID!): Gym
  }

  type Mutation {
    registerGym(input: GymRegisterInput!): Gym!
    deleteGym(input: GymDeleteInput!): Gym!
    changeStatusGym(input: GymChangeStatusInput): Gym!
  }
`;
