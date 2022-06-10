import { useMutation } from '@apollo/client'
import { useState } from 'react'
import styled from 'styled-components'
import { FRIEND_SEARCH } from '../../../utils/queries'
import FriendAvatar from '../../molecules/friendAvatar/FriendAvatar'
import FriendSearch from '../../molecules/friendSearch/FriendSearch'
import UserAvatar from '../../molecules/userAvatar/UserAvatar'

const Component = styled.div`
  position: relative;
  width: 300px;
  .sideBar {
    width: 300px;
    position: fixed;
    display: grid;
    gap: 17px;
    padding: 44px 0px 44px 26px;
    .friendList {
      display: grid;
      gap: 17px;
    }
  }
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
      <div className="sideBar">
        <UserAvatar username={username} imagePath={imagePath} />
        <FriendSearch
          search={search}
          setSearch={setSearch}
          handler={onChangeHandler}
        />
        <div className="friendList">
          {search
            ? data?.friendSearch.map((friend) => {
                return (
                  <FriendAvatar
                    id={friend.id}
                    key={friend.id}
                    username={friend.username}
                    imagePath={friend.imgPath}
                    isFriend={false}
                  />
                )
              })
            : friends?.map((friend) => {
                return (
                  <FriendAvatar
                    id={friend.id}
                    key={friend.id}
                    username={friend.username}
                    imagePath={friend.imgPath}
                    isFriend={true}
                  />
                )
              })}
        </div>
      </div>
    </Component>
  )
}
