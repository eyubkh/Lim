import { gql } from 'apollo-server-micro'
import { POST } from './types'

export const GET_USER = gql`
  query getUserData {
    userData {
      id
      username
      imgPath
      likes
      friends {
        id
        username
        imgPath
        ${POST}
      }
      ${POST}
    }
  }
`

export const GET_NOTIFICATION = gql`
  query getUserNotification {
    userNotification {
      id
      notifi {
        username
        message
        read
      }
      notifiCount
    }
  }
`

export const RESET_NOTIFICATION = gql`
  query resetUserNotification {
    resetNotification
  }
`
