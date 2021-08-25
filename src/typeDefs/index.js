//Se llama al typedef (esquema) de cada submodulo
const ordenesTypeDefs = require('./ordenesTypeDefs');
//const transacctionTypeDefs = require('./transactionsTypeDef');
//const usersTypeDefs = require('./usersTypeDef');

//Se unen
//const schemasArrays = [accountTypeDefs, transacctionTypeDefs, usersTypeDefs];
const schemasArrays = [ordenesTypeDefs];
//Se exportan
module.exports = schemasArrays; 