import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import UserPostInfo from './UserPostInfo'
import { mocksUserPostInfoProps } from './UserPostInfo.mocks'

describe('<UserPostInfo />', () => {
  test('mocking test pass', () => {
    const component = render(<UserPostInfo {...mocksUserPostInfoProps} />)
    const mock = mocksUserPostInfoProps.username
    expect(component.container).toHaveTextContent(mock)
  })
})
