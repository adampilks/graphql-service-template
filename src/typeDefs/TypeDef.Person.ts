import { gql } from 'apollo-server';

export const Person = gql`
  type Person {
    "The unique ID of the person"
    id: ID!

    "The name of the person"
    name: String!

    # External fields below. If this field represents a separate domain from the one this server deals with, maybe
    # think about creating a new GraphQL micro-service and extend this type there?

    "Height of this person in CM"
    height: Int!
  }
`;
