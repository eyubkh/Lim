import styled from 'styled-components'
import DisplayText from '../../atoms/displayText/DisplayText'
import Icon from '../../atoms/icon/Icon'

const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const UserPostAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  div {
    width: 44px;
    height: 44px;
    background-color: blue;
    border-radius: 17px;
  }
`

export default function UserPostInfo({ username, iat, likeCount }) {
  return (
    <Component>
      <UserPostAvatar>
        <div />
        <section>
          <DisplayText size={'regular'}>{username}</DisplayText>
          <DisplayText size={'small'}>now</DisplayText>
        </section>
      </UserPostAvatar>
      <Icon icon={'like'} count={likeCount} />
    </Component>
  )
}
