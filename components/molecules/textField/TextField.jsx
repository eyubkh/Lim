import styled from 'styled-components'
import DisplayText from '../../atoms/displayText/DisplayText'

const Input = styled.input`
  width: 300px;
  border-radius: 40px;
  border: 1px solid #00000055;
  padding: 5px 10px;
  outline: none;
  margin-top: 5px;
`

export default function TextField({ title, subTitle, ...props }) {
  return (
    <div>
      <DisplayText size="regular">{title}</DisplayText>
      <Input {...props} />
      <DisplayText size="small" right>
        {subTitle}
      </DisplayText>
    </div>
  )
}
