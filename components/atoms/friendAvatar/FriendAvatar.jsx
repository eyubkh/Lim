import styled from 'styled-components'

const Component = styled.div`
  display: flex;
  gap: 17px;
  & image {
    background-color: blue;
    width: 44px;
    height: 44px;
    border-radius: 17px;
  }
`

export default function FriendAvatar({ text }) {
  return (
    <Component>
      <image />
      <p>{text}</p>
    </Component>
  )
}
