import { useMutation } from '@apollo/client'
import DisplayText from '@components/atoms/displayText/DisplayText'
import Icon from '@components/atoms/icon/Icon'
import StyleText from '@components/atoms/styleText/StyleText'
import { LIKE_COMMENT } from '@graphql/client/mutation'
import { GET_USER } from '@graphql/client/queries'
import Image from 'next/image'
import styled from 'styled-components'

const Component = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .user {
    display: flex;
    gap: 17px;
  }
  .user img {
    border-radius: 11px;
  }
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
`

export default function CommentUser({ comment, isLiked }) {
  const [like] = useMutation(LIKE_COMMENT, {
    refetchQueries: [{ query: GET_USER }, 'getUserData'],
  })
  const { user, text, id, likes } = comment
  const likeCommentHandler = () => {
    like({ variables: { commentId: id } })
  }
  return (
    <Component>
      <div className="user">
        <Image src={user.imgPath} width={27} height={27} alt={'user avatar'} />
        <StyleText bold>
          <DisplayText size={'regular'}>{user.username}</DisplayText>
        </StyleText>
        <DisplayText size={'regular'}>{text}</DisplayText>
      </div>
      <button onClick={likeCommentHandler}>
        <Icon icon={'like'} fill={isLiked ? '#F25252' : '#333'} />
      </button>
    </Component>
  )
}
