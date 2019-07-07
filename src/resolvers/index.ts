import { Query } from './Query';
import { Subscription } from './Subscription';
import { Person } from './Person';
import { IResolvers } from '@schemaTypes';

export const resolvers: IResolvers = {
  Query,
  Subscription,
  Person,
};
