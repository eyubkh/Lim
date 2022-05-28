import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import DisplayText from './DisplayText'
import { mocksDisplayTextProps } from './DisplayText.mocks'

describe('<DisplayText />', () => {
  const { children, size } = mocksDisplayTextProps
  const { container } = render(
    <DisplayText size={size}>{children}</DisplayText>
  )
  test('rendernig children', () => {
    expect(container).toHaveTextContent(children)
  })
})
