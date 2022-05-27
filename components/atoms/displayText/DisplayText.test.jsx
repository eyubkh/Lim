import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import DisplayText from './DisplayText'
import { mocksDisplayTextProps } from './DisplayText.mocks'

describe('<DisplayText />', () => {
  const { children, ...props } = mocksDisplayTextProps
  test('rendernig children', () => {
    const { container } = render(
      <DisplayText {...props}>{children}</DisplayText>
    )
    expect(container).toHaveTextContent(children)
  })
})
