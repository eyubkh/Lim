import { useMutation } from '@apollo/client'
import DisplayText from '@components/atoms/displayText/DisplayText'
import Icon from '@components/atoms/icon/Icon'
import { ADD_FRIEND } from '@graphql/client/mutation'
import { GET_USER } from '@graphql/client/queries'
import Image from 'next/image'
import styled from 'styled-components'

const Component = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    gap: 17px;
  }
  div img {
    border-radius: 17px;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`

export default function FriendAvatar({ username, imagePath, id, isFriend }) {
  const [add] = useMutation(ADD_FRIEND, {
    refetchQueries: [{ query: GET_USER }, 'getUserData'],
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
