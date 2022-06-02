import { gql } from 'apollo-server-micro'

export default gql`
  type Login {
    jwt: String
  }
  type Query {
    test: String
  }
`
