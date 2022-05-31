import { gql } from 'apollo-server-micro'

export default gql`
  type User {
    username: String
    password: String
  }
  type Get {
    message: String
  }

  type Query {
    user(username: String): User
    get: Get
  }
`
