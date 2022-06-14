import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { ErrorHandlerProvider } from '@utils/errorHandlerUi'
import ErrorHandlerComponent from './ErrorHandlerComponent'

describe('<ErrorHandlerComponent />', () => {
  const context = { error: 'error' }
  const component = render(
    <ErrorHandlerProvider test={context}>
      <ErrorHandlerComponent />
    </ErrorHandlerProvider>
  )
  test('maching context message', () => {
    expect(component.getByText(context.error)).toHaveTextContent(context.error)
  })
})
