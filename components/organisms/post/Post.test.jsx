import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Post from './Post'
import { mocksPostProps } from './Post.mocks'

describe('<Post />', () => {
  test('mocking test pass', () => {
    const component = render(<Post {...mocksPostProps} />)
    const mock = mocksPostProps.text
    expect(component.container).toHaveTextContent(mock)
  })
})
