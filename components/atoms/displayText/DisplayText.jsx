import styled from 'styled-components'
import { elementRules, sizeRules } from './DisplayText.mocks'

const Component = styled.p`
  font-size: ${({ size }) => {
    switch (size) {
      case 'regular':
        return '16px'
      case 'small':
        return '12px'
      case 'large':
        return '24px'
      default:
        return '16px'
    }
  }};
`

export default function DisplayText({ children, size, element }) {
  size?.toLowerCase()
  element?.toLowerCase()
  if (!sizeRules.includes(size) || !elementRules.includes(element)) {
    console.warn(`Size (${size}) or Element (${element}) prop is wrong...`)
  }
  return (
    <Component as={element} size={size}>
      {children}
    </Component>
  )
}
