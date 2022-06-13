import { useMutation } from '@apollo/client'
import DisplayText from '@components/atoms/displayText/DisplayText'
import Icon from '@components/atoms/icon/Icon'
import { LIKE } from '@graphql/client/mutation'
import { GET_USER } from '@graphql/client/queries'
import Image from 'next/image'
import styled from 'styled-components'

const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .icons {
    display: flex;
    gap: 17px;
  }
`

const UserPostAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  img {
    border-radius: 17px;
  }
`

export default function UserPostInfo({
  username,
  image,
  id,
  iat,
  likeCount,
  isLiked,
  commentCount = 0,
  toggleComments,
}) {
  const [like] = useMutation(LIKE, {
    refetchQueries: [{ query: GET_USER }],
  })
  const likeHandler = (event) => {
    event.preventDefault()
    like({ variables: { likeid: id } })
  }
  const commentHandler = (event) => {
    event.preventDefault()
    toggleComments()
  }
  return (
    <Component>
      <UserPostAvatar>
        <Image src={image} width={44} height={44} alt={'post user avatar'} />
        <section>
          <DisplayText size={'regular'}>{username}</DisplayText>
          <DisplayText size={'small'}>{iat}</DisplayText>
        </section>
      </UserPostAvatar>
      <div className={'icons'}>
        <button onClick={commentHandler}>
          <Icon icon={'comment'} count={commentCount} />
        </button>
        <button onClick={likeHandler}>
          <Icon
            fill={isLiked ? '#F25252' : '#333'}
            icon={'like'}
            count={likeCount}
          />
        </button>
      </div>
    </Component>
  )
}
