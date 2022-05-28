import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import StyleText from './StyleText'
import { mocksStyleTextProps } from './StyleText.mocks'

describe('<StyleText />', () => {
  test('mocking test pass', () => {
    const component = render(<StyleText {...mocksStyleTextProps} />)
    const { children } = mocksStyleTextProps
    expect(component.container).toHaveTextContent(children)
  })
})
