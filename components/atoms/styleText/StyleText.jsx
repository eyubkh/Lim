import styled from 'styled-components'

const Component = styled.span`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'regular')};
`
export default function StyleText({ children, ...props }) {
  return <Component {...props}>{children}</Component>
}
