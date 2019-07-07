import { PromiseType } from 'utility-types';
import { dataSources } from '@dataSources';
import { UnionToIntersection } from '@utils/types';

export const contextProviders = [() => Promise.resolve({ snarf: 'test' })];
type ContextWithoutDataSources = UnionToIntersection<
  PromiseType<ReturnType<typeof contextProviders[number]>>
>;

// This context is not used here, but is used for /codegen.yml so the correct context is used for all resolver types
export type Context = ContextWithoutDataSources & {
  dataSources: ReturnType<typeof dataSources>;
};

export const createContext = async (
  headersOrConnectionParams: {},
  providers: Array<(headersOrConnectionParams: {}) => {}>
): Promise<ContextWithoutDataSources> => {
  const providerResults = await Promise.all(
    providers.map(p => p(headersOrConnectionParams))
  );

  return Object.assign({}, ...providerResults);
};
