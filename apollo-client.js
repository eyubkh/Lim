import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import fetch from 'cross-fetch'

const authLink = setContext((_, { headers }) => {
  const token = window.localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const link = new HttpLink({
  uri: () => {
    if (process.env.GRAPHQL_URL) {
      return `${process.env.GRAPHQL_URL}/api/graphql/`
    }
    return 'http://localhost:3000/api/graphql/'
  },
  fetch,
})

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
})

export default client
