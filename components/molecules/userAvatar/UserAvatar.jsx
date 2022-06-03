import styled from 'styled-components'
import DisplayText from '../../atoms/displayText/DisplayText'
import Icon from '../../atoms/icon/Icon'
import StyleText from '../../atoms/styleText/StyleText'

const Components = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;

  div {
    width: 132px;
    height: 132px;
    border-radius: 51px;
    background-color: blue;
  }
`

export default function UserAvatar({ username }) {
  return (
    <Components>
      <div />
      <DisplayText size={'regular'}>
        <StyleText bold>{username}</StyleText>
      </DisplayText>
      <Icon icon={'like'} />
    </Components>
  )
}
