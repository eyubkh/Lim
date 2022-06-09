import { useMutation } from '@apollo/client'
import Image from 'next/image'
import styled from 'styled-components'
import { ADD_FRIEND, GET_USER } from '../../../utils/queries'
import DisplayText from '../displayText/DisplayText'
import Icon from '../icon/Icon'

const Component = styled.div`
  display: flex;
  gap: 17px;
  img {
    border-radius: 17px;
  }
`

export default function FriendAvatar({ username, image, id }) {
  const [add, { data }] = useMutation(ADD_FRIEND, {
    refetchQueries: [{ query: GET_USER }, 'user'],
  })
  const addFriend = (event) => {
    event.preventDefault()
    add({ variables: { addFriendId: id } })
  }
  return (
    <>
      <Component>
        <Image src={image} width={44} height={44} alt={'friend image avatar'} />
        <DisplayText size={'regular'}>{username}</DisplayText>
      </Component>
      <button onClick={addFriend}>
        <Icon icon={'add'} />
      </button>
    </>
  )
}
