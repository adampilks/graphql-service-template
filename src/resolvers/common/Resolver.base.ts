import { createResolver } from 'apollo-resolvers';
import { isInstance } from 'apollo-errors';
import { UnknownError, PartiallyConstructedApolloError } from '@errors';

export const baseResolver = createResolver<
  null,
  PartiallyConstructedApolloError
>(
  // no resolver here, just error handling to hide any unexpected errors from being sent to the client
  null,

  // resolve the error, if a known error allow it to be sent, if not then return a generic formatted error
  (root, args, context, error) => {
    return isInstance(error) ? error : new UnknownError();
  }
);
