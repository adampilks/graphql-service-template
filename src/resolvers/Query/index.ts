import { QueryResolvers } from '@schemaTypes';
import { people } from './Resolver.Query.people';
import { person } from './Resolver.Query.person';

export const Query: QueryResolvers = {
  people,
  person,
};
