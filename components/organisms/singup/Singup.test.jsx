import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Singup from './Singup'

describe('<Singup />', () => {
  test('mocking test pass', () => {
    const component = render(<Singup />)
    expect(component.container).toHaveTextContent('Your social network.')
  })
})
