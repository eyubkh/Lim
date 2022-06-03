import styled from 'styled-components'
import DisplayText from '../../atoms/displayText/DisplayText'
import UserPostInfo from '../../molecules/userPostInfo/UserPostInfo'

const Component = styled.div`
  display: grid;
  gap: 17px;
  padding: 26px 44px;
  background-color: #f3f3f3;
  border-radius: 26px;
`

export default function Post({ text, username, iat, likeCount }) {
  return (
    <Component>
      <UserPostInfo username={username} iat={iat} likeCount={likeCount} />
      <DisplayText size={'regular'}>{text}</DisplayText>
    </Component>
  )
}
