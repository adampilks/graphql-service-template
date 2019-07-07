import { gql } from 'apollo-server';

export const Subscription = gql`
  type Subscription {
    personAdded: Person!
  }
`;
