const USER_BASIC_INFO = `
  user {
    username
    imgPath
  }
`
const COMMENTS = `
  comments {
    id
    ${USER_BASIC_INFO}
    text
    likes
  }
`

export const POST = `
  posts {
    id
    ${USER_BASIC_INFO}
    ${COMMENTS}
    likeCount
    likes
    text
    iat
  }
`
