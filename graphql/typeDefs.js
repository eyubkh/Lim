import { gql } from 'apollo-server-micro'

export default gql`
  type Profile {
    id: ID
    username: String
    password: String
  }
  type Post {
    id: ID
    text: String
    time: String
    likes: Int
    username: String
  }
  type User {
    profile: Profile
    posts: [Post]
  }
  type Query {
    user: User
  }
  type Mutation {
    createPost(text: String): Post
  }
`
