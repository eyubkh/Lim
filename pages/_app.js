import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import '../styles/globals.css'
import { ErrorHandlerProvider } from '../utils/errorHandlerUI'

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ErrorHandlerProvider>
        <Component {...pageProps} />
      </ErrorHandlerProvider>
    </ApolloProvider>
  )
}
