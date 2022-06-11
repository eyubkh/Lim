import { ApolloServer } from 'apollo-server-micro'
import jwt from 'jsonwebtoken'
// import Cors from 'micro-cors'
import resolvers from '../../graphql/resolvers'
import typeDefs from '../../graphql/typeDefs'
import connectDB from '../../middleware/mongodb'

// const cors = Cors()
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

const allowCors = (fn) => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const handler = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}

// const handler = cors(async (req, res) => {
//   if (req.method === 'OPTIONS') {
//     res.end()
//     return false
//   }
//   await startServer
//   await apolloServer.createHandler({
//     path: '/api/graphql',
//   })(req, res)
// })

export default allowCors(connectDB(handler))
