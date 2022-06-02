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
    get: Get
  }
  type Mutation {
    user(username: String): User
  }
`
