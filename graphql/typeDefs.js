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
    likeCount: Int
    iat: String
    user: User
    likes: [ID]
  }
  type User {
    id: ID
    username: String
    imgPath: String
    friends: [User]
    likes: [ID]
    posts: [Post]
  }
  type Query {
    userData: User
  }
  type Mutation {
    createPost(text: String): Post
    like(id: String): String
    friendSearch(text: String): [User]
    addFriend(id: String): String
  }
`
