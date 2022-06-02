import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import HistoryAvatar from './HistoryAvatar'
import { mocksHistoryAvatarProps } from './HistoryAvatar.mocks'

describe('<HistoryAvatar />', () => {
  test('mocking test pass', () => {
    const component = render(<HistoryAvatar {...mocksHistoryAvatarProps} />)
    const mock = mocksHistoryAvatarProps.text
    expect(component.container).toHaveTextContent(mock)
  })
})
