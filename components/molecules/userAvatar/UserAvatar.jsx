import DisplayText from '@components/atoms/displayText/DisplayText'
import Icon from '@components/atoms/icon/Icon'
import StyleText from '@components/atoms/styleText/StyleText'
import sendImage from '@utils/sendImage'
import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import NotifiacationDropbox from '../notificationDropbox/NotificationDropbox'

const Components = styled.div`
  display: flex;
  gap: 17px;
  align-items: center;
  .avatarImage {
    height: 72px;
    width: 72px;
    position: relative;
    border-radius: 17px;
    overflow: hidden;
  }
  .avatarImage:hover label {
    display: block;
  }
  .avatarImage label {
    position: absolute;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    background-color: transparent;
    bottom: 0;
    border-radius: 0px 6px 0px 0px;
    cursor: pointer;
    display: none;
  }
  .avatarImage label svg {
    width: 17px;
  }
  input {
    display: none;
  }

  .avatarName {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .avatarName span {
    display: flex;
    gap: 8px;
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
      <div className="avatarImage">
        <Image src={image} alt="user image" width={132} height={132} />
        <label htmlFor={'file-update'}>
          <Icon fill={'#f3f3f3'} icon={'photo'} />
        </label>
        <input onChange={fileHandler} type={'file'} id={'file-update'} />
      </div>
      <div className="avatarName">
        <DisplayText size={'regular'}>
          <StyleText bold>{username}</StyleText>
        </DisplayText>
        <span>
          <NotifiacationDropbox />
        </span>
      </div>
    </Components>
  )
}
