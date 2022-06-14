import { gql } from 'apollo-server-micro'

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
      friends
    }
  }
`

export const ADD_FRIEND = gql`
  mutation addFriend($addFriendId: String) {
    addFriend(id: $addFriendId)
  }
`

export const ADD_COMMENT = gql`
  mutation addComent($text: String, $postId: ID) {
    addComment(text: $text, postId: $postId)
  }
`
export const LIKE_COMMENT = gql`
  mutation likeComment($commentId: String) {
    likeComment(commentId: $commentId)
  }
`

export const DELETE_FRIEND = gql`
  mutation deleteFriend($deleteId: String) {
    deleteFriend(deleteId: $deleteId)
  }
`
