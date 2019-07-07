import { baseResolver } from '@resolvers/common';
import { PersonResolvers } from '@schemaTypes';

const heightResolver: PersonResolvers['height'] = person => {
  // Code below is clearly bad, but an example of how the root object can be used in the field resolvers
  // The Person object received is from whatever resolver was use to return the Person in the query

  if (person.name === 'Jurgen') {
    return 191;
  }
  if (person.name === 'Mo') {
    return 175;
  }
  if (person.name === 'Divock') {
    return 185;
  }

  return 165;
};

export const height = baseResolver.createResolver(heightResolver);
