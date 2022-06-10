import { useMutation } from '@apollo/client'
import Image from 'next/image'
import styled from 'styled-components'
import { ADD_FRIEND, GET_USER } from '../../../utils/queries'
import DisplayText from '../../atoms/displayText/DisplayText'
import Icon from '../../atoms/icon/Icon'

const Component = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    gap: 17px;
  }
  div img {
    border-radius: 17px;
  }
`

export default function FriendAvatar({ username, imagePath, id, isFriend }) {
  const [add] = useMutation(ADD_FRIEND, {
    refetchQueries: [{ query: GET_USER }, 'user'],
  })
  const addFriend = (event) => {
    event.preventDefault()
    add({ variables: { addFriendId: id } })
  }
  return (
    <Component>
      <div>
        <Image
          src={imagePath}
          width={44}
          height={44}
          alt={'friend image avatar'}
        />
        <DisplayText size={'regular'}>{username}</DisplayText>
      </div>
      {isFriend ? (
        ''
      ) : (
        <button onClick={addFriend}>
          <Icon icon={'add'} />
        </button>
      )}
    </Component>
  )
}
