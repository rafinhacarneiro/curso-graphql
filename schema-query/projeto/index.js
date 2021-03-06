const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')

const server = new ApolloServer({
    typeDefs: importSchema('schema/index.graphql'),
    resolvers: require('./resolvers')
})

server.listen(80).then( ({ url }) => {
    console.log(`Servindo em ${url}...`)
})