import { pubsub } from '@services/pubsub';
import { baseResolver } from '@resolvers/common';
import { SubscriptionResolvers } from '@schemaTypes';

setInterval(() => {
  const random = 3 + Math.round(Math.random() * 100);

  pubsub.publish('PERSON_ADDED', {
    personAdded: {
      id: random,
      name: `Name - ${random}`,
      height: 165,
    },
  });
}, 3000);

export const personAdded: SubscriptionResolvers['personAdded'] = {
  subscribe: baseResolver.createResolver(() =>
    pubsub.asyncIterator('PERSON_ADDED')
  ),
};
