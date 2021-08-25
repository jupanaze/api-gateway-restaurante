
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const PedidosAPI = require('./dataSources/pedidosApi');
const UsersAPI = require('./dataSources/usersApi');
const authentication = require('./util/authentication');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        pedidosAPI: new PedidosAPI(),
        //usersAPI: new UsersAPI(),
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});