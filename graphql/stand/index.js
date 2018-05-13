const gql = require('graphql-tag');

const { stands } = require('../database/data');

const typeDef = gql`
    extend type Query {
        stand: [Stand]
    }
    type Stand {
        name: String!,
        type: [String!]!,
        user: StandUser
    }
`;

const resolvers = {
  Query: {
    stand: () => stands,
  },
};

module.exports = { typeDef, resolvers };
