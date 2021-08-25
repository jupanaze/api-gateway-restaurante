
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const PedidosAPI = require('./dataSources/pedidosApi');
const authentication = require('./util/autenticacion');
const AutenticacionAPI = require('./dataSources/autenticacionApi');
const InventarioAPI = require('./dataSources/inventarioApi');
const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => {
        return{
            pedidosAPI: new PedidosAPI(),
            autenticacionAPI: new AutenticacionAPI(),
            autenticacionApi: new AutenticacionAPI(),
            inventarioApi: new InventarioAPI()
        }
    },
    introspection: true,
    playground: true
});

server.listen(4000).then(res => {
    console.log(`🚀  Server ready at ${res.url}`);
})
//server.listen(process.env.PORT || 4000).then(({ url }) => {
//    console.log(`🚀  Server ready at ${url}`);
//});