import styled from 'styled-components'
import DisplayText from '../../atoms/displayText/DisplayText'

const Component = styled.div`
  text-align: left;
`
const Input = styled.input`
  width: 300px;
  border-radius: 40px;
  border: 1px solid #00000055;
  padding: 5px 10px;
  outline: none;
`

export default function TextField({ title, subTitle }) {
  return (
    <Component>
      <DisplayText size="regular" element="p">
        {title}
      </DisplayText>
      <Input />
      <DisplayText size="small" element="p">
        {subTitle}
      </DisplayText>
    </Component>
  )
}
