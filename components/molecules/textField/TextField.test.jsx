import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import TextField from './TextField'
import { mocksTextFieldProps } from './TextField.mocks'

describe('<TextField />', () => {
  test('mocking test pass', () => {
    const component = render(<TextField {...mocksTextFieldProps} />)
    expect(component.container).toHaveTextContent(mocksTextFieldProps.title)
  })
})
