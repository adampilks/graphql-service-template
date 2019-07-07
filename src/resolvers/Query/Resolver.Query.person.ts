import { baseResolver } from '@resolvers/common';
import { QueryResolvers } from '@schemaTypes';

const personResolver: QueryResolvers['person'] = (_, args, context, info) =>
  context.dataSources.personAPI.getPersonById(args.id);

export const person = baseResolver.createResolver(personResolver);
