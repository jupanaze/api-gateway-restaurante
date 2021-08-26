const pedidosResolver = require('./pedidosResolver');
const inventarioResolver = require('./inventarioResolver');
const autenticacionResolver = require('./autenticacionResolver');

const lodash = require('lodash');

const resolvers = lodash.merge(autenticacionResolver, inventarioResolver, pedidosResolver );

module.exports = resolvers;