import { baseResolver } from '@resolvers/common';
import { QueryResolvers } from '@schemaTypes';

const peopleResolver: QueryResolvers['people'] = async (root, args, context) =>
  context.dataSources.personAPI.getPeople();

export const people = baseResolver.createResolver(peopleResolver);
