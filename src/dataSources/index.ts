import { PersonAPI } from './PersonAPI/DataSource.PersonAPI';

// This must be a function that returns a map of data sources, if ApolloServer receives a map of data sources
// only it will never recreate them and all request will be cached permanently in memory
export const dataSources = () => ({
  personAPI: new PersonAPI(),
});
