import styled from 'styled-components'
import Icon from '../../atoms/icon/Icon'

const Component = styled.div`
  background-color: #f3f3f3;
  border-radius: 26px;
  padding: 26px 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    background-color: transparent;
    border: none;
    outline: none;
  }
`

export default function CreatePost({}) {
  return (
    <Component>
      <input placeholder="What's happening?" />
      <Icon icon={'add'} />
    </Component>
  )
}
