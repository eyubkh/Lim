import { gql } from 'apollo-server-micro'

export default gql`
  type Profile {
    id: ID
    username: String
    password: String
  }

  type netifiContent {
    username: String
    message: String
    read: Boolean
  }

  type Notification {
    id: ID
    notifi: [netifiContent]
    notifiCount: Int
  }
  type Comment {
    id: ID
    user: User
    text: String
    likes: [ID]
  }
  type Post {
    id: ID
    text: String
    likeCount: Int
    iat: String
    comments: [Comment]
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
  type UserSearch {
    id: ID
    username: String
    friends: [ID]
    imgPath: String
  }
  type Query {
    userData: User
    userNotification: Notification
    resetNotification: String
  }
  type Mutation {
    createPost(text: String): Post
    like(id: String): String
    friendSearch(text: String): [UserSearch]
    addFriend(id: String): String
    addComment(text: String, postId: ID): String
    likeComment(commentId: String): String
    deleteFriend(deleteId: String): String
  }
`
