import { gql } from 'apollo-server-micro'
import { POST } from './types'

export const GET_USER = gql`
  query getUserData {
    userData {
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
