import { ApolloServer, ServerInfo } from 'apollo-server';
import { typeDefs } from '@typeDefs';
import { resolvers } from '@resolvers';
import { dataSources } from '@dataSources';
import { createContext, contextProviders } from '@context';

const server = new ApolloServer({
  context: async ({ req, connection }) => {
    if (connection) {
      // this is a websocket connection which has already resolved it's context onConnect
      return connection.context;
    }

    return createContext(req.headers, contextProviders);
  },
  subscriptions: {
    onConnect: connectionParams => {
      // here we want to use the connectionParams to generate the context
      createContext(connectionParams, contextProviders);
    },
  },
  typeDefs,
  resolvers,
  dataSources,
});

server.listen().then(({ url, subscriptionsUrl, address }: ServerInfo) => {
  console.log(`🚀  Server ready at ${url}`);
  console.log(`🔌 Subscriptions ready at ${subscriptionsUrl}`);
});
