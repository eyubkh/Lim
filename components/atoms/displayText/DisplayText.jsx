import styled from 'styled-components'

const Component = styled.p`
  text-align: ${(props) => (props.subTitle ? 'right' : 'left')};
  font-size: ${(props) => (props.title ? '16px' : '14px')};
`

export default function DisplayText({ children, ...props }) {
  return <Component {...props}>{children}</Component>
}
