import { gql } from 'apollo-server';

export const Query = gql`
  type Query {
    "Get all people"
    people: [Person!]!

    "Get a single person with the given id"
    person(id: ID!): Person
  }
`;
