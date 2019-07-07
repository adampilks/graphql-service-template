import {
  createError,
  ApolloError as OriginalApolloError,
  ErrorConfig,
} from 'apollo-errors';

export declare class PartiallyConstructedApolloError extends OriginalApolloError {
  constructor(name?: string, config?: ErrorConfig, ctorConfig?: ErrorConfig);
}

export const UnknownError: typeof PartiallyConstructedApolloError = createError(
  'UnknownError',
  {
    message: 'Something went wrong, maybe try again or contact us to help out',
  }
);
