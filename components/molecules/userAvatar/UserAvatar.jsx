import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import sendImage from '../../../utils/sendImage'
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
  label {
    width: 30px;
    height: 30px;
    background-color: blue;
    position: absolute;
    cursor: pointer;
  }
  input {
    display: none;
  }
`

export default function UserAvatar({ username, imagePath }) {
  const [image, setImage] = useState(imagePath)
  const fileHandler = async (event) => {
    let image = event.target.files[0]
    const result = await sendImage(image)
    setImage(result)
  }
  return (
    <Components>
      <Image src={image} alt="user image" width={132} height={132} />
      <label htmlFor={'file-update'} />
      <input onChange={fileHandler} type={'file'} id={'file-update'} />
      <DisplayText size={'regular'}>
        <StyleText bold>{username}</StyleText>
      </DisplayText>
      <Icon icon={'like'} />
    </Components>
  )
}
