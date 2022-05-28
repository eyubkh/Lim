import styled from 'styled-components'

const Component = styled.button`
  font-size: 16px;
  padding: 8px 50px;
  border-radius: 40px;
  text-decoration: none;
  border: none;
  font-weight: 700;
  background-color: #3cffc2;
  cursor: pointer;
`
export default function Button({ text, handler }) {
  return <Component onClick={handler}>{text}</Component>
}
