import styled from 'styled-components'
import Icon from '../../atoms/icon/Icon'

const Components = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;

  & image {
    width: 132px;
    height: 132px;
    border-radius: 51px;
    background-color: blue;
  }
`

export default function UserAvatar() {
  return (
    <Components>
      <image />
      <Icon icon={'like'} />
    </Components>
  )
}
