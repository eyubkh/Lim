import { useMutation } from '@apollo/client'
import { useState } from 'react'
import styled from 'styled-components'
import { FRIEND_SEARCH } from '../../../utils/queries'
import FriendAvatar from '../../atoms/friendAvatar/FriendAvatar'
import FriendSearch from '../../molecules/friendSearch/FriendSearch'
import UserAvatar from '../../molecules/userAvatar/UserAvatar'

const Component = styled.div`
  padding: 44px 26px;
  background-color: #f3f3f3;
`

export default function SideBar({ username, imagePath, friends }) {
  const [searching, { data }] = useMutation(FRIEND_SEARCH)
  const [search, setSearch] = useState(false)
  const onChangeHandler = (event) => {
    event.preventDefault()
    searching({ variables: { text: event.target.value } })
  }
  return (
    <Component>
      <UserAvatar username={username} imagePath={imagePath} />
      <FriendSearch
        search={search}
        setSearch={setSearch}
        handler={onChangeHandler}
      />
      {search
        ? data?.friendSearch.map((friend) => {
            return (
              <FriendAvatar
                id={friend.id}
                key={friend.id}
                username={friend.username}
                image={friend.imgPath}
              />
            )
          })
        : friends?.map((friend) => {
            return (
              <FriendAvatar
                id={friend.id}
                key={friend.id}
                username={friend.username}
                image={friend.imgPath}
              />
            )
          })}
    </Component>
  )
}
