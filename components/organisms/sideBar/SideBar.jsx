import { useMutation } from '@apollo/client'
import Icon from '@components/atoms/icon/Icon'
import FriendAvatar from '@components/molecules/friendAvatar/FriendAvatar'
import FriendSearch from '@components/molecules/friendSearch/FriendSearch'
import UserAvatar from '@components/molecules/userAvatar/UserAvatar'
import { FRIEND_SEARCH } from '@graphql/client/mutation'
import client from 'apollo-client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styled from 'styled-components'

const Component = styled.div`
  position: relative;
  z-index: 3;
  width: 300px;
  .sideBar {
    width: 300px;
    position: fixed;
    display: grid;
    gap: 17px;
    padding: 8px 0px 44px 26px;
    .friendList {
      display: grid;
      gap: 17px;
    }
  }
`

export default function SideBar({ username, imagePath, friends }) {
  const [searching, { data }] = useMutation(FRIEND_SEARCH)
  const [search, setSearch] = useState(false)
  const router = useRouter()
  const onChangeHandler = (event) => {
    event.preventDefault()
    searching({ variables: { text: event.target.value } })
  }

  const logOutHandler = async () => {
    window.localStorage.removeItem('token')
    await client.clearStore()
    router.push('/')
  }
  return (
    <Component>
      <div className="sideBar">
        <button
          style={{
            backgroundColor: 'blue',
            border: 'none',
            display: 'contents',
            cursor: 'pointer',
          }}
          onClick={logOutHandler}
        >
          <Icon icon={'exit'} fill={'#f25252'} />
        </button>
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
