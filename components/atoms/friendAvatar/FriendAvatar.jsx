import Image from 'next/image'
import styled from 'styled-components'
import DisplayText from '../displayText/DisplayText'

const Component = styled.div`
  display: flex;
  gap: 17px;
  img {
    border-radius: 17px;
  }
`

const myLoader = ({ src, width, quality }) => {
  return `https://${src}/${width}`
}

export default function FriendAvatar({ username }) {
  return (
    <Component>
      <Image
        loader={myLoader}
        src={'picsum.photos/'}
        width={44}
        height={44}
        alt={'friend image avatar'}
      />
      <DisplayText size={'regular'}>{username}</DisplayText>
    </Component>
  )
}
