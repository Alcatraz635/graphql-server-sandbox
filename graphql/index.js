const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const merge = require('lodash.merge');

const {
  typeDef: Stand,
  resolvers: standResolvers,
} = require('./stand');
const {
  typeDef: StandUser,
  resolvers: standUserResolvers,
} = require('./stand-user');

const Query = `
  type Query {
    _empty: String
  }
`;

const resolvers = {};

const schema = makeExecutableSchema({
  typeDefs: [Query, Stand, StandUser],
  resolvers: merge(resolvers, standResolvers, standUserResolvers),
});

module.exports = (app) => {
  app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
};
