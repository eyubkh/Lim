import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Login from './Login'

describe('<Login />', () => {
  test('mocking test pass', () => {
    const component = render(<Login />)
    expect(component.container).toHaveTextContent('Your social network.')
  })
})
