//Se llama al typedef (esquema) de cada submodulo
const ordenesTypeDefs = require('./ordenesTypeDefs');
const inventarioTypeDefs = require('./inventarioTypeDef');
const autenticacionTypeDefs = require('./autenticacionTypeDef');
//const transacctionTypeDefs = require('./transactionsTypeDef');
//const usersTypeDefs = require('./usersTypeDef');

//Se unen
//const schemasArrays = [accountTypeDefs, transacctionTypeDefs, usersTypeDefs];
const schemasArrays = [ordenesTypeDefs, inventarioTypeDefs, autenticacionTypeDefs];
//Se exportan
module.exports = schemasArrays; 