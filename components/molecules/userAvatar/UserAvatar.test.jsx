import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import UserAvatar from './UserAvatar'
import { mocksUserAvatarProps } from './UserAvatar.mocks'

describe('<UserAvatar />', () => {
  test('mocking test pass', () => {
    const component = render(<UserAvatar {...mocksUserAvatarProps} />)
    const mock = mocksUserAvatarProps.username
    expect(component.container).toHaveTextContent(mock)
  })
})
