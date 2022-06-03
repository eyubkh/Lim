import styled from 'styled-components'
import { sizeRules } from './DisplayText.mocks'

const Component = styled.p`
  font-size: ${({ size }) => (size === 'small' ? '10px' : '17px')};
  text-align: ${({ right }) => (right ? 'right' : 'left')};
  margin: 0;
`

export default function DisplayText({ children, size, ...props }) {
  size?.toLowerCase()
  if (!sizeRules.includes(size)) {
    console.warn(`Size (${size}) prop is not specified...`)
  }
  return (
    <Component {...props} size={size}>
      {children}
    </Component>
  )
}
