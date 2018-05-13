const gql = require('graphql-tag');

const { standUsers } = require('../database/data');

const typeDef = gql`
    extend type Query {
        standUser: [StandUser]
    }
    type StandUser {
        name: String!,
        gender: String!,
        nationality: String!,
    }
`;

const resolvers = {
  Query: {
    standUser: () => standUsers,
  },
};


module.exports = { typeDef, resolvers };
