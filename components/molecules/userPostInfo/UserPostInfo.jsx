import Image from 'next/image'
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
  img {
    border-radius: 17px;
  }
`

const myLoader = ({ src, width, quality }) => {
  return `https://${src}/${width}`
}

export default function UserPostInfo({ username, iat, likeCount }) {
  return (
    <Component>
      <UserPostAvatar>
        <Image
          loader={myLoader}
          src={'picsum.photos/'}
          width={44}
          height={44}
          alt={'post user avatar'}
        />
        <section>
          <DisplayText size={'regular'}>{username}</DisplayText>
          <DisplayText size={'small'}>{iat}</DisplayText>
        </section>
      </UserPostAvatar>
      <Icon icon={'like'} count={likeCount} />
    </Component>
  )
}
