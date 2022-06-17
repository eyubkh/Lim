import Portal from '@components/pages/Portal'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'

describe('<Portal />', () => {
  describe('rendering raw component', () => {
    beforeEach(() => {
      render(<Portal />)
    })
    test('login button is on it', () => {
      expect(screen.getByText(/login/i)).toBeInTheDocument()
    })
  })

  describe('clicking on "create account" button', () => {
    beforeEach(async () => {
      render(<Portal />)
      await user.click(screen.getByText(/Create account/))
    })
    test('swiching to singup component and "singup" button must to be on it', () => {
      expect(screen.getByText(/singup/i)).toBeInTheDocument()
    })
  })
})
