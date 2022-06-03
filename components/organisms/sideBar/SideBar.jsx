import styled from 'styled-components'
import FriendAvatar from '../../atoms/friendAvatar/FriendAvatar'
import UserAvatar from '../../molecules/userAvatar/UserAvatar'

const Component = styled.div`
  padding: 44px 26px;
  background-color: #f3f3f3;
`

export default function SideBar({ username }) {
  return (
    <Component>
      <UserAvatar username={username} />
      <h3>Friend</h3>
      <FriendAvatar username={'Abdulah'} />
    </Component>
  )
}
