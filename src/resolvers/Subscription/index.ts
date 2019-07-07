import { personAdded } from './Resolver.Subscription.personAdded';
import { SubscriptionResolvers } from '@schemaTypes';

export const Subscription: SubscriptionResolvers = {
  personAdded,
};
