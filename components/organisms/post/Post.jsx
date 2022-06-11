import { useMutation } from '@apollo/client'
import { useState } from 'react'
import styled from 'styled-components'
import { ADD_COMMENT } from '../../../utils/queries'
import timeConversion from '../../../utils/timeConversion'
import DisplayText from '../../atoms/displayText/DisplayText'
import UserPostInfo from '../../molecules/userPostInfo/UserPostInfo'

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
  const [addComment] = useMutation(ADD_COMMENT)
  const addCommentHandler = (event) => {
    event.preventDefault()
    addComment({ variables: { text: event.target[0].value, postId: id } })
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
            <p key={comment.text}>{comment.text}</p>
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
