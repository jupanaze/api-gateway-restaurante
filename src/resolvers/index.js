const pedidosResolver = require('./pedidosResolver');
//const transactionResolver = require('./transactionsResolver');
//const userResolver = require('./usersResolver');

const lodash = require('lodash');

const resolvers = lodash.merge(pedidosResolver);

module.exports = resolvers;