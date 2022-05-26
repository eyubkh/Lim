import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Button from './Button'
import { mocksButtonProps } from './Button.mocks'

describe('<Button />', () => {
  test('mocking test pass', () => {
    const component = render(<Button {...mocksButtonProps} />)
    const mock = mocksButtonProps.text
    expect(component.container).toHaveTextContent(mock)
  })
})
