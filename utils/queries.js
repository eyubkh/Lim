import { gql } from 'apollo-server-micro'

export const GET_USER = gql`
  query getUserData {
    userData {
      username
      imgPath
      friends {
        id
        username
        imgPath
        posts {
          id
          user {
            username
            imgPath
          }
          likeCount
          likes
          text
          iat
        }
      }
      posts {
        id
        user {
          username
          imgPath
        }
        likeCount
        likes
        text
        iat
      }
    }
  }
`

export const CREATE_POST = gql`
  mutation createPost($text: String) {
    createPost(text: $text) {
      text
    }
  }
`

export const LIKE = gql`
  mutation like($likeid: String) {
    like(id: $likeid)
  }
`
export const FRIEND_SEARCH = gql`
  mutation friendSearch($text: String) {
    friendSearch(text: $text) {
      id
      username
      imgPath
    }
  }
`

export const ADD_FRIEND = gql`
  mutation addFriend($addFriendId: String) {
    addFriend(id: $addFriendId)
  }
`
