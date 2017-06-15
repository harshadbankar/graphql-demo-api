const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');
const Schema = `
    # Repository type
    type Repository {
        name: String
        public: Boolean
    }
    # Build type
        type Build {
        name: String
        state: String
        number: Int
    }
    # Project type
    type Project {
        key: String
        repository: Repository
        builds: [Build]
    }
    # Root GraphQL query
    type Query {
    # Retrieve details of a specific project
        project(key: String!): Project
    }
`;
module.exports = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: resolvers
});