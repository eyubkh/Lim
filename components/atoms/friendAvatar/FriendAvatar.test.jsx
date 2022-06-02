import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import FriendAvatar from './FriendAvatar'
import { mocksFriendAvatarProps } from './FriendAvatar.mocks'

describe('<FriendAvatar />', () => {
  test('mocking test pass', () => {
    const component = render(<FriendAvatar {...mocksFriendAvatarProps} />)
    const mock = mocksFriendAvatarProps.text
    expect(component.container).toHaveTextContent(mock)
  })
})
