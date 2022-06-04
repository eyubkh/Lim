import Image from 'next/image'
import styled from 'styled-components'
import DisplayText from '../../atoms/displayText/DisplayText'
import Icon from '../../atoms/icon/Icon'
import StyleText from '../../atoms/styleText/StyleText'

const Components = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;

  img {
    position: relative;
    border-radius: 51px;
    background-color: blue;
  }
`

const myLoader = ({ src, width, quality }) => {
  return `https://${src}/${width}`
}

export default function UserAvatar({ username }) {
  return (
    <Components>
      <Image
        loader={myLoader}
        src={'picsum.photos/'}
        alt="user image"
        width={132}
        height={132}
      />
      <DisplayText size={'regular'}>
        <StyleText bold>{username}</StyleText>
      </DisplayText>
      <Icon icon={'like'} />
    </Components>
  )
}
