const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const Schema = `

# Output from raspberry microphone
type MicOutput {
    decibel: Int    
}

# Output from gps collar
type GpsOutput {
    latitude: Float
    longitude: Float
}

# Root GraphQL query
type Query {
    microphone: MicOutput
    location: GpsOutput
}

type Count {
    value: Int
}

# allowed mutation
type Mutation {
    countPlay (playType: String!): Count
}   
`;

module.exports = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: resolvers
});