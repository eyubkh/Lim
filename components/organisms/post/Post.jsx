import { useMutation } from '@apollo/client'
import DisplayText from '@components/atoms/displayText/DisplayText'
import UserPostInfo from '@components/molecules/userPostInfo/UserPostInfo'
import { ADD_COMMENT } from '@graphql/client/mutation'
import { GET_USER } from '@graphql/client/queries'
import timeConversion from '@utils/timeConversion'
import { useState } from 'react'
import styled from 'styled-components'

const Component = styled.div`
  display: grid;
  gap: 17px;
  padding: 26px 26px;
  background-color: #f3f3f3;
  border-radius: 4px;
  input {
    background-color: transparent;
    border: none;
    outline: none;
  }
`

export default function Post({
  text,
  id,
  image,
  username,
  iat,
  comments,
  likeCount,
  isLiked,
}) {
  const [showComments, setShowComments] = useState(false)
  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [{ query: GET_USER }, 'userData'],
  })

  const addCommentHandler = (event) => {
    event.preventDefault()
    addComment({ variables: { text: event.target[0].value, postId: id } })
    event.target[0].value = ''
  }

  return (
    <Component>
      <UserPostInfo
        id={id}
        username={username}
        iat={timeConversion(iat)}
        likeCount={likeCount}
        commentCount={comments.length}
        toggleComments={() => setShowComments(!showComments)}
        image={image}
        isLiked={isLiked}
      />
      <DisplayText size={'regular'}>{text}</DisplayText>
      {showComments ? (
        <>
          <hr />
          {comments.map((comment) => (
            <div key={comment.id}>
              <p style={{ fontWeight: 'bold' }}>{comment.user.username}</p>
              <p>{comment.text}</p>
            </div>
          ))}
        </>
      ) : null}
      <hr />
      <form onSubmit={addCommentHandler}>
        <input placeholder={'Add a comment...'} />
        <button>send comment</button>
      </form>
    </Component>
  )
}
