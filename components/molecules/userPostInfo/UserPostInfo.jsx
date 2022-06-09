import { useMutation } from '@apollo/client'
import Image from 'next/image'
import styled from 'styled-components'
import { GET_USER, LIKE } from '../../../utils/queries'
import DisplayText from '../../atoms/displayText/DisplayText'
import Icon from '../../atoms/icon/Icon'

const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
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

export default function UserPostInfo({ username, image, id, iat, likeCount }) {
  const [like] = useMutation(LIKE, {
    refetchQueries: [{ query: GET_USER }],
  })
  const likeHandler = (event) => {
    event.preventDefault()
    like({ variables: { likeid: id } })
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
      <button onClick={likeHandler}>
        <Icon icon={'like'} count={likeCount} />
      </button>
    </Component>
  )
}
