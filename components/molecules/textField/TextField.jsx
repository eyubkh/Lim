import styled from 'styled-components'
import DisplayText from '../../atoms/displayText/DisplayText'

const Component = styled.div`
  width: 300px;
`
const Input = styled.input`
  width: 100%;
  border-radius: 40px;
  border: 1px solid #00000055;
  padding: 5px 10px;
  outline: none;
`

export default function TextField({ title, subTitle }) {
  return (
    <Component>
      <DisplayText title>{title}</DisplayText>
      <Input />
      <DisplayText subTitle>{subTitle}</DisplayText>
    </Component>
  )
}
