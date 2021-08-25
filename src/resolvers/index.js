const pedidosResolver = require('./pedidosResolver');
const inventarioResolver = require('./inventarioResolver');
const autenticacionResolver = require('./autenticacionResolver');

const lodash = require('lodash');

const resolvers = lodash.merge(pedidosResolver, inventarioResolver, autenticacionResolver);

module.exports = resolvers;