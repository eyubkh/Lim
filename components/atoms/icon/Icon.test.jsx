import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Icon from './Icon'
import { mocksIconProps } from './Icon.mocks'

describe('<Icon />', () => {
  test('mocking test pass', () => {
    const component = render(<Icon {...mocksIconProps} />)
    const mock = mocksIconProps.icon
    expect(component.container).toHaveTextContent('Select an icon')
  })
})
