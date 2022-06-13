import resolvers from '@graphql/server/resolvers'
import typeDefs from '@graphql/server/typeDefs'
import { ApolloServer } from 'apollo-server-micro'
import jwt from 'jsonwebtoken'
import Cors from 'micro-cors'
import connectDB from '../../middleware/mongodb'

const cors = Cors()

async function getToken(token) {
  token = token.split(' ')[1]
  const object = jwt.verify(token, process.env.JWT_KEY)
  return object
}
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  context: async ({ req }) => {
    const token = req.headers.authorization || ''
    return await getToken(token)
  },
})
const startServer = apolloServer.start()

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = cors(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
})

export default connectDB(handler)
