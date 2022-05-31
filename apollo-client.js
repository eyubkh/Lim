import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import fetch from 'cross-fetch'

const link = HttpLink({
  uri: 'http://localhost:3000/api/graphql/',
  fetch,
})

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

export default client
