import DisplayText from '@components/atoms/displayText/DisplayText'
import CommentTextField from '@components/molecules/commentTextField/CommentTextField'
import CommentUser from '@components/molecules/commentUser/CommentUser'
import UserPostInfo from '@components/molecules/userPostInfo/UserPostInfo'
import timeConversion from '@utils/timeConversion'
import { useState } from 'react'
import styled from 'styled-components'

const Component = styled.div`
  background-color: #f3f3f3;
  .header {
    border: solid 1px #33333344;
    border-radius: 4px 4px 0px 0px;
    border-bottom: none;
    display: grid;
    padding: 17px 26px;
    gap: 17px;
  }
`

const CommentBody = styled.div`
  display: grid;
  gap: 17px;
  padding: 17px 26px;
  border: solid 1px #33333344;
  border-bottom: none;
`

export default function Post({
  text,
  id,
  image,
  username,
  iat,
  comments,
  likeCount,
  userId,
  likes,
}) {
  const [showComments, setShowComments] = useState(false)
  return (
    <Component>
      <div className="header">
        <UserPostInfo
          id={id}
          username={username}
          iat={timeConversion(iat)}
          likeCount={likeCount}
          commentCount={comments.length}
          toggleComments={() => setShowComments(!showComments)}
          image={image}
          isLiked={likes.includes(userId)}
        />
        <DisplayText size={'regular'}>{text}</DisplayText>
      </div>
      {showComments ? (
        <CommentBody>
          {comments.map((comment) => (
            <CommentUser
              key={comment.id}
              comment={comment}
              isLiked={comment.likes.includes(userId)}
            />
          ))}
        </CommentBody>
      ) : null}

      <CommentTextField id={id} />
    </Component>
  )
}
