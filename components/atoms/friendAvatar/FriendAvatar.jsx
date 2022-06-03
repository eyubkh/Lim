import styled from 'styled-components'
import DisplayText from '../displayText/DisplayText'

const Component = styled.div`
  display: flex;
  gap: 17px;
  div {
    background-color: blue;
    width: 44px;
    height: 44px;
    border-radius: 17px;
  }
`

export default function FriendAvatar({ username }) {
  return (
    <Component>
      <div />
      <DisplayText size={'regular'}>{username}</DisplayText>
    </Component>
  )
}
