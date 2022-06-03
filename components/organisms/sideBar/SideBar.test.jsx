import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import SideBar from './SideBar'
import { mocksSideBarProps } from './SideBar.mocks'

describe('<SideBar />', () => {
  test('mocking test pass', () => {
    const component = render(<SideBar {...mocksSideBarProps} />)
    const mock = mocksSideBarProps.username
    expect(component.container).toHaveTextContent(mock)
  })
})
