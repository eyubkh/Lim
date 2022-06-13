import { ApolloProvider } from '@apollo/client'
import { ErrorHandlerProvider } from '@utils/errorHandlerUi'
import client from '../apollo-client'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ErrorHandlerProvider>
        <Component {...pageProps} />
      </ErrorHandlerProvider>
    </ApolloProvider>
  )
}
